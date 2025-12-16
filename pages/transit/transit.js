document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) e.preventDefault();
  if (e.ctrlKey && ['U','S'].includes(e.key)) e.preventDefault();
});

const params = new URLSearchParams(window.location.search);
const redirectTo = params.get("to") || "index.html";

setTimeout(() => {
  window.location.href = redirectTo;
}, 3000);
