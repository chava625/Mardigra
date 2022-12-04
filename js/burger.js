let btn = document.querySelector("#nav_btn");
let theNav = document.querySelector("#id_nav");


$(btn).on("click", function(){
  if (theNav.style.display != "block") {
    $(theNav).slideToggle(300);
    theNav.style.display = "block";
    theNav.className = "d-block d-md-flex";
    document.querySelector("#nav_btn").innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;


  }
  else {
    theNav.style.display = "none"
    theNav.className = "d-md-flex"
    document.querySelector("#nav_btn").innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`
  }
})
