// Get username from url from login and post in title
let left_title = document.getElementById('left_title');
var username;

if (getQueryVariable('myUsername')) {
    username = getQueryVariable('myUsername');
    left_title.innerHTML = 'COMMUNITY CENTER | ' + username;
    localStorage.setItem("username", username);
}
else {
    left_title.innerHTML = 'COMMUNITY CENTER | ' + localStorage.getItem("username");
}


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

// Catering Service
let breakfast_radio = document.getElementById('breakfast_select');
let lunch_radio = document.getElementById('lunch_select');
let dinner_radio = document.getElementById('dinner_select');
let mexican_radio = document.getElementById('mexican_select');
let italian_radio = document.getElementById('italian_select');
let chinese_radio = document.getElementById('chinese_select');
let total_price_form = document.getElementById('total_block');
let total_price_show = document.getElementById('total_block_show');
let people_quantity = document.getElementById('people_quantity');
var radios = document.getElementsByName('service_select');
var cost_per_person = 0;

function checkCateringRadioCheck() {
    if (breakfast_radio.checked) {
        cost_per_person = 8;
    }
    else if (lunch_radio.checked) {
        cost_per_person = 10;
    }
    else if (dinner_radio.checked) {
        cost_per_person = 12;
    }
    else if (mexican_radio.checked) {
        cost_per_person = 15;
    }
    else if (italian_radio.checked) {
        cost_per_person = 15;
    }
    else if (chinese_radio.checked) {
        cost_per_person = 15;
    }
}

function calculatePrice() {
    var total = 0;
    checkCateringRadioCheck();
    
    total = cost_per_person * people_quantity.value;

    total_price_form.value = total;
    total_price_show.innerHTML = '$'+total;
}

people_quantity.addEventListener('change', calculatePrice);

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', calculatePrice);
}
