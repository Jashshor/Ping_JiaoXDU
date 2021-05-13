// ==UserScript==
// @name         自动评教（西电专版）
// @namespace    https://jashshor.fun/
// @version      0.1
// @description  （适用西安电子科技大学网上评教应用APP）自动网上选项评教+文本框评教，自动选择非常满意，填入"对教授内容很满意，老师辛苦了！"
// @author       JashShor
// @match        *://ehall.xidian.edu.cn/jwapp/sys/wspjyyapp/*default/*
// @icon         https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2ec1809b2345c2d562843568ef?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg
// @grant        某个原创小哥
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        window
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://cdn.jsdelivr.net/npm/vue/dist/vue.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// ==/UserScript==

(function() {
'use strict';
    var shor = {
        'name': 'jash'
    };

    GM_setValue('jash', shor);
alert('打开评教问卷后请稍等几秒，确保页面加载完成');
check();
return;
})();

function check(){
var optionBtn=document.getElementsByClassName("bh-radio-label");
if(GM_getValue('jash').name =='jash'|(GM_getValue('jash').name =='shor'&optionBtn.checked==0)){
setTimeout(function(){check()}, 1000);
if(optionBtn.length!=0){
	setTimeout(function(){finish()}, 10000);
    var shor = {
        'name': 'shor'
    };
    GM_setValue('jash', shor);
}}
return false;
}

function finish(){
var optionBtn=document.getElementsByClassName("bh-radio-label");
for(var i=0;i<optionBtn.length;i+=4)
{
	optionBtn[i].click();
}
var textAreaOption=document.getElementsByClassName("bh-txt-input__txtarea");
for(i=0;i<textAreaOption.length;i++)
{
textAreaOption[i].value="对教授内容很满意，老师辛苦了！";
}
}
