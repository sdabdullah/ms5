console.log('external file');

// option 2 for click event handler
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option 3: get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
    // console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3: different version
const btnMakePurple = document.getElementById('btn-make-purple');

btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}