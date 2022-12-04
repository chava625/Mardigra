
class Imgs{
  constructor(_parent,_title,_img,_link){
    this.parent = _parent;
    this.title = _title;
    this.img = _img;
    this.link = _link;
  }
  render(){
    let newDiv = document.createElement("div");
    newDiv.className='mimun';
    newDiv.style.backgroundImage=`URL(${this.img})`;
    newDiv.innerHTML = `
        <h2>${this.title}</h2>
    `
    newDiv.addEventListener('click',()=>{
      window.open(`${this.link}`,'_blank')
    })
    document.querySelector(this.parent).append(newDiv);

  }
}