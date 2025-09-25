const renderOperator = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/operators");
  const data = await response.json();

  const operatorContent = document.getElementById("operator-content");
  let operator;
  operator = data.find((operator) => operator.id === requestedID);
  if (operator) {
    document.getElementById("image").src = "" + operator.image;
    document.getElementById("name").textContent = operator.name;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + operator.submittedBy;
    document.getElementById("position").textContent =
      "Position: " + operator.position;
    document.getElementById("description").textContent = operator.description;
    document.title = `Operator - ${operator.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "Not valid operator!";
    operatorContent.appendChild(message);
  }
};

renderOperator();
