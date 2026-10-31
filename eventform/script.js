const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const verifyContainer = document.querySelector("#verifyContainer");
const verifyLabel = verifyContainer.querySelector("label");
const verify = document.querySelector("#verify");
const output = document.querySelector("#output");

function updateVerifyField() {
  const value = type.value;

  if (value === 'student') {
    verifyLabel.textContent="Student I#";
    verify.type = "number";
    verifyContainer.hidden = false;
    verify.required = true;
  } else if (value === 'guest') {
    verifyLabel.textContent="Access Code";
    verify.type = "text";
    verifyContainer.hidden = false;
    verify.required = true;
  }
   else {
    verifyLabel.textContent="";
    verifyContainer.hidden = true;
    verify.required = false;
  }
}

type.addEventListener("change", updateVerifyField);
updateVerifyField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const ticketType = form.type.value;
  const eventDate = form.eventDate.value;
  const verify = form.verify.value.trim();

  // if student does not enter 9 digit id
    if (verify.length != 9 && ticketType === "student") {
        output.textContent = "Student I# must be 9 digits.";
        return;
    }
  
  // if guest enters invalid accees code
    if (ticketType === "guest" && verify !== "EVENT131") {
        output.textContent = "Please enter a valid access code.";
        return;
    }
  
    // if no ticket type selected
    if (!ticketType) {
        output.textContent = "Please select a ticket type.";
        return;
    }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${ticketType}</p>
  <p>${eventDate}</p>
  
  `;

  form.reset();
  updateVerifyField();
});
          