document.addEventListener("DOMContentLoaded", () => {
  console.log("CLIMAFIX homepage loaded.");
});
// script.js
const summitDate = new Date("Sep 10, 2025 09:00:00").getTime();
const timer = document.getElementById("timer");
setInterval(() => {
  const now = new Date().getTime();
  const distance = summitDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  timer.innerHTML = `${days} days to go!`;
}, 1000);
