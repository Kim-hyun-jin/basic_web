const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const imgs = document.createElement("img");

imgs.src = `img/${chosenImages}`;
document.body.appendChild(imgs);
