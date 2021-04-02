markCell = (element) => {
    if (!element.hasChildNodes())
    {
        const p = document.createElement("p");
        const x = document.createTextNode("X");
        p.appendChild(x);
        element.appendChild(p)
    }
}