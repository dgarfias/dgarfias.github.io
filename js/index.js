$(document).ready(function() {
  $.ajax({
    url : "sample.txt",
    dataType: "text",
    success : function (data) {
      $("#backcode").text(data);
    }
  });
});
