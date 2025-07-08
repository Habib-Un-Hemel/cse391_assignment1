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

 
  // // Highlight active section in navigation
  // const sections = document.querySelectorAll("section[id]");
  // const navLinks = document.querySelectorAll("nav ul li a");

  // window.addEventListener("scroll", function () {
  //   let current = "";

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.clientHeight;

  //     if (pageYOffset >= sectionTop - 300) {
  //       current = section.getAttribute("id");
  //     }
  //   });

  //   navLinks.forEach((link) => {
  //     link.classList.remove("active");
  //     if (
  //       link.getAttribute("href") === `#${current}` ||
  //       (link.getAttribute("href").includes(current) && current !== "")
  //     ) {
  //       link.classList.add("active");
  //     }
  //   });
  // });



});
