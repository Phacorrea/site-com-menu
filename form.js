// form.js
// Handles contact form submission and validation

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const button = form.querySelector('button');
    const msgEl = document.getElementById('form-message');

    function showMessage(text, type) {
        msgEl.textContent = text;
        msgEl.className = 'message ' + type;
        msgEl.style.display = 'block';
    }

    function clearMessage() {
        msgEl.textContent = '';
        msgEl.className = 'message';
        msgEl.style.display = 'none';
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearMessage();

        const nome = form.querySelector('[name="nome"]').value.trim();
        const email = form.querySelector('[name="_replyto"]').value.trim();
        const mensagem = form.querySelector('[name="mensagem"]').value.trim();

        if (!nome || !email || !mensagem) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('E-mail inválido.', 'error');
            return;
        }

        button.disabled = true;
        button.textContent = 'Enviando...';

        const data = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                form.reset();
                showMessage('Mensagem enviada com sucesso!', 'success');
            } else {
                showMessage('Não foi possível enviar sua mensagem.', 'error');
            }
        }).catch(function () {
            showMessage('Erro de rede. Tente novamente.', 'error');
        }).finally(function () {
            button.disabled = false;
            button.textContent = 'Enviar';
        });
    });
});
