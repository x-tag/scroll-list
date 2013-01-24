(function(){

/*var createFlowElements = function(wrap){      
    ['overflow', 'underflow'].forEach(function(type){
      if (!wrap.xtag.data[type + 'Element']) {
        var element = document.createElement('div');
          element.className = 'x-' + type;
          element.innerHTML = '<div></div>';
          xtag.addEvent(element, type, flowEvent);
        wrap.xtag.data[type + 'Element'] = element;
        wrap.appendChild(element);
      }
    });
  };  */

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
        this.innerHTML = '<div class="scroll-list-top">&nbsp;</div><div class="scroll-list-content"></div><div class="scroll-list-bottom">&nbsp;</div>';
        this.xtag.data = {
          top: this.querySelector('.scroll-list-top'),
          bottom: this.querySelector('.scroll-list-bottom'),
          nodes: this.querySelector('.scroll-list-content'),
          lastScroll: 0
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
        requestAnimationFrame(function(){
          
          var idx = 0;

          if (list.xtag.data.lastScroll > list.scrollTop){
            list.xtag.data.lastScroll = list.scrollTop;
            console.log("UP");

            idx = list.xtag.data.nodes.children.length-1;

            // remove nodes on the bottom 
            while(list.scrollTop < list.xtag.data.nodes.children[idx--].offsetTop){}
              
            if (idx+2 < list.xtag.data.nodes.children.length){

              var before = list.scrollHeight;
              list.xtag.data.nodes.removeChild(list.xtag.data.nodes.lastChild);

              list.lastChild.style.height = list.lastChild.style.height.length ? 
                Number(list.lastChild.style.height.match(/(\d+)/)[1]) + (before - list.scrollHeight) + "px" : 
                (before - list.scrollHeight) + "px";

            }
            

            // add nodes to top

          }
          else if (list.xtag.data.lastScroll < list.scrollTop){

            console.log("DWN");
            list.xtag.data.lastScroll = list.scrollTop;

            // remove node on top
            while(list.scrollTop > list.xtag.data.nodes.children[idx++].offsetTop){}
            if (idx-2 > 0){

              var before = list.scrollHeight;
              list.xtag.data.nodes.removeChild(list.xtag.data.nodes.firstChild);
              
              list.firstChild.style.height = list.firstChild.style.height.length ? 
                Number(list.firstChild.style.height.match(/(\d+)/)[1]) + (before - list.scrollHeight) + "px" : 
                (before - list.scrollHeight) + "px";
              
              console.log(list.firstChild.style.height);
            }

            // add nodes to bottom
          }
          
          
        });
      }
    },
    accessors:{
      items:{
        get: function(){

        },
        set: function(items){
          this.xtag.data.items = items;
          draw.call(this,items);
        }
      }
    }, 
    methods: {
      addItem: function(elem){
        this.xtag.data.nodes.appendChild(elem);
      }
    }
  });

})();