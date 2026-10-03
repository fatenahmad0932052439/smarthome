import './style.css'

// قائمة الجوال (فتح/إغلاق)
const menuBtn = document.getElementById('menu')
const menubar = document.querySelector('[role="menubar"]')

if (menuBtn && menubar) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menubar.classList.contains('flex')
    if (isOpen) {
      menubar.classList.remove('flex')
      menubar.classList.add('hidden')
      menuBtn.setAttribute('aria-expanded', 'false')
    } else {
      menubar.classList.remove('hidden')
      menubar.classList.add('flex')
      menuBtn.setAttribute('aria-expanded', 'true')
    }
  })
}