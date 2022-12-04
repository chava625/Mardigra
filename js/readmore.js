window.onload = () => {
  let btn_readMore = document.querySelector("#readMore");
  let divHidden = document.querySelector("#hidden");
  btn_readMore.addEventListener("click", function () {
    if (divHidden.style.display == "none"){
      divHidden.style.display = "block";
      btn_readMore.innerHTML ='Close';
    }
    else{
      divHidden.style.display = "none";
      btn_readMore.innerHTML ='Read More >>'
    }
  });
};
