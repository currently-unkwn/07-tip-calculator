import { formatPrice, serialize } from "./helpers.js";

//
// Elements
//

const tipCalculator = document.querySelector(".TipCalculator");
const tipAmountElement = document.querySelector("[data-tip-amount]");
const totalPerPersonElement = document.querySelector("[data-total-per-person]");

//
// Functions
//

function handleSubmit(event) {
  event.preventDefault();

  // Get bill, people and tip values from form
  let { bill, people, tip } = serialize(new FormData(tipCalculator));

  // Check if there is no value or value is below 0, than do nothing
  if (!bill || bill < 0 || !people || people < 0 || !tip) return;

  // Convert values to a number
  bill = parseFloat(bill);
  people = parseFloat(people);
  tip = parseFloat(tip) / 100;

  // Calc tip amount and total per person
  const tipAmount = bill * tip;
  const totalPerPeson = (bill + tipAmount) / people;

  // Round values to have one decimal after '.'
  const roundedTipAmount = Math.round(tipAmount * 100) / 100;
  const roundedTotalPerPerson = Math.round(totalPerPeson * 100) / 100;

  // Format price and render it to UI
  tipAmountElement.textContent = formatPrice(roundedTipAmount);
  totalPerPersonElement.textContent = formatPrice(roundedTotalPerPerson);
}

//
// Events
//

tipCalculator.addEventListener("submit", handleSubmit);
