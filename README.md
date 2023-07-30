# Reddit Ad Highlighter

This Chrome extension highlights promoted posts on Reddit.

![Screenshot](https://i.ibb.co/fXHf0V8/image.png)

## Setup

1. Clone or download this repo to your local machine.
2. Navigate to `chrome://extensions` in your Chrome browser.
3. Toggle on "Developer mode" at the top right.
4. Click "Load unpacked" and select the directory of this extension.

## Functionality

`Reddit Ad Highlighter` scans for elements with the `data-testid="post-container"` attribute, checking for the presence of child `span` elements with the text "promoted". When identified, a solid red border is added around the promoted post.

The extension also observes for changes to the DOM, re-running the scan to ensure newly loaded posts are also checked.

## Limitations

This extension is currently configured to work only with Reddit's HTML structure as of July 2023. Changes to Reddit's structure may impact functionality.
