window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {         
  showNavOnScroll()
  showButtomFloat()

  activateMenuAtCurrentSection(home)
  // activateMenuAtCurrentSection(services)
  // activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  // Linha Alvo 
    const targetLine = scrollY + innerHeight / 2 

    // verificar se a seção passou da linha 
    // quais dados vou precisar?

    // O topo da seção
    const sectionTop = section.offsetTop
    // Altura da seção / footer da seção
    const sectionHeight = section.offsetHeight

    // O topo da seção chegou ou ultrapassou da linha alvo
    const sectionTopReachOrPassedLine = targetLine >= sectionTop 

    // verificar se a base está abaixo da linha Alvo
    // quais dados vou precisar?

    // A seção termina em
    const sectionEndsAt = sectionTop + sectionHeight 

    // A base da seção chegou ou ultrapassou a linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine 

    // limites da seção 
    const sectionBoundaries = sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)

    // menuElement.classList.remove('active')
    if(sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

























  function showNavOnScroll() {
    if (scrollY > 0) {
      navigationPage.classList.add('scroll')  
    } else {
      navigationPage.classList.remove('scroll')
    }
  }

  function showButtomFloat() {

    if (scrollY > 1500) {
      buttomFloat.classList.add('show')
    } else {
      buttomFloat.classList.remove('show')
    }
  }
  
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

  