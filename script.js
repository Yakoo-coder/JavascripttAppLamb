
var lamb = document.querySelector('a');
var img = document.querySelector('#lamb');

lamb.addEventListener('click', function () {
    if (img.getAttribute('src') === 'img/lamba_kapali.jpg') {
        img.setAttribute('src', 'img/lamba_acik.jpg')
    } else if (img.getAttribute('src') === 'img/lamba_acik.jpg') {
        img.setAttribute('src', 'img/lamba_kapali.jpg')
    }
});


