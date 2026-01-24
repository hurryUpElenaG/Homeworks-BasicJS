$(document).ready(function () {
  let button = $("#generate-btn");
  let h3 = $("#error-message");

  let newH1 = $("<h1>");
  button.after(newH1);

  button.on("click", function () {
    let inputText = $("#text-input").val().trim();
    let inputColor = $("#color-input").val().trim();

    h3.text("");

    if (inputText === "") {
      h3.text("Error: Header text cannot be empty.").css("color", "red");
      return;
    }

   newH1.text(inputText).css("color", inputColor);
  });
});
