$(document).ready(function() {

  $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active-acc');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active-acc');
  });

});


