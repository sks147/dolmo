browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {

  if (info != null && info.hasOwnProperty('menuItemId')
    && info.hasOwnProperty('selectionText')) {

    var content = info.selectionText;
    console.log("the content copied is:::" + content);
    
    if (content !== '') {
      // TODO : copy text to extension
    }
  }
}

// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "copy",
  title: "Copy Text",
  contexts: ["selection"]
});

function copyText(selectedText) {
  if (selectedText == 'copy') {
    // TODO : handle action on copied text
  }
}

