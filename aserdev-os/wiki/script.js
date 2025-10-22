function toggleTheme() {
  document.body.classList.toggle('light')
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark')
}
function setThemeFromPreference() {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  if (localStorage.getItem('theme')) {
    document.body.classList.toggle('light', localStorage.getItem('theme') === 'light')
  } else {
    document.body.classList.toggle('light', prefersLight)
  }
}
window.addEventListener('load', setThemeFromPreference)
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', setThemeFromPreference)

function copyCode(id) {
  const el = document.getElementById(id)
  if (!el) return
  const text = el.innerText
  navigator.clipboard && navigator.clipboard.writeText(text)
}
