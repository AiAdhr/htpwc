let prefTheme = localStorage.getItem("themeStorage")

if (prefTheme == null) {
    setTheme("light")
} else {
    setTheme(prefTheme)
}
console.log("ok");

document.getElementById("theme").onclick = () => {
    if (document.getElementById("cssTheme").getAttribute("href") == "./style.css") {
        setTheme("dark")
    } else if (document.getElementById("cssTheme").getAttribute("href") == "./style-darktheme.css") {
        setTheme("light")
    }
    console.log(localStorage.getItem("themeStorage"))
}

function setTheme(actualTheme) {
    if (actualTheme == "light") {
        document.getElementById("cssTheme").href = "./style.css"
    } else if (actualTheme == "dark") {
        document.getElementById("cssTheme").href = "./style-darktheme.css"
    }
    localStorage.setItem("themeStorage", actualTheme)
}