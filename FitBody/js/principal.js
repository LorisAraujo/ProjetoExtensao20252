const tipos = document.querySelectorAll('.tipo');
const inputTipo = document.getElementById('tipoSelecionado');
const form = document.getElementById('form-treino');
const historico = document.querySelector('#historico tbody');

    tipos.forEach(tipo => {
        tipo.addEventListener('click', () => {
            tipos.forEach(t => t.classList.remove('selecionado'));
            tipo.classList.add('selecionado');
            inputTipo.value = tipo.dataset.tipo;
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const tipo = inputTipo.value;
        const duracao = document.getElementById('duracao').value;
        const obs = document.getElementById('obs').value;

        if (!tipo) {
            alert('Selecione um tipo de treino!');
            return;
        }

        const data = new Date().toLocaleDateString('pt-BR');
        const novaLinha = `
            <tr>
                <td>${data}</td>
                <td>${tipo}</td>
                <td>${duracao}</td>
                <td>${obs}</td>
            </tr>
        `;

        historico.innerHTML += novaLinha;
        form.reset();
        tipos.forEach(t => t.classList.remove('selecionado'));
        inputTipo.value = '';
    });

lucide.createIcons();