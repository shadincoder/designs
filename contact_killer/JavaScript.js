document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            var emailInput = document.querySelector('input[name="email"]');
            var passwordInput = document.querySelector('input[name="password"]');
            var acceptNCheckbox = document.querySelector('#acceptN');

            if (!isValidEmail(emailInput.value)) {
                document.getElementById('vE').style.color = "red";
                document.getElementById('vE').innerHTML = 'Please enter a valid email address.';
                event.preventDefault();
                return;
            }

            if (passwordInput.value.length < 6) {
                document.getElementById('vP').style.color = "red";
                document.getElementById('vP').innerHTML= 'Password must be at least 6 characters long';
                event.preventDefault();
                return;
            }
        });

        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });