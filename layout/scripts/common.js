// Slider

$('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
});

// Validation form

class Validation {
    constructor() {
        this.validationForm();
    }

    validationForm() {
        const form = document.querySelector('.subscription__form');
        const email = document.querySelector('.subscription__field');
        const message = document.querySelector('.subscription__message');

        form.addEventListener("submit", (event)=> {
            if (email.validity.patternMismatch) {
                message.innerHTML = "Введен некорректный E-mail";
                message.classList.add('subscription__message--error');
            } else if (email.validity.valueMissing) {
                message.innerHTML = "E-mail - обязательное поле";
                message.classList.add('subscription__message--error');
            } else {
                message.innerHTML = "Заявка отправлена!";
                message.classList.remove('subscription__message--error');
            }
        });
    }
}

const validation = new Validation();
