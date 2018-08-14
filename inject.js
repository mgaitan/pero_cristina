function cristina(){
    var node,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_TEXT);

    while(node = ni.nextNode()) {

        if (/\S/.test(node.nodeValue)) {

            var words = node.nodeValue.split(" ").length;
            console.log(node.nodeValue + ' ' + words);
            node.nodeValue = 'Cristina '.repeat(words);
        }
    }
}

cristina();