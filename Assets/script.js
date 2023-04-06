// ID attribute is used as a key to save the user input in local storage
dayjs.extend(window.dayjs_plugin_advancedFormat);
$(function () {
  $(".btn").click(function () {
    var idTimeBlock = $(this).parent().attr("id");
    var textVal = $(this).parent().children("textarea").val();
    localStorage.setItem(idTimeBlock, textVal);
  });

  // Loop compares then applies the past, present, or future class to each time block
  for (var i = 9; i < 18; i++) {
    if (i < dayjs().format("H")) {
      $("#hour-" + i).addClass("past");
    } else if (i > dayjs().format("H")) {
      $("#hour-" + i).addClass("future");
    } else {
      $("#hour-" + i).addClass("present");
    }
  }

  // User input that was saved in localStorage and sets the values of the corresponding textarea elements
  for (var i = 9; i < 18; i++) {
    $("#hour-" + i)
      .children("textarea")
      .val(localStorage.getItem("hour-" + i));
  }

  // Display current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM, Do"));
});
