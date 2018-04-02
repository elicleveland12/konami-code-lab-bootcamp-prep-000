const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const i = 0;

function init() {
  const body = document.getElementId('body');
  
  body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);
    if (key === code[i]) {
      index++;
      if (i === code.length) {
        alert('Congratulations!');
      }
    }
  });
}