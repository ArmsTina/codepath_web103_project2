const renderOperators = async () => {
  const response = await fetch("/operators");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((operator) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${operator.image})`;

      const name = document.createElement("h3");
      name.textContent = operator.name;
      bottomContainer.appendChild(name);

      const position = document.createElement("p");
      position.textContent = "Position: " + operator.position;
      bottomContainer.appendChild(position);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/operators/${operator.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "Not valid operator!";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderOperators();
}
