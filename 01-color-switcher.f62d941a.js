!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null,n=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},e=function(){t.body.style.backgroundColor=n(),t.body.style.color=n()};t.startBtn.addEventListener("click",(function(){o=setInterval(e,1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,console.log(o)})),t.stopBtn.addEventListener("click",(function(){clearInterval(o),t.startBtn.disabled=!1,t.stopBtn.disabled=!0,console.log("Interval with id ".concat(o," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.f62d941a.js.map
