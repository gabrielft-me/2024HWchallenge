document.addEventListener('DOMContentLoaded', function() {
    // Máscara de telefone
    var telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function(e) {
        var x = e.target.value.replace(/\D/g, '').match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (!x) {
            e.target.value = '';
        } 
        else {
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }

        // Validação em tempo real do número de telefone
        validarTelefone();
    });

    function validarTelefone() {
        var telefone = telefoneInput.value.replace(/\D/g, '');
        if (telefone.length === 11) {
            telefoneInput.classList.remove('is-invalid');
            telefoneInput.classList.add('is-valid');
        } else {
            telefoneInput.classList.remove('is-valid');
            telefoneInput.classList.add('is-invalid');
        }
    }

    // Validação e submissão do formulário
    var form = document.getElementById('formCadastro');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var nomeInput = document.getElementById('nome');
        var emailInput = document.getElementById('email');
        var nome = nomeInput.value.trim();
        var email = emailInput.value.trim();
        var telefone = telefoneInput.value.replace(/\D/g, '');

        var formValido = true;

        // Validação do nome
        if (nome === '') {
            nomeInput.classList.add('is-invalid');
            formValido = false;
        } else {
            nomeInput.classList.remove('is-invalid');
            nomeInput.classList.add('is-valid');
        }

        // Validação do e-mail
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add('is-invalid');
            formValido = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        // Validação do telefone
        if (telefone.length !== 11) {
            telefoneInput.classList.add('is-invalid');
            formValido = false;
        } else {
            telefoneInput.classList.remove('is-invalid');
            telefoneInput.classList.add('is-valid');
        }

        if (!formValido) {
            // Se algum campo estiver inválido, não prosseguir
            return;
        }

        // Simulação de envio bem-sucedido
        document.getElementById('lead-form').style.display = 'none';
        document.getElementById('produto-page').style.display = 'block';
        document.getElementById('userNome').textContent = nome;
    });

    // Sticky Header com animação
    var header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Galeria de imagens com modal
    var galeriaItems = document.querySelectorAll('.galeria-item');
    var galeriaModal = new bootstrap.Modal(document.getElementById('galeriaModal'));
    var galeriaModalImg = document.getElementById('galeriaModalImg');
    var currentImageIndex = 0;
    var galeriaImages = Array.from(galeriaItems).map(function(item) {
        return item.src;
    });

    galeriaItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            galeriaModalImg.src = this.src;
            galeriaModal.show();
            currentImageIndex = index;
        });
    });

    // Navegação no modal da galeria
    document.getElementById('galeriaModal').addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : galeriaImages.length - 1;
            galeriaModalImg.src = galeriaImages[currentImageIndex];
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex < galeriaImages.length - 1) ? currentImageIndex + 1 : 0;
            galeriaModalImg.src = galeriaImages[currentImageIndex];
        }
    });

    // Timer Countdown
    var countdownTime = new Date().getTime() + 10 * 60 * 1000; // 10 minutos a partir de agora
    var timerElement = document.getElementById('timer');
    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownTime - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.textContent = minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Promoção Encerrada";
        }
    }, 1000);

    // Depoimentos - Slider manual com touch
    var carouselDepoimentos = document.getElementById('carouselDepoimentos');
    var carousel = new bootstrap.Carousel(carouselDepoimentos, {
        interval: 3000,
        pause: 'hover',
        ride: 'carousel' 

    });

    var touchStartX = 0;
    var touchEndX = 0;

    carouselDepoimentos.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselDepoimentos.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            carousel.next();
        }
        if (touchEndX > touchStartX) {
            carousel.prev();
        }
    }
});
