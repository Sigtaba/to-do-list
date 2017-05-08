// business logic

function Todo(item, date) {
  this.itemName = item;
  this.dateName = date;
}

Todo.prototype.todoName = function() {
  return this.itemName + " - Due: " + this.dateName;
}

//user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var inputtedItem = $("input#new-item").val();
    var inputtedDate = $("input#new-date").val();

    var newTodo = new Todo(inputtedItem, inputtedDate);

    $("ul#list").append("<li><span class='list'>" + newTodo.todoName() + "</span></li>");

    $("input#new-item").val("");
    $("input#new-date").val("");
    $(".list").last().click(function() {
      $(this).replaceWith("Complete");
    });
  });
});
