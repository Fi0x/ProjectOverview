const images = [
    "../../images/sailing/adria01.jpg",
    "../../images/sailing/adria02.jpg",
    "../../images/sailing/adria03.jpg",
    "../../images/sailing/adria04.jpg",
    "../../images/sailing/adria05.jpg",
    "../../images/sailing/diamant2000.jpg",
    "../../images/sailing/enigmaSonnenuntergang.jpg",
    "../../images/sailing/esse2Hand.jpg",
    "../../images/sailing/esseAmWind.jpg",
    "../../images/sailing/esseGenniSonnenuntergang.jpg",
    "../../images/sailing/esseRundUmSonnenuntergang.jpg",
    "../../images/sailing/overviewLogo.jpg",
    "../../images/sailing/pogo44.jpg",
    "../../images/sailing/pogo1250.jpg",
    "../../images/sailing/scholtz1.jpeg",
    "../../images/sailing/scholtz2.jpg",
    "../../images/sailing/sksDehler01.jpg",
    "../../images/sailing/sksDehler02.jpg",
    "../../images/sailing/x99Spi.jpeg"
];

function loadImages() {
    let slideshowContainer = document.getElementById("slideshow-container");

    images.forEach(function (image, idx) {
        addImage(slideshowContainer, image, images.length, idx + 1);
    })

    return document.getElementsByClassName("mySlides");
}

function addImage(slideshowContainer, imageFile, totalImages, index) {
    let div = document.createElement("div");
    div.classList.add("mySlides", "fade");

    let countDiv = document.createElement("div");
    countDiv.classList.add("numbertext");
    countDiv.innerText = "" + index + " / " + totalImages;
    div.appendChild(countDiv);

    let img = document.createElement("img");
    img.src = imageFile;
    img.classList.add("galleryImg")
    div.appendChild(img);

    slideshowContainer.appendChild(div);
}