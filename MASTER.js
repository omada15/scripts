/// urun.js
alert("hello");
document.addEventListener("keydown", function (e) { 
	if (e.key == "!" && e.ctrlKey) {
    var a = prompt('abbk=1, d = 2, epa = 3, fetch url = 4, db fetch = 5anything else = 6')
    
    if (a == 1) {
      var popup = window.open("", "_blank", "width=500,height=300");
      popup.document.write("<script> fetch('https://raw.githubusercontent.com/TopG916/scripts/main/aboutblanker/blank.html').then(r => r.text()).then(r => document.write(r)) </script>");
    } else if (a == 2) {
      ev('duo');
    } else if (a == 3) {
      ev('epa');
    } else if (a == 4) {
      f(prompt('url'));
    } else if (a == 5) {
      ev(prompt('file'));
    } else if (a == 6) {
      eval(prompt('code'));
    } else {
      alert('invalid');
    }
    
    function ev(url) {
      fetch('https://topg916.github.io/scripts/scripts/' + url + '.js').then(r => r.text()).then(r => eval(r));
      console.log("done");
    }
    function f(url) {
      fetch("https://" + url).then(r => r.text()).then(r => eval(r));
    }
  }
});
