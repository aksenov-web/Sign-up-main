$('#form_input').submit(function (event) {
  event.preventDefault();
  let data = $(this).serialize();
  console.log(data);

  $.port("index.html", function(data) {

  });

});
