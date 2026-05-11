// ─── MODAL ───────────────────────────────────────────────
function openModal() {
  document.getElementById('loginModal').classList.add('open');
}

function closeModal() {
  document.getElementById('loginModal').classList.remove('open');
}

function closeOnOverlay(e) {
  if (e.target === document.getElementById('loginModal')) closeModal();
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  if (!email || !pass) { toast('Preencha e-mail e senha!'); return; }
  closeModal();
  toast('✓ Bem-vindo ao FrontStart! (simulação)');
}

// ─── TOAST ───────────────────────────────────────────────
let toastTimer;

function toast(msg) {
  const el = document.getElementById('toastEl');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ─── MÓDULOS — ABAS ──────────────────────────────────────
function switchTab(btn, id) {
  document.querySelectorAll('.mod-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.module-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

// ─── PLAYER DE AULAS ─────────────────────────────────────
function selectLesson(item, title, dur, videoId) {
  document.querySelectorAll('.playlist-item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  document.querySelector('.player-title').textContent = 'Aula — ' + title;
  document.querySelector('.player-meta').textContent  = 'Duração: ' + dur;
  document.getElementById('videoPlayer').src = 'https://www.youtube.com/embed/' + videoId;
}

// ─── DOWNLOAD DE EXERCÍCIO ────────────────────────────────
function downloadEx(btn, filename) {
  // Substitua o href do link pelo caminho real do PDF quando disponível.
  // Por enquanto exibe feedback visual de simulação.
  btn.textContent = '✓ Baixando…';
  btn.style.color = '#34d399';
  btn.style.borderColor = 'rgba(52,211,153,.4)';
  setTimeout(() => {
    btn.innerHTML = '📥 Baixar PDF';
    btn.style.color = '';
    btn.style.borderColor = '';
    toast('📄 ' + filename + ' — disponível em breve!');
  }, 1200);
}
