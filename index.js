const area = document.getElementById("heat_area");
const coefficient = document.getElementById("coefficient");
const temp_ts = document.getElementById("temp_ts");
const temp_ta = document.getElementById("temp_ta");
const result = document.getElementById("result");
const display = document.getElementById("display");

const vein = document.getElementById("vein");

const calculate = document.getElementById("calculate");
calculate.onclick = getResult;

function getResult() {
  if (
    area.value == "" ||
    area.value == null ||
    coefficient.value == "" ||
    coefficient.value == null ||
    temp_ts.value == "" ||
    temp_ts.value == null ||
    temp_ta.value == "" ||
    temp_ta.value == null
  ) {
    alert("All fields are required!");
  } else {
    let resultVal =
      area.value * coefficient.value * (temp_ts.value - temp_ta.value);

    result.value = resultVal;

    if (resultVal <= 10000) {
      vein.style.height = "30px";
      vein.style.margin = "267px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 10000 && resultVal <= 20000) {
      vein.style.height = "60px";
      vein.style.margin = "237px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 20000 && resultVal <= 30000) {
      vein.style.height = "90px";
      vein.style.margin = "207px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 30000 && resultVal <= 40000) {
      vein.style.height = "120px";
      vein.style.margin = "177px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 40000 && resultVal <= 50000) {
      vein.style.height = "150px";
      vein.style.margin = "147px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 50000 && resultVal <= 60000) {
      vein.style.height = "180px";
      vein.style.margin = "117px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 60000 && resultVal <= 70000) {
      vein.style.height = "210px";
      vein.style.margin = "87px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 70000 && resultVal <= 80000) {
      vein.style.height = "240px";
      vein.style.margin = "57px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 80000 && resultVal <= 90000) {
      vein.style.height = "270px";
      vein.style.margin = "27px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else if (resultVal > 90000) {
      vein.style.height = "295px";
      vein.style.margin = "2px 0 0 1px";
      display.innerText = resultVal + " (W)";
    } else {
      vein.style.height = "5px";
      vein.style.margin = "292px 0 0 1px";
      display.innerText = resultVal + " (W)";
    }
  }
}
