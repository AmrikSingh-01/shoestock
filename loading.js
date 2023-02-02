const loader = document.getElementById("preloader");
const loaderimg = document.getElementById("preloaderimg");
const loadertxt = document.getElementById("loadertxt");
window.addEventListener("load", function () {
    // animation cannot be overridden maybe 
    // loaderimg.style.animationName = "";
    // loaderimg.style.animationIterationCount = "2";
    // loaderimg.style.opacity = "0";
    // loaderimg.style.transition = " opacity 0.3s";
    // loaderimg.style.transitionDelay = "0.3s";
    loadertxt.style.opacity = "1";
    loadertxt.style.transition = " 0.3s";
    loadertxt.style.transitionDelay = "0.6s";
    loadertxt.style.fontSize = "min(7vw,7vh)";
    setTimeout(() => {
        loadertxt.style.opacity = "0";
        loadertxt.style.transition = "0.8s";
        loadertxt.style.fontSize = "min(80vh,80vw)";
    }, 1000);
    setTimeout(() => {
        loaderimg.style.visibility = "hidden";
    }, 600);
    setTimeout(() => {
        loader.style.display = "none";
        document.getElementById("body").style.height = "initial";
        document.getElementById("body").style.overflow = "initial";
    }, 1800);
})