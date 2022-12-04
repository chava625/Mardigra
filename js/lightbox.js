$.fn.lightBox = function(){

  createLightBox();

  $(".light_box button").on("click",function(){
    closeLightBox();
  })
  $("img[data-open]").on("click",function(){
    let imgSrc = $(this).attr("src");
    let imgAlt = $(this).attr("alt");
    openLightBox(imgSrc,imgAlt);
  })
}
const openLightBox = (_img,_txt) => {
  $(".light_box .light_img").attr("src",_img);
  $(".light_box .light_txt").html(_txt);

  $(".light_box").fadeIn(900);
  $(".light_box").css("display", "flex");
}

const closeLightBox = () => {
  $(".light_box").fadeOut(400);

}
const createLightBox = () => {
  $("body").prepend(`
  <div class="light_box">
  <div class="light_inside text-left">
  <button class="btn btn-primary mb-3">X</button>
    <img class="light_img" src="" width="100%" class="float-left mr-2" >
  </div>
</div>
  `)

  let lightCss = {
    position: "fixed",
    display: "none",
    width: "100%",
    height: "100%",
    top:"0",
    left:"0", 
    background: "rgba(0,0,0,0.6)",
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
  }
  $(".light_box").css(lightCss);

  let insideCss = {
    maxWidth: "420px",
    width: "100%",
    background: "white",
    border: "2px solid grey",
    minHeight: "200px",
    padding:"8px",
    textAlign:"center",
  }
  $(".light_inside").css(insideCss);
}