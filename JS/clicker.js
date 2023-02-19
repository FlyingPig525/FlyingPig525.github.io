const buttonGrey = 'rgb(126, 126, 126)';
const bodyGrey = 'rgb(63, 63, 63)';
const d = document;
const darkLight = d.getElementById('darkLight');
const btn = d.querySelector('button');
const moneyCountText = d.getElementById('moneyCount');
const IncUpgrade = d.getElementById('incUpgrade');

let currentMode = 'dark';
let money = 0;
let moneyInc = 1;
let incCost = 200;

moneyCountText.innerHTML = 'Ω' + Math.round(money);


function darkToLight() {
    if (currentMode === 'dark') {
        currentMode = 'light';
        btn.style.backgroundColor = buttonGrey;
        btn.style.color = 'white';
        d.querySelector('body').style.backgroundColor = 'white';
        d.querySelector('h1').style.color = 'black';
    } else {
        currentMode = 'dark';
        btn.style.backgroundColor = 'white';
        btn.style.color = buttonGrey;
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
        incCost *= 1.5;
        moneyInc += Math.floor((moneyInc * 1.1));
        IncUpgrade.innerHTML = 'Increment The Increment <br>Costs: Ω' + Math.round(incCost);
        moneyCountText.innerHTML = 'Ω' + Math.round(money);
    }
}