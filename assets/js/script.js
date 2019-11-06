// cross out todo
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
})

// show/hide new input todo
$(".plus-btn").on("click", function() {
  $("input").slideToggle(500);
});

//delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event) {
  const newTodo = "<li><span>X</span> " + $(this).val() + "</li>";
  if(event.which === 13) {
    $(this).val("");
    $("ul").append(newTodo);
  }
});
