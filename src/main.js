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
    
  xtag.register('x-scrolling-list', {
    lifecycle:{
      created: function(){
        this.innerHTML = '<x-growbox></x-growbox>';
        this.xtag.data = {
          lastScroll: 0,
          index: 0,
          items: [],
          buffer: 8,
          avgHeight: 0,          
          delta: 0,
          updating: false
        };        
      }
    },
    events:{
      'overflow': function(e){
      
      }, 
      'underflow': function(e){

      },
      'grow': function(e){
        if (this.scrollHeight > getValue(this.firstChild.style.height)){
          
        }
        e.stopPropagation();
      },
      'shrink': function(e){
        console.log("shrink");        
        e.stopPropagation();
      },
      'scroll': function(e){
        var list = this,
          delta = 0;
        
        delta = list.scrollTop - list.xtag.data.lastScroll;

        list.xtag.data.lastScroll = list.scrollTop;

        list.xtag.data.delta += delta;
        
        requestAnimFrame(function(){

          var idx = 0,
            growBoxHeight = getValue(list.firstChild.style.height),
            marginTop = getValue(list.firstChild.style.marginTop),
            marginBottom = getValue(list.firstChild.style.marginBottom),
            avgHeight = growBoxHeight / list.buffer;


          if (list.scrollTop == 0 && list.xtag.data.index != 0){
            console.log("TOP");
            
            idx = list.xtag.data.index-1;
            while (idx>-1){
                var data = list.items[idx];
                list.render.call(list,
                  list.innerList.lastChild, 
                  data,
                  idx);
                list.innerList.insertBefore(list.innerList.lastChild, list.innerList.firstChild);
                idx--;
            }
            list.xtag.data.index = 0;
            list.firstChild.style.marginTop = 0 + "px";
            list.firstChild.style.marginBottom = list.items.length * list.xtag.data.avgHeight; + "px";
            return;
          }

          if (delta>0){

            idx = list.xtag.data.index + list.xtag.data.buffer;

            if (list.xtag.data.delta > avgHeight && list.items.length > idx){

// this height is wrong, it causes the list to jump.  Some reason the avgHeight is closer
// but there has to be a way to get the correct height

              var itemHeight = avgHeight; //list.innerList.firstChild.scrollHeight;

              list.xtag.data.delta -= itemHeight;

              list.firstChild.style.marginTop = (marginTop + itemHeight) + "px";
              list.firstChild.style.marginBottom = Math.max(0,(marginBottom - itemHeight)) + "px";

              list.render.call(list,
                list.innerList.firstChild, 
                list.items[idx],
                idx);

              list.innerList.appendChild(list.innerList.firstChild);

              list.xtag.data.index++;
            }
          }
          else if (delta<0){

            if (list.xtag.data.delta * -1 > avgHeight && list.xtag.data.index > 0){

              idx = --list.xtag.data.index;// - 1;
              
              var itemHeight = avgHeight; //list.innerList.firstChild.scrollHeight;

              list.xtag.data.delta += itemHeight;

              list.firstChild.style.marginTop = Math.max(0,(marginTop - itemHeight)) + "px";
              list.firstChild.style.marginBottom = (marginBottom + itemHeight) + "px";

              list.render.call(list,
                list.innerList.lastChild, 
                list.items[idx],
                idx);

              list.innerList.insertBefore(list.innerList.lastChild, list.innerList.firstChild);

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
      },
      render: {
        get: function(){
          return this.xtag.data.renderFn || function(elem, data, idx){
            console.log("default rendering fn, replace me.", elem, data);
          };
        },
        set: function(fn){
          return this.xtag.data.renderFn = fn;
        }
      }, 
      innerList: {
        get: function(){
          return this.firstChild.firstChild.firstChild;
        }
      }
    }
  });



function init(){

  var idx = this.index,    
    length = this.items.length;

  this.innerList.innerHTML = '';
  for (var count = 0; count < this.buffer && (idx+count)<length; count++){    
    var item = this.items[count+idx];
    var elem = document.createElement('li');
    this.innerList.appendChild(elem);
    this.render.call(this, elem, item, count);
  }

  var list = this;

  // center list
  setTimeout(function(){
    var growBoxHeight = getValue(list.firstChild.style.height); 
    if (growBoxHeight < list.scrollHeight){    
      var topMargin = (list.scrollHeight/2) - (growBoxHeight/2);    
      list.firstChild.style.marginTop = topMargin + "px";
    } else {
      //console.log("center larger list", growBoxHeight, list.scrollHeight);
    }
    setMargins.call(list);
  },0);
  
  

}

function setMargins(){

  var idx = this.index,    
    length = this.items.length,
    marginTop = getValue(this.firstChild.style.marginTop),
    growBoxHeight = getValue(this.firstChild.style.height),
    avgHeight = 0;

  avgHeight = growBoxHeight / this.buffer;

  marginTop = avgHeight * idx + marginTop;
  var bottomMargin = avgHeight * (length - this.buffer - idx);

  //console.log("DEBUG setMargins:",bottomMargin, marginTop, avgHeight, (length - this.buffer - idx));

  this.firstChild.style.marginTop = marginTop + "px";
  this.firstChild.style.marginBottom = bottomMargin + "px";

}

function getValue(value){
  return Number(value.length ? value.match(/(\d+)/)[1] : 0);
}


})();