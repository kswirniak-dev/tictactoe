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