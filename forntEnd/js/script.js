
// sidebar
const menuIconButton = document.querySelector("[data-menu-icon-btn]")
const sidebar = document.querySelector("[data-sidebar]")

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open")
})

// navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// dropdwon
// document.addEventListener("click", e => {
//   const isDropdownButton = e.target.matches("[data-dropdown-button]")
//   if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

//   let currentDropdown
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest("[data-dropdown]")
//     currentDropdown.classList.toggle("active")
//   }

  
//   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.classList.remove("active")
//   })
// })
