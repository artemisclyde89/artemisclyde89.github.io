let input = document.querySelector('#do');
let button = document.querySelector('#addDo');
let deleteIcon = '<i class="far fa-trash-alt"></i>';
let checkIcon = '<i class="fas fa-check"></i>';
let doContainer = [];

function error() {
    let newDo = document.getElementById('do').value;
    let error = document.getElementById('error');
    if (newDo == '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
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
    entry.style.textDecoration = 'none';
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
    check.addEventListener('click', completeItem);
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
    if (item.style.textDecoration === 'none') {
        item.style.textDecoration = 'line-through';
        item.style.boxShadow = 'none';
        item.style.opacity = '0.3';
        button.style.opacity = '1';
    } else {
        item.style.textDecoration = 'none';
        item.style.boxShadow = '0 0 3px grey';
        item.style.opacity = '1';
    }
    ;
      
    }

    function removeItem() {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        parent.removeChild(item);
    }
