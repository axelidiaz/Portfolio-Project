var toTopButton = document.getElementById("toTopButton");
var rootElement = document.documentElement;

function scrolltoTop {
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

toTopButton.addEventListener("click", scrolltoTop);
