window.onload = () =>{
  createAllImg();
  createImg();
}
function createAllImg(){
  image_ar.forEach((item) =>{
    let carouselImg = new ImgCarousel("#carousel-inner",item.image,item.title,item.paragraph);
    carouselImg.render();
  });
}
function createImg(){
  img_ar.forEach((item) =>{
    let img = new Imgs("article",item.title,item.image,item.link);
    img.render();
  });
}