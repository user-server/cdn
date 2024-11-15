document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("loading-container"),o=document.getElementById("container_video"),n=document.getElementById("video");if("undefined"==typeof videoUrl||!videoUrl){console.error("Video URL is not defined");return}if(Hls.isSupported()){var t=new Hls({startLevel:0,autoStartLoad:!0,maxBufferLength:10,maxMaxBufferLength:30,maxLoadingDelay:4,enableWorker:!0,debug:!1});t.on(Hls.Events.MANIFEST_LOADING,function(){e.style.display="block",o.style.display="none"}),t.on(Hls.Events.FRAG_LOADED,function(t,a){"main"===a.frag.type&&(e.style.display="none",o.style.display="block",n.play())}),t.loadSource(videoUrl),t.attachMedia(n)}else n.canPlayType("application/vnd.apple.mpegurl")&&(n.src=videoUrl,n.addEventListener("loadedmetadata",function(){e.style.display="none",o.style.display="block",n.play()}))}),$(document).ready(function(){window.addEventListener("contextmenu",e=>{e.preventDefault()});var e=!1,o=!0,n=!0;function t(){$("#container_video").removeClass("fullscreen"),$("body").removeClass("noscroll"),$("#popup").fadeOut(),$("#close").fadeOut(),$("#video").fadeOut("fast",function(){$(this).trigger("pause").prop("muted",!0),$("#order").fadeIn("fast",function(){$("html, body").animate({scrollTop:$("#order").offset().top-20},200)})}),$("#open-video").fadeOut("fast")}$("#play").on("click",function(){window.scrollTo(0,0),$(this).fadeOut("fast",function(){$("#video").prop("muted",!1).prop("currentTime",0).trigger("play"),$("#container_video").addClass("fullscreen"),$("body").addClass("noscroll"),$("#close").fadeIn(),n=!1})}),$("#open-video").on("click",function(){window.scrollTo(0,0),$(this).fadeOut("fast",function(){$("#container_video").addClass("fullscreen"),$("body").addClass("noscroll"),$("#close").fadeIn(),n=!1})}),$("#video").on("timeupdate",function(){!n&&!e&&$(this).prop("currentTime")>start&&($("#popup").fadeIn("fast"),e=!0),o&&$(this).prop("currentTime")>start+duration&&($("#popup").fadeOut("fast"),o=!1)}).on("ended",t),$("#popup").on("click",t),$("#close").on("click",function(){$(this).hide(),$("#container_video").removeClass("fullscreen"),$("body").removeClass("noscroll"),$("#open-video").fadeIn("fast"),$("#popup").fadeOut("fast")})});
