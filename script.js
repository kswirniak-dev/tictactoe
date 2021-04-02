toggleCross = (element) => {
    if (!element.childNodes[0].classList.contains("cross"))
    {        
        element.childNodes[0].classList.add("cross");
    }
    else
    {
        element.childNodes[0].classList.remove("cross")
    }
}