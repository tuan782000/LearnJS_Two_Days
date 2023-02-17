(function () {
    const pTags = document.querySelectorAll("p");
    const btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        for (i = 0; i < pTags.length; i++) {
            pTags[i].style.color = "green";
        }
    });
})();
