 document.addEventListener("DOMContentLoaded", function() {
        var htmlLang = document.documentElement.lang.split('-');
        var lang = htmlLang[0];
        var country = htmlLang[1];
document.querySelector('input[name="name"]').setAttribute("autocomplete", "name");
document.querySelector('input[name="name"]').setAttribute("required", "required");
document.querySelector('input[name="name"]').setAttribute("minlength", "3");

document.querySelector('input[name="phone"]').setAttribute("autocomplete", "tel");
document.querySelector('input[name="phone"]').setAttribute("required", "required");
document.querySelector('input[name="phone"]').setAttribute("type", "tel");
        const input = document.querySelector("#phone");
        const iti = window.intlTelInput(input, {
            initialCountry: country, 
            allowDropdown: false,
            nationalMode: true, 
            separateDialCode: true,
            autoPlaceholder: "polite",
            formatOnDisplay: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js"
        });

        input.addEventListener('input', () => {
            input.setCustomValidity('');
            if (!iti.isValidNumber()) {
                input.setCustomValidity('Wrong number');
            }
        });

        const form = document.querySelector("#forma");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
        if (iti.isValidNumber()) {
            form.submit(); 
        } 
    });
});
