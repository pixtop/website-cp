var i = 0;
var images = [];
var time = 6000;

images[0] = 'img/slide-1.png';
images[1] = 'img/slide-2.png';
images[2] = 'img/slide-3.png';
images[3] = 'img/slide-4.png';

function change() {
    document.getElementById('slide').setAttribute('src', images[i]);

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("change()", time);
}

window.onload = change;