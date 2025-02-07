let card = document.querySelector(".card");
let emoji = document.querySelector("#emoji");

card.addEventListener("dblclick", function () {
    emoji.style.opacity = 1;
    emoji.style.scale = 1.3;

    setTimeout(() => {

        emoji.style.opacity = 0;
        emoji.style.scale = 0.5;

    }, 500);

})