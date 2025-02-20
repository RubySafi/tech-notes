// toggleExplanation.js
function toggleExplanation(explanationId) {
  var explanationElement = document.getElementById(explanationId);
  if (explanationElement.style.display === "none") {
    explanationElement.style.display = "block";
  } else {
    explanationElement.style.display = "none";
  }
}
