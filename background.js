// import { languageCodes } from "./languageCodes.js";

// // Log when the background script is ready
// console.log('Background script loaded and ready.');

// browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log('Message received:', message); // Check if the message is being received
//     if (message === "getLanguageCodes") {
//         sendResponse(languageCodes);
//     }
// });

// console.log("backgoreund")
// browser.runtime.onInstalled.addListener(function () {
//     console.log("installed")
//     // Listen for tab updates (this will trigger when the page is loaded or reloaded)
//     browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//         console.log("updated")
//         // Check if the page is fully loaded (changeInfo.status === 'complete')
//         if (changeInfo.status === 'complete' && tab.url.includes('google.com')) {
//             // Inject the content script into the page
//             browser.tabs.executeScript(tabId, { file: 'removeSearchResult.js' });
//         }
//     });
// });
