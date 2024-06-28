document.querySelectorAll('.container-slider').forEach(container => {
    const slider = container.querySelectorAll('.slider');
    const nextBtn = container.querySelector('.next-button');
    const prevBtn = container.querySelector('.prev-button');
    let currentSlide = 0;

    function hideSlider() {
        slider.forEach(item => item.classList.remove('on'));
    }

    function showSlider() {
        slider[currentSlide].classList.add('on');
    }

    function nextSlider() {
        hideSlider();
        if (currentSlide == slider.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlider();
    }

    function prevSlider() {
        hideSlider();
        if (currentSlide === 0) {
            currentSlide = slider.length - 1;
        } else {
            currentSlide--;
        }
        showSlider();
    }

    nextBtn.addEventListener('click', () => nextSlider());
    prevBtn.addEventListener('click', () => prevSlider());
});

document.addEventListener('DOMContentLoaded', () => {
    const datesContainer = document.getElementById('dates');
    const today = new Date();

    for (let i = 1; i < 8; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = date.getDate();
        dateElement.setAttribute('data-date', date.toISOString().split('T')[0]);

        dateElement.addEventListener('click', () => {
            const previouslySelected = document.querySelector('.date.selected');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected');
            }
            dateElement.classList.add('selected');
        });

        datesContainer.appendChild(dateElement);
    }

    document.getElementById('agendar').addEventListener('click', () => {
        const selectedDateElement = document.querySelector('.date.selected');
        if (selectedDateElement) {
            const dateValue = selectedDateElement.getAttribute('data-date');
            sessionStorage.setItem('selectedDate', dateValue);
            alert('Data agendada: ' + dateValue);
        } else {
            alert('Por favor, selecione uma data.');
        }
    });
});


function agendar() {
    window.location.href = 'pagina-de-agendamento.html'; // Substitua pelo link correto
}



