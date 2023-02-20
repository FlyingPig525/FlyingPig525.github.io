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
*/
const buttonGrey = 'rgb(126, 126, 126)';
const bodyGrey = 'rgb(63, 63, 63)';
const d = document;
const darkLight = d.getElementById('darkLight');
const btn = d.querySelector('button');
const moneyCountText = d.getElementById('moneyCount');
const IncUpgrade = d.getElementById('incUpgrade');
const autoClickUpgrade = d.getElementById('autoUpgrade');

let currentMode = 'dark';
let money = 0;
let moneyInc = 1;
let incCost = 200;
let autoClickCost = 3000;
let autoClickers = 0;
let autoClickerAction = setInterval(function() {
    money += autoClickers * moneyInc;
    console.log('+' + (moneyInc * autoClickers));
    moneyCountText.innerHTML = 'Ω' + Math.round(money);
}, 200);


function loadPage() {
    moneyCountText.innerHTML = 'Ω' + Math.round(money);
    autoClickerAction;
}

d.addEventListener('load', loadPage());

function darkToLight() {
    if (currentMode === 'dark') {
        currentMode = 'light';
        btn.style.backgroundColor = buttonGrey;
        btn.style.color = 'white';
        darkLight.innerHTML = 'Dark Mode'
        d.querySelector('body').style.backgroundColor = 'white';
        d.querySelector('h1').style.color = 'black';
    } else {
        currentMode = 'dark';
        btn.style.backgroundColor = 'white';
        btn.style.color = buttonGrey;
        darkLight.innerHTML = 'Light Mode'
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
        incCost *= 2;
        moneyInc += Math.floor((moneyInc * 1.1));
        IncUpgrade.innerHTML = 'Increment The Increment <br>Costs: Ω' + Math.round(incCost);
        moneyCountText.innerHTML = 'Ω' + Math.round(money);
        console.log('Inc Amount: ' + moneyInc);
    } else {
        alert('Not Enough Ωs!');
    }
}

function autoUpgrade() {
    if (money >= autoClickCost) {
        money -= autoClickCost;
        autoClickCost += Math.ceil(autoClickCost * 1.6);
        autoClickers++;
        autoClickUpgrade.innerHTML = 'Purchase an Auto Clicker <br>Costs: Ω' + autoClickCost;
        moneyCountText.innerHTML = 'Ω' + Math.round(money);
        console.log('Auto Clickers: ' + autoClickers);
    } else {
        alert('Not Enough Ωs!');
    }
}
