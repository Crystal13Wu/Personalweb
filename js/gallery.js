$(function() {
  $('a.gallery-image').on('click', function(){
    $(this).toggleClass('zoomed');
    return false;
  });
});