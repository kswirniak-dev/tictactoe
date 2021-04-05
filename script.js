let turn = 'cross';
const WINNING_COMBINATIONS = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

makeTurn = (element) => {
    let messageBox = document.getElementById('message-box');
    const page = document.getElementById('page');   
    if (page.firstChild.id === 'message-box'){
        page.removeChild(page.firstChild);
    }
    if (!isCellEmpty(element)){
        messageBox = createMessageBox('warning', 'To pole jest zajęte. Wybierz inne.');
        page.insertBefore(messageBox, page.childNodes[0]);        
        return null;     
    }

    markCell(element);
    if (checkforVictory()) {
        messageBox = createMessageBox('gameover', 'Koniec gry. Zwycięzca: ' + turn);
        page.insertBefore(messageBox, page.childNodes[0])
        const squares = [].slice.call(document.getElementsByClassName('square'));
        console.log(squares);
        squares.map(node => disableMouseEvents(node));
        }
    turn = changeTurn();
}

markCell = (element) => {
    if (turn === 'circle') {
        element.appendChild(createCircleNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    else if (turn === 'cross'){
        element.appendChild(createCrossNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    return element;
}

createCircleNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add('circle');
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innercircle');
    resultNode.appendChild(innerDiv);
    return resultNode;
}

createCrossNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add('cross');
    return resultNode;
}

isCellEmpty = (element) => {
    if (element.firstChild.classList.contains("circle") || element.firstChild.classList.contains("cross") ) {
        return false;
    }
    return true;
}

changeTurn = () => turn === 'circle' ? 'cross' : 'circle';

hideElement = (element) => element.classList.add('hidden');

checkforVictory = () => WINNING_COMBINATIONS.some(combination => combination.every(number => [].slice.call(document.getElementsByClassName(turn))
        .map(cell => Number(cell.parentNode.id))
        .includes(number)))
        

createMessageBox = (className, text) => {
    messageBox = document.createElement('div');
    messageBox.setAttribute('id', 'message-box');
    messageBox.classList.add('alert');
    messageBox.classList.add(className);
    const closeButton = document.createElement('span');
    closeButton.classList.add('closebtn');
    closeButton.onclick = function(event) {
        this.parentElement.classList.add('hidden');
    }
    const crossButton =  document.createTextNode('×');
    closeButton.appendChild(crossButton);
    const p = document.createElement('p')
    p.classList.add('message-text')
    text = document.createTextNode(text)
    p.appendChild(text);
    messageBox.appendChild(closeButton);
    messageBox.appendChild(p);
    
    return messageBox;
}

disableMouseEvents = (element) => element.classList.add('disabled');
