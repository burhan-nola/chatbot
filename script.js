const btn = document.getElementById("btn");

btn.addEventListener("click", getResponse);

async function getResponse() {
  var inputText = document.getElementById("input").value;
  const parentDiv = document.getElementById("chat-area");

  if (inputText === "") {
    return;
  }

  const question = document.createElement("div");
  question.innerHTML = inputText;
  question.classList.add("box");
  parentDiv.appendChild(question);

  document.getElementById("input").value = "";
  parentDiv.scrollTop = parentDiv.scrollHeight;

  //https://nola-chatbot.vercel.app/chatbot
  let res = await fetch("https://nola-chatbot.vercel.app/chatbot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputText,
    }),
  });

  const data = await res.json();

  if (data) {
    const answer = document.createElement("div");
    answer.innerHTML = data.message;
    answer.classList.add("box", "answer");
    parentDiv.appendChild(answer);
    parentDiv.scrollTop = parentDiv.scrollHeight;
  }
  // The remaining code goes inside this function
}
