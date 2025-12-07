(function () {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  // Vérifie si l'utilisateurice a déjà un choix sauvegardé (LocalStorage directement depuis le navigateur)
  const stored = localStorage.getItem('theme');
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
  }
  function updateLabel() {
    const isDark = document.body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
  }
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateLabel();
  });

  updateLabel();
})();