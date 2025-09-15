const toggleButton = document.getElementById('toggleButton');

chrome.storage.local.get(['highlightingEnabled'], (result) => {
    if (result.highlightingEnabled) {
        toggleButton.textContent = 'Desativar Destaque';
        toggleButton.classList.remove('btn-primary');
        toggleButton.classList.add('btn-outline-secondary');
    }
});

toggleButton.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.runtime.sendMessage({ type: 'TOGGLE_HIGHLIGHTING', tabId: tab.id });
    window.close();
});