function hideDiv() {
    var divToHide = document.getElementById('hiddenDiv');
    divToHide.style.display = 'none';
}
// Add this JavaScript code in your java.js file or inline script

const checkbox = document.getElementById('check');
const socialIcons = document.querySelector('.social');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    socialIcons.style.display = 'none';
  } else {
    socialIcons.style.display = 'flex';
  }
});
