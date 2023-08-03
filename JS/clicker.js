/*
 This is my first time using JS in an actual website!!!
     __     __     __
    |  |   |  |   |__|
    |  |   |  |    __
    |  |___|  |   |  |
    |  |___|  |   |  |
    |  |   |  |   |  |
    |__|   |__|   |__|
   
    why are you snooping around in my code?
    are you trying to find a secret?
    because you wont
    stop trying
    i wont allow it
    no
    stop
    bad
    ps. super secret load code: eyJtb25leSI6MSwiYXV0b0NsaWNrZXJzIjowLCJtb25leUluYyI6MSwiYXV0b0NsaWNrQ29zdCI6MCwiaW5jQ29zdCI6MH0=
    */
const buttonGrey = 'rgb(126, 126, 126)';
const bodyGrey = 'rgb(63, 63, 63)';
const subGrey = 'rgb(202, 202, 202)';
const d = document;
const darkLight = d.getElementById('darkLight');
const btn = d.querySelector('button');
const moneyCountText = d.getElementById('moneyCount');
const IncUpgrade = d.getElementById('incUpgrade');
const autoClickUpgrade = d.getElementById('autoUpgrade');
const moneyPerSecText = d.getElementById('moneyPerSec');
const statText = d.getElementById('stats');
const cooldownText = d.getElementById('autoCooldownUpgrade');

const autoClickerAction = setInterval(function () {
  money += autoClickers * moneyInc;
  setText();
}, clickTime);

let currentMode = 'dark';
let money = 0;
let moneyInc = 1;
let incCost = 200;
let autoClickCost = 3000;
let autoClickers = 0;
let saveTimer = 0;
let clickTime = 2000;
let clickTimeCost = 4500;

function setText() {
  moneyCountText.innerHTML = 'Ω' + Math.round(money);
  IncUpgrade.innerHTML =
    'Increment The Increment <br>Costs: Ω' + Math.round(incCost);
  autoClickUpgrade.innerHTML =
    'Purchase an Auto Clicker <br>Costs: Ω' + autoClickCost;
  moneyPerSecText.innerHTML = `Ω${autoClickers * moneyInc * 5} per second`;
  statText.innerHTML = `Inc: ${moneyInc} Autoclickers: ${autoClickers}`
  cooldownText.innerHTML = `Lower Autoclick cooldown <br>Costs: Ω${clickTimeCost}`
}

function loadPage() {
  const localStorageSave = localStorage.getItem('save');
  if (localStorageSave != null) {
    let jsonData = JSON.parse(atob(localStorageSave));
    money = jsonData.money;
    autoClickers = jsonData.autoClickers;
    moneyInc = jsonData.moneyInc;
    autoClickCost = jsonData.autoClickCost;
    incCost = jsonData.incCost;
  }

  autoClickerAction;
  setText();
}

d.addEventListener('load', loadPage());

function darkToLight() {
  if (currentMode === 'dark') {
    currentMode = 'light';
    btn.style.backgroundColor = buttonGrey;
    btn.style.color = 'white';
    darkLight.innerHTML = 'Dark Mode';
    d.querySelector('body').style.backgroundColor = 'white';
    d.querySelector('h1').style.color = 'black';
  } else {
    currentMode = 'dark';
    btn.style.backgroundColor = 'white';
    btn.style.color = buttonGrey;
    darkLight.innerHTML = 'Light Mode';
    d.querySelector('body').style.backgroundColor = bodyGrey;
    d.querySelector('h1').style.color = 'white';
  }
}

function moneyClick() {
  money += moneyInc;
  moneyCountText.innerHTML = 'Ω' + Math.round(money);
}

function incUpgrade() {
  if (money >= incCost) {
    money -= incCost;
    incCost = Math.ceil(incCost * 1.6);
    moneyInc += Math.floor((moneyInc * 0.4) + 1);
    setText();
  } else {
    alert('Not Enough Ωs!');
  }
}

function autoUpgrade() {
  if (money >= autoClickCost) {
    money -= autoClickCost;
    autoClickCost += Math.ceil(autoClickCost * 1.6);
    autoClickers++;
    setText();
  } else {
    alert('Not Enough Ωs!');
  }
}

function autoCooldownUpgrade() {
  if (clickTime > 100 && money >= clickTimeCost) {
    money -= clickTimeCost;
    clickTime -= 100;
    clickTimeCost = Math.ceil(clickTimeCost * 1.6);
    setText();
  } else {
    alert('Not Enough Ωs or Cooldown too Low! (cannot go below 0.1)');
  }
}

async function save() {
  let jsonData = {};
  jsonData.money = money;
  jsonData.autoClickers = autoClickers;
  jsonData.moneyInc = moneyInc;
  jsonData.autoClickCost = autoClickCost;
  jsonData.incCost = incCost;
  encodedJSON = btoa(JSON.stringify(jsonData));
  console.log(encodedJSON, jsonData);
  if (saveTimer == 1) {
    d.querySelector('body').innerHTML = encodedJSON;
    d.querySelector('body').style.color = 'white';
    d.querySelector('body').style.fontSize = '2rem';
    d.querySelector('body').style.wordBreak = 'break-word';
  } else {
    alert(
      'Click save again in 5 seconds to display a savedata code, or data will be saved in localstorage'
    );
    localStorage.setItem('save', encodedJSON);
    saveTimer = 1;
    setTimeout(_ => {
      saveTimer = 0;
      console.log('awdi');
    }, 5000);
  }
}

function load() {
  let data = prompt('Submit encoded savedata.');
  let jsonData = JSON.parse(atob(data));
  if (jsonData != undefined) {
    money = jsonData.money;
    autoClickers = jsonData.autoClickers;
    moneyInc = jsonData.moneyInc;
    autoClickCost = jsonData.autoClickCost;
    incCost = jsonData.incCost;
    setText();
    alert('Success!');
  } else {
    console.error('jsonData = undefined :(', jsonData);
    alert('nope');
  }
}
