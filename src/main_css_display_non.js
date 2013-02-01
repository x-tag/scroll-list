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

  xtag.register('x-item', {
    lifecycle:{
      created: function(){
        // these will be replaced with x-template elements
        this.xtag.data.simpleTemplate = '<h2 class="passiveName"></h2><p class="text_caption"></p>';
        this.xtag.data.complexTemplate = '<div class="clearfix storyContent"><a class="actorPhoto lfloat" href="http://www.facebook.com/bethanyeggen" tabindex="-1" aria-hidden="true" data-ft="{&quot;type&quot;:60,&quot;tn&quot;:&quot;\u003C&quot;}" data-hovercard="/ajax/hovercard/hovercard.php?id=1424139214"><img class="-cx-PRIVATE-uiSquareImage__root profilePic -cx-PRIVATE-uiSquareImage__large img" src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/211289_29902675_770802461_q.jpg" alt=""></a><div class="storyInnerContent"><div class="mainWrapper"><div role="article"><h5 class="uiStreamMessage uiStreamHeadline" data-ft="{&quot;tn&quot;:&quot;:&quot;}"><div class="actorDescription uiStreamRobotextBeforeMessage"><a class="passiveName" href="http://www.facebook.com/" data-ft="{&quot;tn&quot;:&quot;;&quot;}" data-hovercard="/ajax/hovercard/user.php?id=0">Dr Spaceman</a> shared <a class="text_caption" href="http://www.facebook.com/IFeakingLoveScience?ref=stream" data-ft="{&quot;tn&quot;:&quot;P&quot;}" data-hovercard="/ajax/hovercard/page.php?id=367116489976035">I fucking love science</a>s <a class="pronoun-link " href="http://www.facebook.com/photo.php?fbid=535356253152057&amp;set=a.456449604376056.98921.367116489976035&amp;type=1" data-ft="{&quot;tn&quot;:&quot;A&quot;}">photo</a>.</div></h5><h5 class="uiStreamMessage userContentWrapper" data-ft="{&quot;type&quot;:1,&quot;tn&quot;:&quot;K&quot;}"><span class="messageBody"><span class="userContent">Ha!</span></span></h5><div class="mvm uiStreamAttachments fbMainStreamAttachment" data-ft="{&quot;type&quot;:10,&quot;tn&quot;:&quot;H&quot;}"><div class="clearfix photoRedesign"><a class="uiPhotoThumb photoRedesignAspect" href="http://www.facebook.com/photo.php?fbid=535356253152057&amp;set=a.456449604376056.98921.367116489976035&amp;type=1&amp;ref=nf" data-ft="{&quot;type&quot;:41,&quot;tn&quot;:&quot;E&quot;}" rel="theater" ajaxify="http://www.facebook.com/photo.php?fbid=535356253152057&amp;set=a.456449604376056.98921.367116489976035&amp;type=1&amp;ref=nf&amp;src=http%3A%2F%2Fsphotos-b.xx.fbcdn.net%2Fhphotos-prn1%2F59545_535356253152057_1558808218_n.jpg&amp;size=500%2C400&amp;theater"><img class="img" height="318" src="http://sphotos-b.xx.fbcdn.net/hphotos-prn1/s480x480/59545_535356253152057_1558808218_n.jpg" width="398" alt="Theres always an explanation."></a></div><div class="shareSubtext fcg">Theres always an explanation.</div></div><form rel="async" class="live_153134281505336_316526391751760 commentable_item autoexpand_mode" method="post" action="/ajax/ufi/modify.php" data-live="{&quot;seq&quot;:0}" onsubmit="return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)" id="u_ps_0_0_2b"><input type="hidden" name="charset_test" value="€,´,€,´,水,Д,Є"><input type="hidden" name="fb_dtsg" value="AQCs63Oz" autocomplete="off"><input type="hidden" autocomplete="off" name="feedback_params" value="{&quot;actor&quot;:&quot;1424139214&quot;,&quot;target_fbid&quot;:&quot;153134281505336&quot;,&quot;target_profile_id&quot;:&quot;1424139214&quot;,&quot;type_id&quot;:&quot;17&quot;,&quot;assoc_obj_id&quot;:&quot;&quot;,&quot;source_app_id&quot;:&quot;0&quot;,&quot;extra_story_params&quot;:[],&quot;content_timestamp&quot;:&quot;1359002059&quot;,&quot;check_hash&quot;:&quot;AQCdjfCJZVHXPXby&quot;,&quot;source&quot;:&quot;13&quot;}"><input type="hidden" autocomplete="off" name="data_only_response" value="1"><span class="uiStreamFooter"><span class="UIActionLinks UIActionLinks_bottom" data-ft="{&quot;tn&quot;:&quot;=&quot;,&quot;type&quot;:20}"><span><a href="#" aria-live="polite" title="Like this item" data-ft="{&quot;tn&quot;:&quot;&gt;&quot;}" class="UFILikeLink" id=".reactRoot[19]"><span id=".reactRoot[19].0">Like</span></a></span> · <label class="uiLinkButton comment_link" title="Leave a comment"><input data-ft="{&quot;type&quot;:24,&quot;tn&quot;:&quot;S&quot;}" type="button" value="Comment" onclick="return fc_click(this);"></label> · <a class="share_action_link" href="/ajax/sharer/?s=99&amp;appid=2309869772&amp;p%5B0%5D=1424139214&amp;p%5B1%5D=153134281505336" rel="dialog" data-ft="{&quot;tn&quot;:&quot;J&quot;,&quot;type&quot;:25}" title="Send this to friends or post it on your timeline." role="button">Share</a> · </span><span class="uiStreamSource" data-ft="{&quot;type&quot;:26,&quot;tn&quot;:&quot;N&quot;}"><a href="/bethanyeggen/posts/153134281505336"><abbr title="Wednesday, January 23, 2013 at 8:34pm" data-utime="1359002060" class="timestamp livetimestamp">15 hours ago</abbr></a></span> · <a data-hover="tooltip" class="uiStreamPrivacy inlineBlock fbStreamPrivacy fbPrivacyAudienceIndicator" href="#" id="u_ps_0_0_2c" aria-label="Shared with: Bethanys friends"><i class="lock img sp_6b0izw sx_28d968"></i></a></span><div><div class="uiUfi UFIContainer" id="u_ps_0_0_21"><ul data-ft="{&quot;tn&quot;:&quot;]&quot;}" class="UFIList" id=".reactRoot[20]"><li class="UFIArrow" id=".reactRoot[20].[0]"><i id=".reactRoot[20].[0].0"></i></li><li class="UFIRow UFILikeSentence" id=".reactRoot[20].[1][0]"><div class="clearfix" id=".reactRoot[20].[1][0].0"><div class="lfloat" id=".reactRoot[20].[1][0].0.[0]"><a href="#" tabindex="-1" title="Like this item" class="img -cx-PRIVATE-uiImageBlock__image -cx-PRIVATE-uiImageBlock__smallImage UFILikeThumb UFIImageBlockImage" id=".reactRoot[20].[1][0].0.[0].0"><i class="UFILikeIcon" id=".reactRoot[20].[1][0].0.[0].0.0"></i></a></div><div id=".reactRoot[20].[1][0].0.[1]"><div class="UFIImageBlockContent -cx-PRIVATE-uiFlexibleBlock__flexibleContent -cx-PRIVATE-uiImageBlock__smallContent" id=".reactRoot[20].[1][0].0.[1].0"><span id=".reactRoot[20].[1][0].0.[1].0.0"><a href="http://www.facebook.com/Speedy.Tigger" data-hovercard="/ajax/hovercard/hovercard.php?id=872795248" id=".reactRoot[20].[1][0].0.[1].0.0.[0]">Jennifer Rayann</a><span id=".reactRoot[20].[1][0].0.[1].0.0.[1]"> and </span><a rel="dialog" ajaxify="/ajax/browser/dialog/likes?id=153134281505336" href="/browse/likes?id=153134281505336" data-hover="tooltip" data-tooltip-alignh="center" data-tooltip-uri="/ajax/like/tooltip.php?comment_fbid=153134281505336&amp;comment_from=29901357&amp;seen_user_fbids[0]=872795248" id=".reactRoot[20].[1][0].0.[1].0.0.[2]"><span id=".reactRoot[20].[1][0].0.[1].0.0.[2].0">12 others</span></a><span id=".reactRoot[20].[1][0].0.[1].0.0.[3]"> like this.</span></span></div></div></div></li><li data-ft="{&quot;tn&quot;:&quot;[&quot;}" class="UFIRow UFIAddComment" id=".reactRoot[20].[1][3]"><div class="clearfix UFIMentionsInputWrap" id=".reactRoot[20].[1][3].0"><div class="lfloat" id=".reactRoot[20].[1][3].0.[0]"><img src="http://profile.ak.fbcdn.net/hprofile-ak-ash4/261076_29901357_78989931_q.jpg" alt="" class="img -cx-PRIVATE-uiImageBlock__image -cx-PRIVATE-uiImageBlock__smallImage img UFIActorImage -cx-PRIVATE-uiSquareImage__medium UFIImageBlockImage" id=".reactRoot[20].[1][3].0.[0].0"></div><div id=".reactRoot[20].[1][3].0.[1]"><div class="UFIImageBlockContent -cx-PRIVATE-uiFlexibleBlock__flexibleContent -cx-PRIVATE-uiImageBlock__smallContent" id=".reactRoot[20].[1][3].0.[1].0"><div id=".reactRoot[20].[1][3].0.[1].0.0"><div class="uiMentionsInput textBoxContainer ReactLegacyMentionsInput" id=".reactRoot[20].[1][3].0.[1].0.0.[0]"><div class="highlighter" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[0]"><div id=".reactRoot[20].[1][3].0.[1].0.0.[0].[0].0"><span class="highlighterContent hidden_elem" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[0].0.0"></span></div></div><div class="uiTypeahead mentionsTypeahead" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[1]"><div class="wrap" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[1].0"><input type="hidden" class="hiddenInput" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[1].0.[0]"><div class="innerWrap" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[1].0.[1]"><textarea name="add_comment_text" title="Write a comment..." placeholder="Write a comment..." class="textInput mentionsTextarea uiTextareaAutogrow uiTextareaNoResize UFIAddCommentInput DOMControl_placeholder" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[1].0.[1].0">Write a comment...</textarea></div></div></div><input type="hidden" value="" class="mentionsHidden" id=".reactRoot[20].[1][3].0.[1].0.0.[0].[2]"></div></div></div></div></div></li></ul></div></div></form></div></div><div class="-cx-PRIVATE-uiInlineBlock__root  mlm uiPopover highlightSelector uiStreamHide" data-ft="{&quot;type&quot;:55,&quot;tn&quot;:&quot;V&quot;}" id="u_ps_0_0_19"><a class="highlightSelectorButton uiStreamContextButton -cx-PRIVATE-uiPopover__trigger" href="#" aria-haspopup="true" aria-expanded="false" rel="toggle" id="u_ps_0_0_1a" role="button" aria-owns="u_g_0" aria-controls="js_3">Options</a></div></div></div>';
        this.innerHTML = this.xtag.data.complexTemplate;
      }
    }, 
    accessors: {
      heading: {
        get: function(){
          return this.querySelectorAll('.passiveName')[0].innerHTML;
        },
        set: function(value){          
          this.querySelectorAll('.passiveName')[0].textContent = value;
        }
      },
      description: {
        get: function(){
          return this.querySelectorAll('.text_caption')[0].innerHTML;
        },
        set: function(value){           
          this.querySelectorAll('.text_caption')[0].innerHTML = value;
        }
      }
    }
  });

  xtag.register('x-scrolling-list', {
    lifecycle:{
      created: function(){
        this.innerHTML = '<div></div>';
        console.log(this.xtag, this);
        this.xtag.data = {
          lastScroll: 0,
          index: 0,
          items: [],
          buffer: 6,
          avgHeight: 0,          
          delta: 0,
          updating: false
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
        //if (list.xtag.data.updating) return;

       
        
        requestAnimFrame(function(){

           var idx = 0,
            delta = 0;

          delta = list.scrollTop - list.xtag.data.lastScroll;

          list.xtag.data.lastScroll = list.scrollTop;

          list.xtag.data.delta += delta;

          console.log("DELTA:", delta, list.xtag.data.delta, list.xtag.data.index,list.firstChild.style.marginTop, list.firstChild.style.marginBottom);

          if (list.scrollTop == 0 && list.xtag.data.index != 0){
              while (--list.xtag.data.index){
                /*var data = list.items[list.xtag.data.index];
                list.firstChild.lastChild.heading = data.title;
                list.firstChild.lastChild.description = data.description;*/

                xtag.addClass(list.firstChild.children[list.xtag.data.index], 'show');
                xtag.removeClass(list.firstChild.children[list.xtag.data.index+list.xtag.data.buffer], 'show');
                //list.firstChild.insertBefore(list.firstChild.lastChild, list.firstChild.firstChild);

              }              
              list.firstChild.style.marginTop = 0 + "px";
              list.firstChild.style.marginBottom = list.items.length * list.xtag.data.avgHeight; + "px";
              return;
          }

          if (delta<0){

            delta = Math.abs(list.xtag.data.delta);

            if (delta > list.xtag.data.avgHeight){

              var swapCount = Math.round(delta/list.xtag.data.avgHeight);              
              var marginDelta = list.xtag.data.avgHeight * swapCount;

              list.xtag.data.delta += marginDelta;

              for (var i = 0; i < swapCount; i++){     
                list.xtag.data.index--;
                //var data = list.items[--list.xtag.data.index];
                //list.firstChild.lastChild.heading = data.title;
                //list.firstChild.lastChild.description = data.description;

                xtag.addClass(list.firstChild.children[list.xtag.data.index], 'show');
                xtag.removeClass(list.firstChild.children[list.xtag.data.index+list.xtag.data.buffer], 'show');
                //list.firstChild.insertBefore(list.firstChild.lastChild, list.firstChild.firstChild);
              }

              list.firstChild.style.marginTop = (getValue(list.firstChild.style.marginTop) - marginDelta) + "px";
              list.firstChild.style.marginBottom = (getValue(list.firstChild.style.marginBottom) + marginDelta) + "px";

            }
          }
          else if (delta>0){            

            if (list.xtag.data.delta > list.xtag.data.avgHeight){

              var swapCount = Math.round(list.xtag.data.delta/list.xtag.data.avgHeight);
              var marginDelta = list.xtag.data.avgHeight * swapCount;

              list.xtag.data.delta -= marginDelta;

              for (var i = 0; i < swapCount; i++){
                
                /*var data = list.items[(list.xtag.data.index++) + list.xtag.data.buffer];
                if (!data) return;

                list.firstChild.firstChild.heading = data.title;
                list.firstChild.lastChild.description = data.description;
                */

 
                xtag.removeClass(list.firstChild.children[list.xtag.data.index], 'show');
                xtag.addClass(list.firstChild.children[list.xtag.data.index+list.xtag.data.buffer], 'show');
                
list.xtag.data.index++; 


                //list.firstChild.appendChild(list.firstChild.firstChild);
              
              }

              list.firstChild.style.marginTop = (getValue(list.firstChild.style.marginTop) + marginDelta) + "px";
              list.firstChild.style.marginBottom = (getValue(list.firstChild.style.marginBottom) - marginDelta) + "px";

            }
          }

          //list.xtag.data.updating = false;

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

  this.firstChild.innerHTML = '';
  for (var count = 0; count < length; count++){    
    var item = this.items[count+idx];
    var elem = document.createElement('x-item');
    elem.heading = item.title;
    elem.description = item.description;
    if (count >= idx && count < idx+this.buffer){
      xtag.addClass(elem,'show');
      console.log("adding class");
    }

    this.firstChild.appendChild(elem);
  }
  setMargins.call(this);
}

function setMargins(){

  var idx = this.index,    
    length = this.items.length,  
    marginTop = getValue(this.firstChild.style.marginTop),
    avgHeight = 0;

  if (marginTop == 0){
    avgHeight = this.xtag.data.avgHeight = (this.firstChild.scrollHeight - marginTop)  / (this.buffer) ;
  }
  else{
    avgHeight = this.xtag.data.avgHeight;
  }

  marginTop = avgHeight * idx;
  var bottomMargin = avgHeight * (length - this.buffer - idx);

  this.firstChild.style.marginTop = marginTop + "px";
  this.firstChild.style.marginBottom = bottomMargin + "px";

//  this.scrollTop = marginTop;

}

function getValue(value){
  return Number(value.length ? value.match(/(\d+)/)[1] : 0);
}


})();