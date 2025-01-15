const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link=>{
  if(link.herf.includes(`${activePage}`)){
    link.classList.add('active');
  }
})