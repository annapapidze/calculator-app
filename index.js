"use strict";

// variables
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const body = document.querySelector('body');
const heading = document.querySelector('.heading');
const para = document.querySelector('.para');
const numberColor = document.getElementById('white_screen');
const numbersBcr = document.querySelector('.btns');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const slider = document.getElementById('screen_id');

// this is the function of delete button that deletes the last item
function del() {
    var value = document.getElementById('white_screen').value;
    document.getElementById('white_screen').value = value.substr(0, value.length - 1);
}

// this function changes the style 
slider.addEventListener('input', () => {
    switch (slider.value) {
        case '1':
            body.classList.remove('active1');
            body.classList.remove('active2');
            heading.classList.remove('active1');
            heading.classList.remove('active2');
            para.classList.remove('active1');
            para.classList.remove('active2');
            numberColor.classList.remove('active1');
            numberColor.classList.remove('active2');
            numbersBcr.classList.remove('active1');
            numbersBcr.classList.remove('active2');
            reset.classList.remove('active1');
            reset.classList.remove('active2');
            equal.classList.remove('active1');
            equal.classList.remove('active2');
            slider.classList.remove('active1');
            slider.classList.remove('active2');

            break;

        case '2':
            body.classList.add('active1');
            body.classList.remove('active2');
            heading.classList.add('active1');
            para.classList.add('active1');
            para.classList.remove('active2');
            heading.classList.remove('active2');
            numberColor.classList.add('active1');
            numberColor.classList.remove('active2');
            numbersBcr.classList.add('active1');
            numbersBcr.classList.remove('active2');
            reset.classList.add('active1');
            reset.classList.remove('active2');
            equal.classList.add('active1');
            equal.classList.remove('active2');
            slider.classList.add('active1');
            slider.classList.remove('active2');

            break;

        case '3':
            body.classList.add('active2');
            heading.classList.add('active2');
            para.classList.add('active2');
            numberColor.classList.add('active2');
            numberColor.classList.remove('active1');
            numbersBcr.classList.add('active2');
            numbersBcr.classList.remove('active1');
            reset.classList.add('active2');
            reset.classList.remove('active1');
            equal.classList.add('active2');
            equal.classList.remove('active1');
            slider.classList.add('active2');
            slider.classList.remove('active1');

            break;
    }
});