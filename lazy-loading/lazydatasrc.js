
var images = document.querySelectorAll('img');

let imageOptions ={};

let observer = new IntersectionObserver((enteries,observer)=>{

    enteries.forEach((entry)=>{
     if(!entry.isIntersecting) return;

     const image = entry.target;
     const newUrl = image.getAttribute('data-src');
     image.src= newUrl;
     observer.unobserve(image);
    });


} , imageOptions);

images.forEach(image => {

    observer.observe(image);
    
});