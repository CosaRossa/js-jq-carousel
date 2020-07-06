$(document).ready(function () {
  var btnPrev = $('.fa-chevron-left');
  var btnNext = $('.fa-chevron-right');

  // Cliccando sulla freccia di dx scorro in avanti lo slider
  // e coloro correttamente i pallini
  btnNext.click(function () {
    var imgActive = $('img.active');
    var imgFirst = $('img.first');
    var dotActive = $('i.fa-circle.active');
    var dotFirst = $('i.fa-circle.first');

    imgActive.removeClass('active');
    dotActive.removeClass('active');

    if (imgActive.hasClass('last')) {
      imgFirst.addClass('active');
      dotFirst.addClass('active');
    } else {
      imgActive.next('img').addClass('active');
      dotActive.next('i').addClass('active');
    }
  });

  // Cliccando sulla freccia di sx scorro indietro lo slider
  // e coloro correttamente i pallini
  btnPrev.click(function () {
    var imgActive = $('img.active');
    var imgLast = $('img.last');
    var dotActive = $('i.fa-circle.active');
    var dotLast = $('i.fa-circle.last');

    imgActive.removeClass('active');
    dotActive.removeClass('active');

    if (imgActive.hasClass('first')) {
      imgLast.addClass('active');
      dotLast.addClass('active');
    } else {
      imgActive.prev('img').addClass('active');
      dotActive.prev('i').addClass('active');
    }
  });

  // Quando clicco su un pallino mostro l'immagine corrispondente
  var dotSlider = $('i.fa-circle');
  dotSlider.click(function () {
    dotSlider.removeClass('active');
    $(this).addClass('active');
    
    var imgActive = $('img.active');
    var dotIndex = $(this).index();
    imgActive.removeClass('active');
    $('img').eq(dotIndex).addClass('active');
  });

});
