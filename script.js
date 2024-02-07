const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");

//battery API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(battery => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();
      //battery charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }

      //battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });
      function updateChargingTimeInfo(){
        console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      //battery discharging tine
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo(){
        console.log(battery.dischargingTime);
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      //battery level change
      battery.addEventListener('levelchange',()=>{
        updateLevelChange();
      })
      function updateLevelChange (){
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      //battery status
    });
  }
};

battery();
