let turn = "cross";

makeTurn = (element) => {
    const alertBox = document.getElementById("warning-cell-taken");
    if (!isCellEmpty(element)){
        alertBox.style.visibility='visible';
        return null;
    }
    markCell(element);
    makeElementInvinsible(alertBox);
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
