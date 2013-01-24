(function(){



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
      title: {
        get: function(){
          return this.querySelector('h2').innerHTML;
        },
        set: function(value){          
          this.querySelector('h2').innerHTML = value;
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
          overflown: false
        };
      }
    },
    events:{
      'overflow': function(){
        console.log("overflown");
        this.xtag.data.overflown = true;
      }, 
      'underflow': function(){

      },
      'scroll': function(e){
        var list = this;
        requestAnimationFrame(function(){
          
          var idx = 0;

          if (list.xtag.data.lastScroll > list.scrollTop){
            list.xtag.data.lastScroll = list.scrollTop;
            console.log("UP");

            idx = list.firstChild.children.length-1;

            // remove nodes on the bottom 
            /*while(list.scrollTop < list.xtag.data.nodes.children[idx--].offsetTop){}
              
            if (idx+2 < list.xtag.data.nodes.children.length){

              var before = list.scrollHeight;
              list.xtag.data.nodes.removeChild(list.xtag.data.nodes.lastChild);

              list.lastChild.style.height = list.lastChild.style.height.length ? 
                Number(list.lastChild.style.height.match(/(\d+)/)[1]) + (before - list.scrollHeight) + "px" : 
                (before - list.scrollHeight) + "px";

            }*/
            

            // add nodes to top

          }
          else if (list.xtag.data.lastScroll < list.scrollTop){

            console.log("DWN");
            list.xtag.data.lastScroll = list.scrollTop;

            // remove node on top
            while(list.scrollTop > list.firstChild.children[idx++].offsetTop){}
            if (idx-2 > 0){

              var before = list.scrollHeight;
              list.firstChild.removeChild(list.firstChild.firstChild);
              
              list.firstChild.style.marginTop = list.firstChild.style.marginTop.length ? 
                Number(list.firstChild.style.marginTop.match(/(\d+)/)[1]) + (before - list.scrollHeight) + "px" : 
                (before - list.scrollHeight) + "px";
              
              console.log(list.firstChild.style.marginTop, list.scrollHeight);
            }

            // add nodes to bottom
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
      }
    }
  });



function init(){

  var idx = this.index,
    length = this.items.length;

  while(!this.xtag.data.overflown && idx < length){
    var item = this.items[idx++];
     var elem = document.createElement('x-item');
     elem.title = item.title;
     elem.description = item.description;
     this.firstChild.appendChild(elem);     
  }
  
}



})();