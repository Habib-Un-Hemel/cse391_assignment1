document.addEventListener("DOMContentLoaded", () => {


  // Create dark mode toggle btn
  const toggle = document.createElement("div");
  toggle.className = "dark-mode-toggle";
  toggle.innerHTML = `<i class="fas ${
    localStorage.getItem("darkMode") === "enabled" ? "fa-sun" : "fa-moon"
  }"></i>`;
  document.body.appendChild(toggle);


  // Apply saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  

  // Toggle dark mode
  toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggle.querySelector("i");
    const isDark = document.body.classList.contains("dark-mode");

    icon.className = `fas ${isDark ? "fa-sun" : "fa-moon"}`;
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  };

  // Show page info
  const pageInfo = document.getElementById("page-info");
  if (pageInfo) {
    pageInfo.textContent = `Page location: ${window.location.href} | Last modified: ${document.lastModified}`;
  }
});
