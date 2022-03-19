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

// Equipment Rental
let chair_quantity = document.getElementById('chair_quantity');
let table_quantity = document.getElementById('table_quantity');
let podium_quantity = document.getElementById('podium_quantity');
let mic_quantity = document.getElementById('mic_quantity');
let popcorn_quantity = document.getElementById('popcorn_quantity');
let dance_quantity = document.getElementById('dance_quantity');
let total_price_form = document.getElementById('total_block');
let total_price_show = document.getElementById('total_block_show');
function calculatePrice() {
    var total = 0;

    for (var i = 0; i < 6; i++) {
        if (i == 0) {
            if (!isNaN(chair_quantity.value)) {
                total += 1 * chair_quantity.value;
            }
        }
        else if (i == 1) {
            if (!isNaN(table_quantity.value)) {
                total += 5 * table_quantity.value;
            }
        }
        else if (i == 2) {
            if (!isNaN(podium_quantity.value)) {
                total += 10 * podium_quantity.value;
            }
        }
        else if (i == 3) {
            if (!isNaN(mic_quantity.value)) {
                total += 5 * mic_quantity.value;
            }
        }
        else if (i == 4) {
            if (!isNaN(popcorn_quantity.value)) {
                total += 25 * popcorn_quantity.value;
            }
        }
        else if (i == 5) {
            if (!isNaN(dance_quantity.value)) {
                total += 50 * dance_quantity.value;
            }
        }
    }

    total_price_form.value = total;
    total_price_show.innerHTML = '$'+total;
}

chair_quantity.addEventListener('change', calculatePrice);

table_quantity.addEventListener('change', calculatePrice);

podium_quantity.addEventListener('change', calculatePrice);

mic_quantity.addEventListener('change', calculatePrice);

popcorn_quantity.addEventListener('change', calculatePrice);

dance_quantity.addEventListener('change', calculatePrice);
