var close = document.getElementById('x-button');
var welcomeBox = document.getElementById('welcome');
var navIcon = document.querySelector('.nav-link');
var wallet = document.querySelector('.wallet');
var profile = document.querySelector('.profile');
var clipboard = document.querySelector('.clipboard');
var leftColumn = document.querySelector('.left-column');
var rightColumn = document.querySelector('.right-column');
var dashboardView = document.querySelector('.dashboard-view');
var transactionsView = document.querySelector('.transactions-view');


close.addEventListener("click", hideBanner);
wallet.addEventListener("click", highlightWallet);
profile.addEventListener("click", highlightProfile);
clipboard.addEventListener("click", highlightClipboard);

function hideBanner() {
  welcomeBox.classList.add('hidden');
}

function highlightProfile() {
  clipboard.classList.remove('selected');
  wallet.classList.remove('selected');
  profile.classList.add('selected');
}

function highlightWallet() {
  dashboardView.classList.add('hidden');
  transactionsView.classList.remove('hidden');
  clipboard.classList.remove('selected');
  profile.classList.remove('selected');
  wallet.classList.add('selected');
}

function highlightClipboard() {
  transactionsView.classList.add('hidden');
  dashboardView.classList.remove('hidden');
  wallet.classList.remove('selected');
  profile.classList.remove('selected');
  clipboard.classList.add('selected');
}
