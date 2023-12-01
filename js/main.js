const btnWA = document.querySelector('#button')
const iconWA = document.getElementById('iconWA')

btnWA.addEventListener('mouseover', () => {
    iconWA.src = "images/MdiWhatsapp02.svg"
});

btnWA.addEventListener('mouseleave', () => {
    iconWA.src = "images/MdiWhatsapp.svg"
});
