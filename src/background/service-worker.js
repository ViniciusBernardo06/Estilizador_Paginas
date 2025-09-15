chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ highlightingEnabled: false });
  console.log('Estilizador de Páginas instalado e estado inicial definido.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TOGGLE_HIGHLIGHTING') {
        const tabId = message.tabId;

        chrome.storage.local.get(['highlightingEnabled'], (result) => {
            const newState = !result.highlightingEnabled;
            
            chrome.storage.local.set({ highlightingEnabled: newState }, () => {
                if (newState) {
                    chrome.scripting.executeScript({
                        target: { tabId: tabId },
                        files: ['src/content/content.js']
                    });
                } else {
                    chrome.tabs.reload(tabId);
                }
            });
        });
    }
});