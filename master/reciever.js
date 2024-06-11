function launch() {
  var win = window.open("popup.html", "popup", "width=500,height=300")
}
function f(url) {
  fetch(url).then(r => r.text()).then(r => eval(r))
}
function ev(file) {
  f("https://topg916.github.io/scripts/" + file + ".js")
}
window.addEventListener("message", function(e) {
  var a = e.data;
  console.log(a)

  if (a == 1) {
    var popup = window.open("", "_blank", "width=500,height=300");
    popup.document.write("<script> fetch('https://raw.githubusercontent.com/TopG916/scripts/main/aboutblanker/blank.html').then(r => r.text()).then(r => document.write(r)) </script>");
  } else if (a == 2) {
    ev('scripts/duo');
  } else if (a == 3) {
    ev('scripts/epa');
  } else if (a == 4) {
    f(prompt('url'));
  } else if (a == 5) {
    ev(prompt('file'));
  } else if (a == 6) {
    console.log("code recieved")
  } else {
    eval(a);
  }
  
});

document.addEventListener("keydown", function (e) {
  if (e.key == "!" && e.ctrlKey) {
    launch();
  }
});
