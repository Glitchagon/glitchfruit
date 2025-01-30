let altmode = localStorage.getItem("altmode");
const themeSwitch = document.getElementById("theme-switch");

const enableAltMode = () => {
  document.body.classList.add("altmode");
  localStorage.setItem("altmode", "active");
};
const disableAltMode = () => {
  document.body.classList.remove("altmode");
  localStorage.setItem("altmode", null);
};

if (altmode === "active") enableAltMode();

themeSwitch.addEventListener("click", () => {
  altmode = localStorage.getItem("altmode");
  altmode !== "active" ? enableAltMode() : disableAltMode();
});
