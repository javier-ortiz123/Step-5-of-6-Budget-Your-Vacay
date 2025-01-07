var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("200 "));
  var accommodation = Number(prompt("100 "));
  var numDays = Number(prompt("2 "));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", tripInfo);
