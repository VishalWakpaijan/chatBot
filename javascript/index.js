const chatBox = document.getElementById("chatBot");
const chatBotButton = document.getElementById("chatBotButton");
const heading = document.getElementById("heading");

chatBotButton.addEventListener("click", getChatBox);

function getChatBox() {
  const clicked = chatBox.classList.toggle("chatBot_box_active");
  if (clicked === true) {
    heading.style.display = "none";
  } else {
    heading.style.display = "block";
  }
}
