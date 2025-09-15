console.log("Content script carregado! Destacando links.");

const style = document.createElement('style');
style.textContent = `
    a {
        outline: 3px solid #ff0000 !important;
        transition: outline 0.2s ease-in-out;
    }
    a:hover {
        outline-width: 5px;
    }
`;

document.head.appendChild(style);