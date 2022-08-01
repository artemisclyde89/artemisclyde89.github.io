let input = document.querySelector('#do');
let button = document.querySelector('#addDo');
let deleteIcon = '<i class="far fa-trash-alt"></i>';
let checkIcon = '<i class="fas fa-check"></i>';
let doContainer = [];

function error() {
    let newDo = document.getElementById('do').value;
    let error = document.querySelector('.error');
    if (newDo == '') {
        error.classList.add('error-visible');
    } else {
        error.classList.add('hide');
    }
}

function getInput() {
    let newDo = document.getElementById('do').value;
    
    if (newDo) {
        error();
        addDo(newDo);
        document.getElementById('do').value = '';
        
    } else {
        error();
    }
}

button.addEventListener('click', function () {
    getInput();
})

input.addEventListener('keypress', function (e) {
    if (13 === e.keyCode) {
        getInput();
  }
})



function addDo(newDo) {
    let list = document.getElementById('list');
    let entry = document.createElement('li');
    entry.innerText = newDo;
    doContainer.push(newDo);
    let buttonGroup = document.createElement('span');
    buttonGroup.classList.add('buttons');
    let del = document.createElement('button');
    del.classList.add('deleteBtn');
    del.innerHTML = deleteIcon;
    del.addEventListener('click', removeItem);
    let check = document.createElement('button');
    check.classList.add('checkBtn');
    check.innerHTML = checkIcon;
    check.addEventListener('mousedown', completeItem);
    buttonGroup.appendChild(del)
    buttonGroup.appendChild(check);
    entry.appendChild(buttonGroup)
    list.insertBefore(entry, list.childNodes[0]);
}



/* let complete = document.querySelectorAll('.checkBtn');
// let parent = complete.parentNode.parentNode;
complete.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'grey';
    event.target.style.boxShadow = '0 0 -5px black';
}) */

function completeItem() {
      
    let item = this.parentNode.parentNode;
    let button = document.querySelector('.buttons');
    button.addEventListener('mouseup', function (e) {
        item.classList.toggle('complete');
        button.classList.toggle('complete-button');
    });
    }

    function removeItem() {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        parent.removeChild(item);
    }
