var popup = window.open("", "_blank", "width=500,height=300");
fetch("https://raw.githubusercontent.com/TopG916/for-urun/main/aboutblanker/blank.html").then(r => r.text()).then(r => popup.document.write(r))
