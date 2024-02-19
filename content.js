document.addEventListener('mouseup', function(event) {
    var selection = window.getSelection().toString().trim();

    if(selection !== '') {
        highlightSelection();
    }
});

function highlightSelection() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var newNode = document.createElement('span');
    newNode.setAttribute('style', 'background-color: yellow;'); // Change the style as desired

    range.surroundContents(newNode);
}
