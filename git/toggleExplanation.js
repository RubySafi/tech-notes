// toggleExplanation.js
function toggleExplanation() {
  var explanation = document.getElementById("explanation");
  var link = document.getElementById("toggleLink");

  // Toggle explanation visibility
  if (explanation.style.display === "none") {
    explanation.style.display = "block";
    link.textContent = "Hide explanation";
  } else {
    explanation.style.display = "none";
    link.textContent = "Show explanation";
  }
}
