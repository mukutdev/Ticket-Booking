/// first class ticket

const increaseBtn = document.getElementById("first-increase-btn");
increaseBtn.addEventListener("click", function () {
  increaseDecreaseHandler("first", true);
  subtotal();
});

// ====================================

const decreaseBtn = document.getElementById("first-decrease-btn");
decreaseBtn.addEventListener("click", function () {
  increaseDecreaseHandler("first", false);
  subtotal();
});

// economy class ticket

const ecoIncreaseBtn = document.getElementById("eco-increase-btn");
ecoIncreaseBtn.addEventListener("click", function () {
  increaseDecreaseHandler("eco", true);
  subtotal();
});

// ====================================

const ecoDecreaseBtn = document.getElementById("eco-decrease-btn");
ecoDecreaseBtn.addEventListener("click", function () {
  increaseDecreaseHandler("eco", false);
  subtotal();
});

// / function for increase decrease handler

function increaseDecreaseHandler(ticket, isIncrease) {
  const ticketInp = document.getElementById(ticket + "-class-ticket");
  const inputValue = parseInt(ticketInp.value);

  let finalOutPut = inputValue;

  // checking condition

  if (isIncrease === true) {
    finalOutPut = inputValue + 1;
  }
  if (isIncrease === false && finalOutPut > 0) {
    finalOutPut = inputValue - 1;
  }

  ticketInp.value = finalOutPut;
}

//calculate subtotal & vat & total
function subtotal() {
  const fClassTicket = getInputValue("first");

  const eClassTicket = getInputValue("eco");

  const subtotal = fClassTicket * 150 + eClassTicket * 100;

  document.getElementById("subtotal").innerText = "$" + subtotal;

  const vat = (subtotal * 10) / 100;

  document.getElementById("vat").innerText = "$" + vat;

  const total = subtotal + vat;

  document.getElementById("total").innerText = "$" + total;
}

// get input value from each ticket

function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + "-class-ticket");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

// book now button

const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
  // flying option variable

  const flyFrom = document.getElementById("fly-from").value;
  const flyTo = document.getElementById("fly-to").value;
  const departureFrom = document.getElementById("departure-from").value;
  const returnTo = document.getElementById("return-to").value;

  const bookingText = document.getElementById("booking-text");

  // ticket input variable

  const firstClass = document.getElementById("first-class-ticket").value;
  const firstClassTicket = parseInt(firstClass);
  const ecoClass = document.getElementById("eco-class-ticket").value;
  const ecoClassTicket = parseInt(ecoClass);

  const alertBox = document.getElementById("alert-box");
  alertBox.style.display = "block";

  // checking value from input

  if (flyFrom === "") {
    alertBox.style.backgroundColor = "red";
    bookingText.innerText = "Please enter flying from option";
  } else if (flyTo === "") {
    alertBox.style.backgroundColor = "red";
    bookingText.innerText = "Please enter flying to option";
  } else if (departureFrom === "") {
    alertBox.style.backgroundColor = "red";
    bookingText.innerText = "Please enter Departure from option";
  } else if (returnTo === "") {
    alertBox.style.backgroundColor = "red";
    bookingText.innerText = "Please enter return option";
  } else if (firstClassTicket === 0 && ecoClassTicket === 0) {
    alertBox.style.backgroundColor = "red";
    bookingText.innerText = "You haven't booked any ticket ";
  } else {
    alertBox.style.backgroundColor = "green";
    bookingText.innerText = `Congratulations! you have successfully purchased ${
      firstClassTicket + ecoClassTicket
    } tickets`;
  }
});

// close alert btn
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function () {
  document.getElementById("alert-box").style.display = "none";
});
