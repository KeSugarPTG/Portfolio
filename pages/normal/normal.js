function showTab(tab) {
  const galleries = document.querySelectorAll('.gallery');
  const buttons = document.querySelectorAll('.tab-button');

  galleries.forEach(g => g.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));

  if (tab === 'cos') {
    document.getElementById('gallery-cos').classList.add('active');
    buttons[0].classList.add('active');
  } else {
    document.getElementById('gallery-non').classList.add('active');
    buttons[1].classList.add('active');
  }
}
