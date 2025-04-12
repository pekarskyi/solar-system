let range = document.querySelector('.range');
let divider = document.querySelector('body');

range.addEventListener('input', ()=> {
    divider.style.setProperty('--divider', range.value)
})

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }