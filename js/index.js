$(function () {
  const $img = $('#randomImg');
  const images = ['contributions.gif', 'dev.gif', 'dino.gif', 'nothing.gif', 'octo.gif'];
  const image = images[Math.floor(Math.random() * images.length)];
  $img.attr('src', 'img/' + image);
})