console.log('Hello from Nerdbord!')

setInterval(() => {
  const box = document.querySelector('.box');
  const colors = ['red', 'blue', 'yellow', 'purple'];

  let randomIndex = Math.floor(Math.random() * colors.length);

  box.style.borderColor = colors[randomIndex];
}, 3000);
