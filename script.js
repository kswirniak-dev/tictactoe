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

markAsCircle = (element) => {
    element.childNodes[0] = createCircleNode(element.childNodes[0]);
}

createCircleNode = (divNode) => {
    const resultNode = divNode.cloneNode();
    resultNode.classList.add("circle");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innercircle");
    resultNode.appendChild(innerDiv);

    console.log(divNode);
    console.log(resultNode);
    console.log(divNode === resultNode)

    return resultNode;

}