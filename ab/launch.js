var popup = window.open("", "_blank", "width=500,height=500");
popup.document.write("<script> fetch('https://omada15.github.io/scripts/ab/blank.html').then(r => r.text()).then(r => document.write(r)) </script>")
