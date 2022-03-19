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


// Payment
let payment_total = document.getElementById('total_block');
let total_h2 = document.getElementById('total_h2');
var total = 0;

if (getQueryVariable('total_block')) {
    total = getQueryVariable('total_block');
}
console.log(total);

total_h2.innerHTML = 'Total: $' + total;

// After payment checkout button clicked
let form = document.getElementById('payment_form');
let button = document.getElementById('mySubmit');
let hi = document.createElement('h2');
hi.id = 'hi';
hi.innerHTML = 'Thank you!';
hi.style.textAlign = 'center';
hi.style.marginTop = '250px';

button.onclick = function() {
    form.innerHTML = '';
    form.appendChild(hi);
};