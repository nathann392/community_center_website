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

// Schedule Class
document.querySelectorAll('.class_block').forEach (
    e => e.addEventListener('click', function()  {
        if (e.bgColor == 'grey') {
            e.bgColor = 'white';
        }
        else {
            e.bgColor = 'grey';
        }
    })
);



