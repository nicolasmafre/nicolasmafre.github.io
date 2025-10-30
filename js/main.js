// Menu mobile
const btn = document.getElementById('menu-btn');
btn && btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(!nav) return;
    const shown = nav.style.display === 'block';
    nav.style.display = shown ? '' : 'block';
});


// Formulário (envio falso — você pode conectar a um serviço como Formspree)
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
if(form){
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        // Exemplo: coletar dados e enviar via fetch para uma API
        formMsg.textContent = 'Mensagem enviada (simulada). Obrigado!';
        form.reset();
    });
}


// Atualiza o ano do rodapé
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();