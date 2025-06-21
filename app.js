// This file contains the JavaScript code for the Virgolandia web page, adding interactivity and handling events.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = '¡Bienvenido a Virgolandia, el servidor de Minecraft de Bruno!';

    const button = document.getElementById('explore-button');
    button.addEventListener('click', () => {
        alert('¡Explora Virgolandia y descubre sus maravillas!');
    });
});