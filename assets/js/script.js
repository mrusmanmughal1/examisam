const listButton = document.getElementById("listButton");
const listIcon = document.getElementById("listIcon");
const sidebar = document.querySelector(".sidebar");

listButton.addEventListener("click", function () {
  if (listIcon.classList.contains("bi-list")) {
    listIcon.classList.remove("bi-list");
    listIcon.classList.add("bi-x");
    sidebar.style.width = "80%";
  } else {
    listIcon.classList.remove("bi-x");
    listIcon.classList.add("bi-list");
    sidebar.style.width = "";
  }
});

// Nav Links

const currentPagePath = window.location.pathname;
const currentPageFilename = currentPagePath.substring(
  currentPagePath.lastIndexOf("/") + 1
); // Extract filename

const navLinks = document.querySelectorAll("nav li a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPageFilename) {
    link.parentElement.classList.add("active");
  }
});

// for accounts tab
const accountbtn = document.getElementById("accountbtn");
const targetElement = document.getElementById("account-tab");

accountbtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevents the event from bubbling up

  targetElement.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInsideTarget = targetElement.contains(event.target);
  const isClickOnButton = accountbtn.contains(event.target);

  if (!isClickInsideTarget && !isClickOnButton) {
    targetElement.classList.remove("show");
  }
});

// bell icons

const bell_Icon = document.getElementById("bell-icon");
const notify = document.getElementById("notifications-tab");

bell_Icon.addEventListener("click", function (e) {
  e.stopPropagation();
  notify.classList.toggle("show");
});
// Hide when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideTarget = notify.contains(event.target);
  const isClickOnButton = bell_Icon.contains(event.target);

  if (!isClickInsideTarget && !isClickOnButton) {
    notify.classList.remove("show");
  }
});

// payment btns

const radios = document.querySelectorAll(
  'input[type="radio"][name="payment-card"]'
);

// Add event listener for each radio button
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    radios.forEach((r) =>
      r.parentElement.classList.remove("selected-payment-btn")
    );

    // Add the 'selected-radio' class to the parent of the selected radio button
    if (radio.checked) {
      radio.parentElement.classList.add("selected-payment-btn");
    }
  });
});

// bar
setTimeout(() => {
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.placeholder = "Search this table...";
    console.log("✅ Placeholder set.");
  } else {
    console.warn("❌ Search input not found.");
  }
}, 500); // give time for rendering

function toggleSwitch(el) {
  const icon = el.querySelector("i");
  icon.classList.toggle("bi-toggle-off");
  icon.classList.toggle("bi-toggle-on");
}
