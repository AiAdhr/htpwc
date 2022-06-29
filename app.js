document.getElementById("theme").onclick = function() {
    if (document.getElementById("cssTheme").getAttribute("href") == "./style.css") {
        document.getElementById("cssTheme").href = "./style-darktheme.css"
        var actualTheme = "darkTheme"
    }
    else if (document.getElementById("cssTheme").getAttribute("href") == "./style-darktheme.css") {
        document.getElementById("cssTheme").href = "./style.css"
        var actualTheme = "lightTheme"
    }
    localStorage.setItem('themeStorage', actualTheme)
    console.log(localStorage.getItem("themeStorage"));
}