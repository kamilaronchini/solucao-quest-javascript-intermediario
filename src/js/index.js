const itens = document.querySelectorAll('.item')
const botaoClicavel = document.getElementById('botao')

itens.forEach((item) => {
    item.addEventListener('change', () => {

        if (item.value !== "") {
            
            item.classList.remove('borda')
            item.classList.remove('campo-vazio')
            item.nextElementSibling.classList.remove('alerta')
            item.classList.add('campo-preenchido')

        } else {

            item.classList.remove('campo-preenchido')
            item.classList.add('borda')
        }
    })
})

itens.forEach(item => {
    botaoClicavel.addEventListener('click', (event) => {
        event.preventDefault()

        if(item.value === ""){

            item.classList.remove('borda')
            item.classList.remove('campo-preenchido')
            item.classList.add('campo-vazio')
            item.nextElementSibling.classList.add('alerta')
            
        } else {

            item.classList.remove('campo-vazio')
            item.classList.add('campo-preenchido')
        }
    })
})