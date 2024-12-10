const messages = [
    "Eres más fuerte de lo que crees 🌟",
    "Todo va a estar bien, confía en el proceso 🌈",
    "Hoy es un día perfecto para sonreír 😊",
    "Siempre puedes contar conmigo, sin importar qué 💖",
    "Tu luz ilumina el camino de los demás 🌻"
  ];
  
  const icons = ["🌸", "💖", "🌟", "🌈", "🌼"];
  
  const messageElement = document.getElementById('message');
  const button = document.getElementById('changeMessage');
  const animations = document.getElementById('animations');
  
  button.addEventListener('click', () => {
    // Cambiar mensaje
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
  
    // Crear icono animado
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.top = `${Math.random() * 100}%`;
    animations.appendChild(icon);
  
    // Eliminar icono después de la animación
    setTimeout(() => {
      icon.remove();
    }, 3000);
  });
  