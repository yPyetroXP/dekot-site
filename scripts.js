document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          
          // Esconde todos os conteúdos
          const conteudos = document.querySelectorAll(".conteudo");
          conteudos.forEach(conteudo => {
              conteudo.style.display = "none";
          });

          // Exibe apenas o conteúdo da aba clicada
          targetSection.style.display = "block";
      });
  });
});
