$(() => {
  declareViewEvents();
})

const declareViewEvents = () => {
  $("#id_form input").on("focus",function(){
    $(this).next().addClass("d-none")
  })
  
  $("#id_form").on("submit",function(e){
    e.preventDefault();
    let onSend = true;

    if($("#id_name").val().length < 4 || $("#id_name").val().includes("'' ''") ){
      $("#id_name").next().removeClass("d-none");
      onSend = false;
    }

    if($("#id_phone").val().length < 9){
      $("#id_phone").next().removeClass("d-none")
      onSend = false;
    }

    if(!$("#id_email").val().includes("@") || !$("#id_email").val().includes(".") ){
      $("#id_email").next().removeClass("d-none")
      onSend = false;
    }
    if(onSend){
        $("form").html('Thank you for leaving details')
        e.target.submit()
    }
    
  })

}