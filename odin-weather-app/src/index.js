import refreshData from "./weather";

document.querySelector("button").addEventListener("click", refreshData);
document.getElementById("tempSwitch").addEventListener("click", refreshData);

refreshData();
