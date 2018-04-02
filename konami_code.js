const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);
    var index = 0;
    if(key === code[index]) {
      index++;

      if(index === code.length) {
        alert("Hurray!");
        index = 0;
        }
    }
    else {
    console.log(e.which);
    index = 0;
    }
  });
}

init();