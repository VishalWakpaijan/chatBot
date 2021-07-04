const chatBox = document.getElementById("chatBot");
const chatBotButton = document.getElementById("chatBotButton");

function getChatBox() {
  chatBox.classList.toggle("chatBot_box_active");
}
chatBotButton.addEventListener("click", getChatBox);
