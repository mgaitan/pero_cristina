function cristina(){
    var node,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_TEXT);

    while(node = ni.nextNode()) {

        if (/\S/.test(node.nodeValue)) {
            node.nodeValue = node.nodeValue.replace(/[\wáéíóúñÑ]+/g, "Cristina");
        }
    }
}

cristina();