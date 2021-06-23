$("document").ready(function () {
  $("textarea").each(function () {
    $(this).val($(this).val().trim());
  });
  $("audio").get(0).play();
});
