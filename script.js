const time = document.querySelector(".time");

function updateTime() {
  const now = new Date();
  time.innerHTML = now.toISOString().split("T")[1].split(".")[0] + " UTC";
}

setInterval(updateTime, 1000);
updateTime();
