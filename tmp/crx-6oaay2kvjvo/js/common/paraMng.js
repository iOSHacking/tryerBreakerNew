define("common/paraMng",[],function(a,b){"use strict";!function(){localStorage.normalInterval||2e3;localStorage.hasTask||(localStorage.hasTask=0,localStorage.circle=0),localStorage.ajaxRefresh||(localStorage.ajaxRefresh="refresh");localStorage.circle||0}(),chrome.runtime.onMessage.addListener(function(a,b,c){if("circleChange"==a.type){var d=localStorage.circle||"0";localStorage.circle=a.circle,c("Message got,reload right now"),"1"==d&&"0"==a.circle&&window.location.reload(!0)}else if("setMutiTask"==a.type){var e=a.mutiTask;if("0"==e||"1"==e){var f="0"==e?"关闭":"开启";console.log("试客多任务开关------------"+f+"------------"),localStorage.multiTask=e}}}),chrome.runtime.sendMessage({type:"cookie"},function(a){console.log("set cookie "+a)}),b.authIt=function(a){chrome.runtime.sendMessage({type:"authIt",auth:a},function(b){b.indexOf(a)<0})},b.getQauth=function(a){chrome.runtime.sendMessage({type:"authQk",auth:a},function(b){b.indexOf(a)<0})},b.getAtmAuth=function(a){chrome.runtime.sendMessage({type:"authATM",auth:a},function(b){b.indexOf(a)<0&&(localStorage.postData="")})},b.getPostData=function(){chrome.runtime.sendMessage({type:"queryPostdata"},function(a){console.log("-----queryPostdata-----"+a),localStorage.postData=a})},b.getUserId=function(){chrome.runtime.sendMessage({type:"queryItryId"},function(a){console.log("-----queryItryId-----"+a),localStorage.itryUsrid=a})},b.modelSwitch=function(){"refresh"==localStorage.ajaxRefresh?localStorage.ajaxRefresh="ajax":"ajax"==localStorage.ajaxRefresh&&(localStorage.ajaxRefresh="refresh")}});