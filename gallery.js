// Array of image data
const images = [
    { src:'images/a1.jpg', alt: 'Name Ankush bansal who is sitting and watching television ', hdSrc: 'images/a1.jpg' },
    { src: 'images/a3.jpg', alt: 'Ankush bansal standing on road having a pose while put his hands in pockets', hdSrc: 'images/a3.jpg' },
    { src: 'images/a2.jpg', alt: 'Ankush bansal who is sitting on the floor having a pair of glasses in his hand', hdSrc: 'images/a2.jpg' },
    { src: 'images/a4.jpg', alt: 'Ankush bansal is sitting in garden and having glasses on his eyes with keeping one hand on his knee and trying to be looking smart', hdSrc: 'images/a4.jpg' },
    { src: 'images/a13.jpg', alt: 'this image is showing a bulb that reflect multiple color and giving light in a dark room', hdSrc: 'images/a13.jpg' },
    { src: 'images/a6.jpg', alt: 'This image reveals a person who is sitting on floor with having a pair of glasses in his hand and looking towards the camera to get a good picture', hdSrc: 'images/a6.jpg' },
    { src: 'images/a8.jpg', alt: 'this picture shows that sun rays is touching water that brings brightness in world which makes a world more beautiful', hdSrc: 'images/a8.jpg' },
    { src: 'images/a9.jpg', alt: 'This is a picture of a water sight that has many mountains around it with shadow of sky', hdSrc: 'images/a9.jpg' },
    { src: 'images/about.jpg', alt: 'this is a picture of our milky galaxy that is seeing more beautiful when we gaze it', hdSrc: 'images/about.jpg' },
    { src: 'images/a10.jpg', alt: 'this picture shows a natural beauty of our world with having trees water and mountain', hdSrc: 'images/a10.jpg' },
    { src: 'images/a11.jpg', alt: 'this picture shows a fountain which is blowing and giving good vibes to them who are very close to it', hdSrc: 'images/a11.jpg' },
    { src: 'images/a12.jpg', alt: 'the forest picture displays that nature hides so many things in it.', hdSrc: 'images/a12.jpg' },
];


const createGallery = () => {
    const galleryContainer = document.querySelector('.image-grid');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.setAttribute('data-hd-src', image.hdSrc); 
        imgElement.setAttribute('data-caption', image.alt); 
        galleryContainer.appendChild(imgElement);
    });
};


const openModal = (event) => {
    const clickedImage = event.target;

    if (clickedImage.tagName === 'IMG') {
        const hdSrc = clickedImage.getAttribute('data-hd-src');
        const caption = clickedImage.getAttribute('data-caption');

       
        const modal = document.querySelector('.modal');
        const hdImage = document.querySelector('.hd-image');
        const captionText = document.querySelector('.caption');

        hdImage.src = hdSrc;
        captionText.textContent = caption;

        modal.style.display = 'flex';

        
        hdImage.addEventListener('click', closeModal);
    }
};


const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
};


document.querySelector('.gallery').addEventListener('click', openModal);


window.addEventListener('DOMContentLoaded', createGallery);
