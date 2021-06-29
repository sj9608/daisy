function dynamicLoadCssFile(cssfile) {

    var link = document.createElement("link");
    link.href = cssfile;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName("head")[0].appendChild(link);
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
      }
}

export {dynamicLoadCssFile,removeAllChildren}