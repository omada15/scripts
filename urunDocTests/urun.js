/// urun.js
document.addEventListener("keydown", function (e) {
  if (e.key == "~" && e.ctrlKey) {
    var t = window.open("", "_blank", "width=500,height=500");  
    fetch("https://raw.githubusercontent.com/TopG916/for-urun/main/urunDoc.html").then(r => r.text()).then(r => t.document.write(r))
    t.addEventListener("message", function (e) {
      e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
    });
  }
});
