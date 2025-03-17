// Function to load content dynamically
function loadContent(element) {
  document.querySelectorAll(".left-panel li").forEach(li => li.classList.remove("active"));
  element.classList.add("active");

  const filePath = element.getAttribute("data-file");
  if (!filePath) return;

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load content from ${filePath}`);
      }
      return response.text();
    })
    .then((html) => {
      const rightPanel = document.querySelector(".right-panel");
      rightPanel.innerHTML = html;
      // Re-initialize Prism highlighting after loading the new content
      Prism.highlightAll();
    })
    .catch((error) => {
      document.querySelector(".right-panel").innerHTML =
        `<p style="color: red;">Error loading content: ${error.message}</p>`;
    });
}

function loadDefaultContent() {
  const defaultItem = document.querySelector('.left-panel li[data-file="controls/About.html"]');
  if (defaultItem) {
    loadContent(defaultItem);
  }
}

function loadDefaultWorkflowContent() {
  const defaultItem = document.querySelector('.left-panel li[data-file="workflow/About.html"]');
  if (defaultItem) {
    loadContent(defaultItem);
  }
}