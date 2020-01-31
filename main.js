var close = document.getElementById('x-button');
var welcomeBox = document.getElementById('welcome');

close.addEventListener("click", hideBanner)

function hideBanner() {
  console.log("YO!");
  welcomeBox.classList.add('hidden');
}
