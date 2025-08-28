// Jaankari Marketplace Basic Script

const questionForm = document.getElementById("questionForm");
const questionInput = document.getElementById("questionInput");
const priceInput = document.getElementById("priceInput");
const questionList = document.getElementById("questionList");

questionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const questionText = questionInput.value.trim();
  const priceText = priceInput.value.trim();

  if (questionText && priceText) {
    const li = document.createElement("li");
    li.textContent = `💬 ${questionText}  |  💰 ₹${priceText}`;
    questionList.appendChild(li);

    // Reset form
    questionInput.value = "";
    priceInput.value = "";
  }
});
