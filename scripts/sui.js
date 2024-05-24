const loadScript = async(url) => {
 const response = await fetch(url)
 const script = await response.text()
 eval(script)
}

const scriptUrl = "https://raw.githubusercontent.com/securlyunblocker/SU1/main/main.js"
loadScript(scriptUrl)
