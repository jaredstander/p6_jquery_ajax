$(document).ready(function(){

  // So... where is this here? WHELP, on load, the document's body is hidden and then fades in.
  // If the AJAX truly didn't work, it would disappear whenever the page posted via the button.
  // But, if you check it out, this doesn't happen. That's because the page ios only loading once.
  // ;D
  $("body").delay(1000).fadeIn("slow");

  $("#get_colour").click(function(postEvent){
    $.ajax({
      type: "POST",
      url: "/colour",
      data: $(this).serialize(),
      dataType: 'json',
      success: function(postResponseData) {
        $("#colour_me li:nth-child(" + postResponseData['cell'] + ")").css("background-color", postResponseData['colour']);
      }
    });
  });
});
