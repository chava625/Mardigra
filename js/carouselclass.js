class ImgCarousel{
  constructor(_parent,_img,_title,_txt){
    this.parent = _parent;
    this.img = _img;
    this.title = _title;
    this.txt = _txt;
  }
  static i = 0;
  render(){
    let newDiv = document.createElement("div");
    if (ImgCarousel.i == 0){
      ImgCarousel.i = 1;
      newDiv.className = "carousel-item active";
    }
    else{
    newDiv.className = "carousel-item";
    } 
    let Img = document.createElement("img");
    Img.src = `${this.img}`;
    Img.className = "d-block w-100 slider";
    Img.alt= `${this.title}`;
    newDiv.append(Img);

    let newDivIn = document.createElement("div");
    newDivIn.className = "carousel-caption";
    newDivIn.innerHTML = `
    <h1>${this.title}</h1>
     <h2 class="d-none d-md-block">${this.txt}</h2>
    `
    newDiv.append(newDivIn)
    document.querySelector(this.parent).append(newDiv);

  }
}