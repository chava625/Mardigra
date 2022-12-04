let counter = 0;

$.fn.gallery = function(_ar){
  _ar.forEach(item => {
    counter++;
    $(this).append(`
     <img src="${item}" class=" img img${counter}" data-open='img${counter}'>
    `)
  });
}

