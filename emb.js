/// emb.js
document.addEventListener("keydown", function (e) {
  if (e.key === "!" && e.ctrlKey && e.altKey) {
    document.write("<head><style>body { margin: 0; padding: 0;} </style></head><body><div id='myDiv'></div></body>");
    let ne = document.createElement("embed"); 
    ne.src = "https://" + prompt("site no https");
    ne.style.height = "100vh"
    ne.style.width = "100%"
    let targetElement = document.getElementById("myDiv");
    targetElement.appendChild(ne);
  }
});
