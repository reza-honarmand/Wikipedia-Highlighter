// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message action is to save the highlight
    if (message.action === 'saveHighlight') {
        // Save the highlighted text
        saveHighlight(message.text);
    }
});

// Function to save the highlighted text
function saveHighlight(text) {
    // Retrieve existing highlights from Chrome storage
    chrome.storage.sync.get({ highlights: [] }, function(data) {
        var highlights = data.highlights;

        // Add the new highlight to the array
        highlights.push(text);

        // Update the highlights in Chrome storage
        chrome.storage.sync.set({ highlights: highlights }, function() {
            console.log('Highlight saved:', text);
        });
    });
}
