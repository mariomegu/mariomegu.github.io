document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    const allQuestions = document.querySelectorAll('.question');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const allAnswers = document.querySelectorAll('.answer');

            // Cerrar todos los demás bloques
            allAnswers.forEach(ans => {
                if (ans !== answer && ans.style.display === 'block') {
                    ans.style.display = 'none';
                    ans.previousElementSibling.classList.remove('active');
                }
            });

            // Abrir o cerrar el bloque seleccionado
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.classList.remove('active');
            } else {
                answer.style.display = 'block';
                this.classList.add('active');
            }
        });
    });

    function searchAccordion() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        allQuestions.forEach(question => {
            const questionText = question.textContent.toLowerCase();
            if (questionText.includes(input)) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        });
    }

    document.getElementById('searchInput').addEventListener('keyup', searchAccordion);
});
