!function(a){String.prototype.format=String.prototype.format||function(){var a="%",b=new RegExp(["(",a,"(.+?)",a,")"].join(""),"g");return function(a){return this.replace(b,function(b,c,d){return d in a?a[d]:c})}}();var b=function(a){a=a||{},this.requiredVersion=a.requiredVersion||"11.3.0",this.title=a.title||"Adobe Flash Player Update required!",this.description=a.description||"This installation will only take a few moments. Using the current version may cause performance problems and publication errors.",this.updateUrl=a.updateUrl||"http://get.adobe.com/flashplayer/",this.buttonSrc=a.buttonSrc||"files/flash/160x41_Get_Flash_Player.jpg",this.mbClass=a.mbClass||"flash-notification",this.cookieName=a.cookieName||"flippingbook-flash_version_checked",this.parentElem=a.parentElem||document.getElementById("container"),this.box=null,this.boxStyle=a.boxStyle||"margin:3px;padding:12px 24px 12px 12px;overflow:hidden;background:#f9f6c4;border:1px solid #bab893;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;font:11px/14px Arial;position: relative;",this.titleStyle=a.titleStyle||"font-weight:bold;padding-top:2px;padding-bottom:4px;",this.closeButtonStyle=a.closeButtonStyle||"display:block;width:8px;height:8px;text-decoration:none;font:0/0 a;cursor:pointer;background:url('files/flash/close.png');position:absolute;top:12px;right:12px;left:auto;bottom:auto;",this.downloadButtonStyle=a.downloadButtonStyle||"display:block;float:left;text-decoration:none;position:absolute;top:50%;left:12px;margin-top:-20px;",this.rightColStyle=a.rightColStyle||"margin-left: 170px;",this.tpl=a.tpl||'<a href="javascript:void(0)" style="%closeButtonStyle%"></a><a href="%updateUrl%" style="%downloadButtonStyle%" target="_blank"><img src="%buttonSrc%" alt="" border="0" style="border:0;display:block;" width="160" height="41"/></a><div style="%rightColStyle%"><div style="%titleStyle%">%title%</div><div>%description%</div></div>',this.onShow=a.onShow||function(){},this.onClose=a.onClose||function(a){a.style.display="none"},this.needPpWarning=this._needPpWarning(),this.needPpWarning&&(this.title=this.ppTitle||"This publication cannot be viewed locally with Google Chrome!",this.description=this.ppDescription||"If you want to open this publication, please upload it to a web-server or use an offline version.",this.updateUrl="#",this.buttonSrc="files/flash/offline.png",this.tpl=a.tpl||'<a href="javascript:void(0)" style="%closeButtonStyle%"></a><a href="%updateUrl%" style="%downloadButtonStyle%" target="_blank"><img src="%buttonSrc%" alt="" border="0" style="border:0;display:block;"  height="40"/></a><div style="%rightColStyle%"><div style="%titleStyle%">%title%</div><div >%description%</div></div>',this.rightColStyle=a.rightColStyle||"margin-left: 55px;"),this.init()};b.prototype.init=function(){this.requiredVersion=this.requiredVersion.split("."),this.userVersion=this.userPlayerVersion()||!1,this.userVersion&&this.userVersion.length&&this.showMessageBox()},b.prototype.userPlayerVersion=function(){var b=(navigator.userAgent.toLowerCase(),navigator.platform.toLowerCase(),[0,0,0]),c=null;if("undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"])c=navigator.plugins["Shockwave Flash"].description,!c||"undefined"!=typeof navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),b[0]=parseInt(c.replace(/^(.*)\..*$/,"$1"),10),b[1]=parseInt(c.replace(/^.*\.(.*)\s.*$/,"$1"),10),b[2]=/[a-zA-Z]/.test(c)?parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if("undefined"!=typeof a.ActiveXObject)try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");d&&(c=d.GetVariable("$version"),c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]))}catch(e){}return b},b.prototype.createMessageBox=function(){var a=this,b=document.createElement("DIV");return b.setAttribute("id",this.mbClass),b.setAttribute("class",this.mbClass),b.style.cssText=this.boxStyle,b.innerHTML=this.tpl.format({title:this.title,description:this.description,updateUrl:this.updateUrl,buttonSrc:this.buttonSrc,titleStyle:this.titleStyle,closeButtonStyle:this.closeButtonStyle,downloadButtonStyle:this.downloadButtonStyle,rightColStyle:this.rightColStyle}),b.getElementsByTagName("a")[0].onclick=function(){a.onClose(b)},b},b.prototype.showMessageBox=function(){if(!this.cookie(this.cookieName)&&(this.pluginIsOutOfDate()||this.needPpWarning)){var a=new Date;a=new Date(a.setTime(a.getTime()+12096e5)).toGMTString(),this.cookie(this.cookieName,!0,a),this.box=this.createMessageBox(),this.parentElem.childNodes.length?this.parentElem.insertBefore(this.box,this.parentElem.childNodes[0]):this.parentElem.appendChild(this.box),this.onShow()}},b.prototype.cookie=function(a,b,c,d,e,f){if(1==arguments.length&&"string"==typeof a){var g=document.cookie.match("(^|;) ?"+a+"=([^;]*)(;|$)");return g?decodeURI(g[2]):null}if(2==arguments.length&&"string"==typeof a&&null===b){var h=new Date;return h.setTime(h.getTime()-1),document.cookie=a+="=; expires="+h.toGMTString(),null}var i=a+"="+encodeURI(b)+(c?"; expires="+c:"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(f?"; secure":"");return document.cookie=i,i},b.prototype.pluginIsOutOfDate=function(){function a(a,b){if(a===b)return 0;for(var c=Math.min(a.length,b.length),d=0;c>d;d++){if(parseInt(a[d])>parseInt(b[d]))return 1;if(parseInt(a[d])<parseInt(b[d]))return-1}return a.length>b.length?1:a.length<b.length?-1:0}var b=this.userVersion,c=this.requiredVersion;return a(b,c)>=0?!1:!0},b.prototype.isPPAPI=function(){var a=!1,b="application/x-shockwave-flash",c=navigator.mimeTypes,d=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};return c&&c[b]&&c[b].enabledPlugin&&("pepflashplayer.dll"==c[b].enabledPlugin.filename||"libpepflashplayer.so"==c[b].enabledPlugin.filename||d(c[b].enabledPlugin.filename,"Chrome.plugin"))&&(a=!0),a},b.prototype._needPpWarning=function(){var b=navigator.userAgent.indexOf("Chrome")>=0,c="file:"==a.location.protocol;return b&&c&&this.isPPAPI()},a.CheckFlash=b}(window);