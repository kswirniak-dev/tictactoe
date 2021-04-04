let turn = 'cross';
const WINNING_COMBINATIONS = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

makeTurn = (element) => {
    const messageBox = document.getElementById('alert-message');
    if (!isCellEmpty(element)){
        messageBox = createMessageBox('warning', 'To pole jest zajęte. Wybierz inne');
    }
    markCell(element);
    makeElementInvinsible(alertBox);
    if (checkforVictory()) {
        messageBox = createMessageBox('gameover', 'Koniec gry. Zwycięzca: ' + turn);
        }
    }
    turn = changeTurn();
}

markCell = (element) => {
    if (turn === "circle") {
        element.appendChild(createCircleNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    else if (turn === "cross"){
        element.appendChild(createCrossNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    return element;
}

createCircleNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add("circle");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innercircle");
    resultNode.appendChild(innerDiv);
    return resultNode;
}

createCrossNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add("cross");
    return resultNode;
}

isCellEmpty = (element) => {
    if (element.firstChild.classList.contains("circle") || element.firstChild.classList.contains("cross") ) {
        return false;
    }
    return true;
}

changeTurn = () => turn === "circle" ? "cross" : "circle";

makeElementInvinsible = (element) => element.classList.add('hidden');

checkforVictory = () => WINNING_COMBINATIONS.some(combination => combination.every(number => [].slice.call(document.getElementsByClassName(turn))
        .map(cell => Number(cell.parentNode.id))
        .includes(number)))
        

createMessageBox = (className, text) => {
    messageBox = document.createElement(div);
    
    alertBox.classList.remove('hidden');
    alertBox.classList.remove('gameover');
    alertBox.classList.remove('warning');

    alertBox.classList.add(className);
    const p = document.createElement("p")
    text = document.createTextNode(text)
    p.appendChild(text);
    alertBox.appendChild(p);
    
    return alertBox;
}