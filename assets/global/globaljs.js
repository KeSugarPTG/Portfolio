// Fade-in body
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Chặn chuột phải
document.addEventListener('contextmenu', e => e.preventDefault());

// Chặn F12, Ctrl+U, Ctrl+Shift+I/J/C
document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) e.preventDefault();
  if (e.ctrlKey && ['U','S'].includes(e.key)) e.preventDefault();
});
