

function makeContactRowClickable() {
  $(".table > tbody > tr").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length-1) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).data("contact-guid");
    window.location.href = newUrl;
  });
}
