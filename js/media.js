let photos = [
  "img/Gallery/a funny elefent.jpg",
  "img/Gallery/a man with mask.jpg",
  "img/Gallery/mardi gras celebreting.jpg",
  "img/Gallery/decor.jpg",
  "img/Gallery/decoration for the holiday.jpg",
  "img/Gallery/gold mask.jpg",
  "img/Gallery/a nice makk.jpg",
  "img/Gallery/light car.jpg",
  "img/Gallery/cup with mask.jpg",
  "img/Gallery/a nice decor.jpg",
  "img/Gallery/man with mask.jpg",
  "img/Gallery/woman img.jpg",
  "img/Gallery/masks story.jpg",
  "img/Gallery/masks.jpg",
  "img/Gallery/people.jpg",
  "img/Gallery/mask from women.jpg",
  "img/Gallery/vandecasteel.jpg",
  "img/Gallery/vandecasteele.jpg",
];

$(() => {
  $("#id_photo").gallery(photos);
  $(document).lightBox();

});
