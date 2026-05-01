// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll Animation
const sections = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Dynamic Greeting
const greeting = document.createElement("p");
const hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Good Morning!";
else if (hour < 18) greeting.innerText = "Good Afternoon!";
else greeting.innerText = "Good Evening!";

greeting.style.marginTop = "10px";
document.querySelector("header").appendChild(greeting);