// cross out todo
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
})

// show/hide new input todo
$(".fa-plus-circle").on("click", function() {
  $("input").fadeToggle(500);
});

//delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event) {
  const newTodo = "<li><span><i class='fas fa-times'></i></span> " + $(this).val() + "</li>";
  if(event.which === 13) {
    $(this).val("");
    $("ul").append(newTodo);
  }
});
