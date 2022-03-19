let form = document.getElementById('donate');
let button = document.getElementById('mySubmit');
let hi = document.createElement('h2');
hi.id = 'hi';
hi.innerHTML = 'Thank you for donating!';
hi.style.textAlign = 'center';
hi.style.marginTop = '150px';

button.onclick = function() {
    form.innerHTML = '';
    form.appendChild(hi);
};

