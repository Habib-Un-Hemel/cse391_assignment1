// Last modified date
document.addEventListener("DOMContentLoaded", function () {
  // Display last modified date
  const lastModified = document.lastModified;
  const pageInfo = document.getElementById("page-info");
  if (pageInfo) {
    pageInfo.textContent = `Page location: ${window.location.href} | Last modified: ${lastModified}`;
  }

  // Dark mode toggle functionality
  const darkModeToggle = document.createElement("div");
  darkModeToggle.className = "dark-mode-toggle";
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const icon = this.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without page jump
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });

  // Highlight active section in navigation
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        link.getAttribute("href") === `#${current}` ||
        (link.getAttribute("href").includes(current) && current !== "")
      ) {
        link.classList.add("active");
      }
    });
  });

  // Table row hover effect
  const tableRows = document.querySelectorAll("table tr");
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.transition = "background 0.3s ease";
    });
  });

  // Mobile menu toggle (will be added in responsive design)
});
