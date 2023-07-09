const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () =>{

    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

    const imagemPersonagemGande = document.querySelector('.personagem-grande');

    const idpersonagem = personagem.attributes.id.value;
    imagemPersonagemGande.src =`./src/imagens/card-${idpersonagem}.png`;

    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
  })
})


