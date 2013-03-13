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
        this.innerHTML = '<ul></ul>';
        this.xtag.data = {
          lastScroll: 0,
          index: 0,
          items: [],
          avgHeight: 0,          
          delta: 0,
          updating: false
        };        
      }
    },
    events:{            
      'scroll': function(e){
        var list = this,
          delta = 0;
        
        delta = list.scrollTop - list.xtag.data.lastScroll;
        list.xtag.data.lastScroll = list.scrollTop;
        list.xtag.data.delta += delta;        
        
        requestAnimFrame(function(){

          if (delta>0){
            // Scrolling Down, has the first gone out of view?
            //console.log("rect.bottom", list.innerList.firstChild.getBoundingClientRect())

            if (
              list.innerList.firstChild.getBoundingClientRect().bottom - list.getBoundingClientRect().top < 
              (getValue(list.innerList.firstChild.marginBottom) || 0 * -1)){              
              scrollDown.call(list);
            }
          }
          else if (delta<0){
            // Scrolling Up,  Is the first element completely in view? 
            if (list.innerList.firstChild.getBoundingClientRect().top > 0){              
              scrollUp.call(list);
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
          return this.firstChild;
        }
      }
    }
  });



function init(){

  var idx = this.index,    
    length = this.items.length,
    count = 0,
    avgHeight = 0;

  this.innerList.innerHTML = '';

  // Load items to fill the buffer

  while (
    this.innerList.getBoundingClientRect().height < 
    this.getBoundingClientRect().height + (avgHeight*4) && 
    idx < length
  ){
    var item = this.items[count+idx];
    var elem = document.createElement('li');
    this.innerList.appendChild(elem);
    this.render.call(this, elem, item, count);
    count++;
    avgHeight = this.innerList.getBoundingClientRect().height / count;
  }

}


function scrollUp(){

  var container = this.innerList,
    topFirst = container.firstChild.getBoundingClientRect().top,
    topSecond = container.firstChild.nextSibling.getBoundingClientRect().top, 
    itemHeight = topFirst > 0 ? topSecond - topFirst : topSecond < 0 ? Math.abs(topFirst - topSecond) :  topSecond + Math.abs(topFirst),
    marginTop = getValue(container.style.marginTop),
    marginBottom = getValue(container.style.marginBottom);

  if (this.xtag.data.index == 0){
    console.log("TOP");
    container.style.marginTop = "0px";
    return;
  }

  var idx = --this.xtag.data.index;

  this.xtag.data.delta += itemHeight;

  try{
    this.render.call(this,
      this.innerList.lastChild, 
      this.items[idx],
      idx);
  } catch(e){
    console.log("error in render funtion:", e);
  }

  this.innerList.insertBefore(this.innerList.lastChild, this.innerList.firstChild);

  container.style.marginTop = Math.max(0,(marginTop - itemHeight)) + "px";
  container.style.marginBottom = (marginBottom + itemHeight) + "px";

  if((this.xtag.data.delta * -1) >= itemHeight){
    // if we've scrolled enough to load another item, load it!  
    scrollUp.call(this);
  }
}



function scrollDown(){

  var container = this.innerList,
    topFirst = container.firstChild.getBoundingClientRect().top,
    topSecond = container.firstChild.nextSibling.getBoundingClientRect().top, 
    itemHeight = topFirst > 0 ? topSecond - topFirst : topSecond < 0 ? Math.abs(topFirst - topSecond) :  topSecond + Math.abs(topFirst),
    marginTop = getValue(container.style.marginTop),
    marginBottom = getValue(container.style.marginBottom);

  var idx = this.xtag.data.index + this.innerList.children.length;

  if (idx > this.xtag.data.items.length-1){
    console.log("BOTTOM");
    container.style.marginBottom = "0px";
    return;
  }

  this.xtag.data.delta -= itemHeight;

  try {
    this.render.call(this,
      this.innerList.firstChild, 
      this.items[idx],
      idx);
  } catch(e){
    console.log("error in render funtion:", e);
  }

  this.innerList.appendChild(this.innerList.firstChild);

  container.style.marginTop = (marginTop + itemHeight) + "px";
  container.style.marginBottom = Math.max(0,(marginBottom - itemHeight)) + "px";

  this.xtag.data.index++;

  if (this.xtag.data.delta >= itemHeight){
    // if we've scrolled enough to load another item, load it!  
    scrollDown.call(this);
  }
}


function getValue(value){
  return Number(Number(value && value.length ? value.match(/(\d+)/)[1] : 0).toFixed(1));
}


})();