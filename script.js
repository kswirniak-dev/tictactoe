let turn = "cross";
const WINNING_COMBINATIONS = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

makeTurn = (element) => {
    const alertBox = document.getElementById("warning-cell-taken");
    if (!isCellEmpty(element)){
        alertBox.style.visibility='visible';
        return null;
    }
    markCell(element);
    makeElementInvinsible(alertBox);
    console.log(checkforVictory());
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

makeElementInvinsible = (element) => element.style.visibility = 'hidden';

checkforVictory = () => WINNING_COMBINATIONS.some( combination => combination.every(number => [].slice.call(document.getElementsByClassName(turn))
        .map(cell => Number(cell.parentNode.id))
        .includes(number)))

