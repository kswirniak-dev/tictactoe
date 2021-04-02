let turn = "cross";

markCell = (element) => {
    if (!isCellEmpty(element)){
        alert("The cell is already taken. Choose another one.");
        return null;
    }
    if (turn === "circle") {
        element.appendChild(createCircleNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    else if (turn === "cross"){
        element.appendChild(createCrossNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    turn = changeTurn();
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