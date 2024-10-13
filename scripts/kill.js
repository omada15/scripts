/// kill.js
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "q") {
        for (let l = 0; l < 199; l++) {
            document.cookie = `cd${l}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)} ;expires=Tue 31 July 2029 23:59:59 UTC; path=/`;
        }
        alert("done");
    }
});
