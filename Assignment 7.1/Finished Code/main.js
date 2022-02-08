let count = 0;
const clickBtn = document.getElementById("clickBtn");
const totalClicks = document.getElementById("totalClicks");
clickBtn.onclick = function () {
  count++;
};
resetBtn.onclick = function () {
  count = 0;
};
