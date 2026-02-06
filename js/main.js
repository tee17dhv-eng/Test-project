// Basic JS to wire the button and output
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const output = document.getElementById('output');

  let clicks = 0;

  btn.addEventListener('click', () => {
    clicks += 1;
    output.textContent = `Button clicked ${clicks} time${clicks === 1 ? '' : 's'}`;
    // small visual feedback
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(0.98)' },
      { transform: 'scale(1)' }
    ], { duration: 160, easing: 'ease-out' });
  });
});