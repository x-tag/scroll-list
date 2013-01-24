(function(){


window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    

  var draw = function(items){
    items.forEach(function(item){
      var elem = document.createElement('x-item');
      elem.title = item.title;
      elem.description = item.description;
      this.addItem(elem);
    },this);
  }

  xtag.register('x-item', {
    lifecycle:{
      created: function(){
        this.innerHTML = '<h2></h2><p></p>';
      }
    }, 
    accessors: {
      heading: {
        get: function(){
          return this.querySelector('h2').innerHTML;
        },
        set: function(value){
          //console.log("h2",value);
          this.querySelector('h2').textContent = value;
        }
      },
      description: {
        get: function(){
          return this.querySelector('p').innerHTML;
        },
        set: function(value){           
          this.querySelector('p').innerHTML = value;
        }
      },
    }
  });

  xtag.register('x-scrolling-list', {
    lifecycle:{
      created: function(){
        this.innerHTML = '<div></div>';
        this.xtag.data = {
          lastScroll: 0,
          index: 0,
          items: [],
          buffer: 10,
          avgHeight:0,
          inMargin: 0,
          delta:0
        };
      }
    },
    events:{
      'overflow': function(){
   
      }, 
      'underflow': function(){

      },
      'scroll': function(e){
        var list = this;
        requestAnimFrame(function(){
          //console.log("scroll");
          var idx = 0,
            delta = 0;

            delta = list.scrollTop - list.xtag.data.lastScroll;
            list.xtag.data.lastScroll = list.scrollTop;

          if(list.scrollTop == 0 && list.xtag.data.index != 0){
              for (var i = 0; i < list.xtag.data.index; i++){
                var data = list.items[--list.xtag.data.index];
                list.firstChild.lastChild.heading = data.title;
                list.firstChild.insertBefore(list.firstChild.lastChild, list.firstChild.firstChild);
              }              
              list.firstChild.style.marginTop = 0 + "px";
              list.firstChild.style.marginBottom = list.items.length * list.xtag.data.avgHeight; + "px";
              return;
          }


          if (delta<0){

            list.xtag.data.delta += delta;

            //console.log("UP", list.xtag.data.delta);
            delta = Math.abs(list.xtag.data.delta);

            if (delta > list.xtag.data.avgHeight){

              var swapCount = Math.round(delta/list.xtag.data.avgHeight);
              
              var marginDelta = list.xtag.data.avgHeight * swapCount;
              list.xtag.data.delta += marginDelta;

//console.log("moving", swapCount, list.xtag.data.delta, marginDelta, list.xtag.data.index);

              for (var i = 0; i < swapCount; i++){     
                var data = list.items[--list.xtag.data.index];
                list.firstChild.lastChild.heading = data.title;
                //console.log(data.title);
                list.firstChild.insertBefore(list.firstChild.lastChild, list.firstChild.firstChild);
                
              }

              list.firstChild.style.marginTop = (getValue(list.firstChild.style.marginTop) - marginDelta) + "px";
              list.firstChild.style.marginBottom = (getValue(list.firstChild.style.marginBottom) + marginDelta) + "px";

            }
          }
          else if (delta>0){

            list.xtag.data.delta += delta;

            //console.log("DWN", list.xtag.data.delta);

            if (list.xtag.data.delta > list.xtag.data.avgHeight){

              var swapCount = Math.round(list.xtag.data.delta/list.xtag.data.avgHeight);
              


              var marginDelta = list.xtag.data.avgHeight * swapCount;
              list.xtag.data.delta -= marginDelta;

//console.log("moving", swapCount, list.xtag.data.delta, marginDelta, list.xtag.data.index);

              for (var i = 0; i < swapCount; i++){
                var data = list.items[(list.xtag.data.index++) + list.xtag.data.buffer];
                list.firstChild.firstChild.heading = data.title;
                //console.log(data.title);
                list.firstChild.appendChild(list.firstChild.firstChild);
              }

              list.firstChild.style.marginTop = (getValue(list.firstChild.style.marginTop) + marginDelta) + "px";
              list.firstChild.style.marginBottom = (getValue(list.firstChild.style.marginBottom) - marginDelta) + "px";

            }

          }
          
          
        });
      }
    },
    accessors:{
      items: {
        get: function(){
          return this.xtag.data.items;
        },
        set: function(items){
          this.xtag.data.items = items;
          init.call(this,items);
        }
      },
      index: {
        get: function(){
          return this.xtag.data.index;
        },
        set: function(value){
          this.xtag.data.index = Number(value);
        }
      },
      buffer: {
        get: function(){
          return this.xtag.data.buffer;
        },
        set: function(value){
          this.xtag.data.buffer = Number(value);
          init.call(this);
        }
      }
    }
  });



function init(){

  var idx = this.index,    
    length = this.items.length;

  for(var count = 0; count < this.buffer && (idx+count)<length; count++){    
    var item = this.items[count+idx];
    var elem = document.createElement('x-item');
    elem.heading = item.title;
    elem.description = item.description;
    this.firstChild.appendChild(elem);
  }

  setMargins.call(this);
}

function setMargins(){

  var idx = this.index,    
    length = this.items.length,  
    marginTop = getValue(this.firstChild.style.marginTop),
    avgHeight = 0;

//console.log("DEBUG:", this.firstChild.scrollHeight, marginTop);

  if(marginTop == 0){
    avgHeight = this.xtag.data.avgHeight = (this.firstChild.scrollHeight - marginTop)  / (this.buffer) ;
  }else{
    avgHeight = this.xtag.data.avgHeight;
  }

  marginTop = avgHeight * idx;
  var bottomMargin = avgHeight * (length - this.buffer - idx);

  //console.log("total height", this.buffer,avgHeight, this.scrollHeight/this.buffer, marginTop, bottomMargin);

  this.firstChild.style.marginTop = marginTop + "px";
  this.firstChild.style.marginBottom = bottomMargin + "px";
  
  this.xtag.data.inMargin = (marginTop - avgHeight)/avgHeight;

  this.scrollTop = marginTop;

}

function getValue(value){

  return Number(value.length ? value.match(/(\d+)/)[1] : 0);

}



})();