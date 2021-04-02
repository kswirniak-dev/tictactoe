let turn = "cross";

toggleCross = (element) => {
    if (element.childNodes[0].classList.length === 0)
    {        
        element.childNodes[0].classList.add("cross");
    }
    else
    {
        element.childNodes[0].classList.remove(element.childNodes[0].classList[0])
        if (element.childNodes[0].childNodes.length > 0) {
            element.childNodes[0].removeChild(element.childNodes[0].childNodes[0]);
        }
        
    }
}

markCell = (element) => {
    console.log(turn)
    if (turn === "circle") {
        console.log("about to add circle node");
        element.appendChild(createCircleNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    else if (turn === "cross"){
        console.log("about to add cross node");
        element.appendChild(createCrossNode(element.childNodes[0]));
        element.removeChild(element.firstChild);
    }
    turn = changeTurn();
}

createCircleNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add("circle");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innercircle");
    resultNode.appendChild(innerDiv);
    console.log(resultNode);
    return resultNode;
}

createCrossNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add("cross");
    console.log(resultNode);
    return resultNode;
}

changeTurn = () => turn === "circle" ? "cross" : "circle";