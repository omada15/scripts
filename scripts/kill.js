/// kill.js
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "q") {
        const e = document.querySelectorAll("div.head-top, div.wonderbar");
        e.forEach(function(t) {
            t.remove()
        });
        const a = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled"),
            i = document.createElement("iframe");
        i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.border = "none", i.style.backgroundColor = "white", document.body.appendChild(i);
        const b = document.createElement("button");
        b.style.position = "fixed", b.style.top = "50%", b.style.left = "50%", b.style.transform = "translate(-50%, -50%)", b.style.width = "800px", b.style.height = "200px", b.style.borderRadius = "100px", b.style.backgroundColor = "red", b.style.color = "white", b.style.fontSize = "100px", b.style.fontWeight = "bold", b.style.cursor = "pointer", b.textContent = "OFF", b.addEventListener("click", function() {
            const cookieString = document.cookie;
            const cookieArray = cookieString.split('; ');
            const cookieListLength = cookieArray.length;
            if (cookieListLength > 198) {
                this.textContent = "ON";
                this.style.backgroundColor = "blue";
            }
            if ("OFF" === this.textContent) {
                this.style.backgroundColor = "blue", this.textContent = "ON";
                let t = ""
                    o = location.hostname.split(".").slice(-2).join(".");
                for (let l = 0; l < 199; l++) document.cookie = `cd${l}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)} ;expires=Tue 31 July 2029 23:59:59 UTC; path=/`;}
                alert("Securly Successfully Killed.")
            } else {
                    n = location.hostname.split(".").slice(-2).join(".");
                for (let r = 0; r < 199; r++) document.cookie = `cd${r}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(32))))).substring(0,32)};expires=Monday, 1 October 2029 11:59:59 GMT;domain=${n};path=/`;
                alert("For some reason, you gave Securly CPR and it came back to life."), this.style.backgroundColor = "red", this.textContent = "OFF"
            }
        }), i.contentDocument.body.appendChild(b);
    }
});
