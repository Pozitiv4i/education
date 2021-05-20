const ContentPopUp = document.getElementById('img1');
const LockPopUp = document.getElementById('lock-popup');
const popup = document.getElementById('popup1');
ContentPopUp.addEventListener("click", function() {
    popup.style.display = 'block';
});
LockPopUp.addEventListener("click", function() {
    popup.style.display = 'none';
});
