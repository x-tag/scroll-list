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
          buffer: 15,
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
            if (list.innerList.firstChild.getBoundingClientRect().bottom < 
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
          return this.firstChild;
        }
      }
    }
  });



function init(){

  var idx = this.index,    
    length = this.items.length;

  this.innerList.innerHTML = '';

  // Load items to fill the buffer
  for (var count = 0; count < this.buffer && (idx+count)<length; count++){    
    var item = this.items[count+idx];
    var elem = document.createElement('li');
    this.innerList.appendChild(elem);
    this.render.call(this, elem, item, count);
  }

}


var scrollingUp = false;
function scrollUp(){

  if (scrollingUp == false){
    scrollingUp = true;
  } else return;

  var itemHeight = getItemHeight(this.innerList.firstChild), 
    marginTop = getValue(this.firstChild.style.marginTop),
    marginBottom = getValue(this.firstChild.style.marginBottom);

  var idx = --this.xtag.data.index;

  this.xtag.data.delta += itemHeight;

  this.firstChild.style.marginTop = Math.max(0,(marginTop - itemHeight)) + "px";
  this.firstChild.style.marginBottom = (marginBottom + itemHeight) + "px";

  try{
    this.render.call(this,
      this.innerList.lastChild, 
      this.items[idx],
      idx);
  }catch(e){
    console.log("error in render funtion:", e);
  }

  this.innerList.insertBefore(this.innerList.lastChild, this.innerList.firstChild);

console.log("UP", this.xtag.data.delta, marginTop, marginTop - itemHeight );

  if((this.xtag.data.delta * -1) >= itemHeight){
    console.log("delta > itemHeight", this.xtag.data.delta, itemHeight);
    scrollUp.call(this);
  }
  else {
    scrollingUp = false;
  }
}


var scrollingDown = false;
function scrollDown(){

  if (scrollingDown == false){
    scrollingDown = true;
  } else return;

  var itemHeight = getItemHeight(this.innerList.firstChild), 
    marginTop = getValue(this.firstChild.style.marginTop),
    marginBottom = getValue(this.firstChild.style.marginBottom);

  var idx = this.xtag.data.index + this.xtag.data.buffer;

  if (idx > this.xtag.data.items.length-1){
    console.log("bottom");
    this.xtag.data.delta = 0;
    scrollingDown = false;
    return;
  }

  this.xtag.data.delta -= itemHeight;

  this.firstChild.style.marginTop = (marginTop + itemHeight) + "px";
  this.firstChild.style.marginBottom = Math.max(0,(marginBottom - itemHeight)) + "px";

  console.log(idx, "DITEM HEIGHT", itemHeight, "TOP:", marginTop + itemHeight, "BOTTOM:", marginBottom - itemHeight);

try {
  this.render.call(this,
    this.innerList.firstChild, 
    this.items[idx],
    idx);
}catch(e){
  console.log("error in render funtion:", e);
}

  this.innerList.appendChild(this.innerList.firstChild);

  this.xtag.data.index++;

  if (this.xtag.data.delta >= itemHeight){
    console.log("delta > itemHeight", this.xtag.data.delta, itemHeight);
    scrollDown.call(this);
  }
  else {
    scrollingDown = false;
  }
}

function getItemHeight(elem){
  // Get the complete height of an item
  return Number(elem.getBoundingClientRect().height + 
    (getValue(elem.marginTop) || 0) + 
    (getValue(elem.marginBottom) || 0));
}

function getValue(value){
  return Number(value && value.length ? value.match(/(\d+)/)[1] : 0);
}


})();