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

// Schedule Class - Add
document.getElementById('addButton').addEventListener('click', addClass);

var class_blocks = document.getElementsByClassName('class_block');
var class_array = new Array(6);

for (var i = 0; i < class_array.length; i++) {
    class_array[i] = new Array(7);
}

let h = 0;
for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
        class_array[i][j] = class_blocks[h];
        h++;
    }
}

function addClass() {
    let selected_day = document.getElementById('day').value;
    let selected_time = document.getElementById('time').value;
    let selected_title = document.getElementById('title').value;
    let selected_price = document.getElementById('price').value;
    
    var input = selected_title + '<br>$' + selected_price;

    class_array[selected_day][selected_time].innerHTML = input;
}

document.getElementById('delButton').addEventListener('click', delClass);

function delClass() {
    let selected_day = document.getElementById('day').value;
    let selected_time = document.getElementById('time').value;

    class_array[selected_day][selected_time].innerHTML = '';
}

