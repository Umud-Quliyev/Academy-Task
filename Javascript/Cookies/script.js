document.addEventListener('DOMContentLoaded', function() {
    let theme = document.cookie.split(";")
    let value = theme[0].split("theme=")[1]

    console.log(value)

    if (value == "dark") {
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
    } else if (value == "light") {
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
    }
})

document.getElementById("lightBtn").onclick = function() {
    document.cookie = "theme=light; max-age=3600"
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
}

document.getElementById("darkBtn").onclick = function() {
    document.cookie = "theme=dark; max-age=3600"
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
}
