var IN = document.getElementsByTagName("input");
for (var i = 0; i < IN.length; i) {
  F = IN[i];
  if (F.type.toLowerCase() == "password") {
    if (document.all) {
      var n = document.createElement("input");
      for (var k in F.attributes)
        if (k.toLowerCase() != 'type') {
          try {
            n[k] = F[k]
          } catch (err) {}
        };
      F.parentNode.replaceChild(n, F);
    } else {
      F.type = "text"
    }
  }
}
