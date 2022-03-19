// Get username from url from login and post in title
let left_title = document.getElementById('left_title');
var username;

if (getQueryVariable('myUsername')) {
    username = getQueryVariable('myUsername');
    left_title.innerHTML = 'BEST COMMUNITY SERVICE | ' + username;
    localStorage.setItem("username", username);
}
else {
    left_title.innerHTML = 'BEST COMMUNITY SERVICE | ' + localStorage.getItem("username");
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

// Elderly Care
let standard_radio = document.getElementById('standard_select');
let premium_radio = document.getElementById('premium_select');
let total_price_form = document.getElementById('total_block');
let total_price_show = document.getElementById('total_block_show');
let weeks_quantity = document.getElementById('weeks_quantity');
var radios = document.getElementsByName('service_select');
var cost_per_week = 0;

function checkCareRadioCheck() {
    if (standard_radio.checked) {
        cost_per_week = 300;
    }
    else if (premium_radio.checked) {
        cost_per_week = 500;
    }
}

function calculatePrice() {
    var total = 0;
    checkCareRadioCheck();
    
    total = cost_per_week * weeks_quantity.value;

    total_price_form.value = total;
    total_price_show.innerHTML = '$'+total;
}

weeks_quantity.addEventListener('change', calculatePrice);
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', calculatePrice);
}