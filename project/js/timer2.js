
!function(){

window.oc.startTime=new Date().getTime() / 1000;
window.oc.countDirection=1;
window.oc.scale=1.0;
window.oc.repeatMode=0;
window.oc.showMilliseconds=false;
window.oc.countdownExpired=function()
{
  if(window.oc.repeatMode > 0)
  {
    if(window.oc.editor)
    {
      window.oc.editor.countdownExpired();
    }
    else
    {
            if(oc.timerRef)clearInterval(oc.timerRef);
      location.reload();
        }
  }
}

var $__container_oc,__scope_oc,pad,periods,update;__scope_oc=window.oc,$__container_oc=$("#cdt"),periods={d:86400,h:3600,m:60},pad=function(e){for(;e.toString().length<2;)e="0"+e;return e},update=function(){var e,o,_,t,c,i,n,r,a,d,s,p,m,l,u;for(s=(new Date).getTime()/1e3,o=s-__scope_oc.startTime,o*=__scope_oc.countDirection,l=Math.max(0,Math.floor(__scope_oc.remainingTimeAtStartTime-o)),c=Math.floor(10*(__scope_oc.remainingTimeAtStartTime-o-l)),0===l&&(__scope_oc.countdownExpired(),c=0),e=l-l%periods.d,i=l-e-l%periods.h,d=l-e-i-l%periods.m,u=l-e-i-d,a=[e/periods.d,pad(i/periods.h),pad(d/periods.m),pad(u)].join("x"),__scope_oc.showMilliseconds?a=a+"p"+c:a+="bb",r=$__container_oc.find(".counter-item"),n=r.length,p=n-a.length;n--;)_=r[n],$(_).removeClass(),$(_).addClass("counter-item"),n-p>=0&&$(_).addClass("spr digit item-0 digit-"+a.charAt(n-p));return m=Math.round(($__container_oc.find(".days").innerWidth()-60*__scope_oc.scale)/2),$__container_oc.find(".days .unit-label").css("left",m+"px"),t=26*p*__scope_oc.scale,$__container_oc.find(".digit-x").css("margin","0 "+Math.round(t/6)+"px")},update(),__scope_oc.timerRef&&clearInterval(__scope_oc.timerRef),__scope_oc.timerRef=setInterval(update,100),__scope_oc.updateCountdownClock=update;
}.call(this);
