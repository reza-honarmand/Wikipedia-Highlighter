document.addEventListener('DOMContentLoaded', function() {
    // Retrieve saved highlights from Chrome storage
    chrome.storage.sync.get({ highlights: [] }, function(data) {
        var highlights = data.highlights;
        var highlightList = document.getElementById('highlightList');

        // Clear the existing list content
        highlightList.innerHTML = '';

        // Populate the highlight list
        highlights.forEach(function(highlight) {
            var listItem = document.createElement('li');
            listItem.textContent = highlight;
            highlightList.appendChild(listItem);
        });
    });

    // Add event listener for the button to clear highlights
    var clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Highlights';
    clearButton.addEventListener('click', function() {
        // Clear highlights from Chrome storage
        chrome.storage.sync.set({ highlights: [] }, function() {
            // Clear the list content
            document.getElementById('highlightList').innerHTML = '';
            console.log('Highlights cleared');
        });
    });
    document.body.appendChild(clearButton);
});
