var close = document.getElementById('x-button');
var welcomeBox = document.getElementById('welcome');
var navIcon = document.querySelector('.nav-link');
var wallet = document.querySelector('.wallet');
var profile = document.querySelector('.profile');

close.addEventListener("click", hideBanner);
wallet.addEventListener("click", highlightWallet);
profile.addEventListener("click", highlightProfile);

function hideBanner() {
  welcomeBox.classList.add('hidden');
}

function highlightWallet() {
  wallet.classList.add('selected');
}

function highlightProfile() {
  profile.classList.add('selected');
}
