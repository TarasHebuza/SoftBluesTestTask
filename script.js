const buttonShowMore = document.querySelector('.main-top__button');
const shortText = document.querySelector('.main-top__p_show');
const longText = document.querySelector('.main-top__p_hide');

buttonShowMore.onclick = function() {

    const showOrHide = getComputedStyle(shortText).display;

    if (showOrHide === "block") {
        shortText.style.display = "none";
        longText.style.display = "block";
        this.innerText = "Скрыть";
    } else {
        shortText.style.display = "block";
        longText.style.display = "none";
        this.innerText = "Подробнее";
    }

}