var htmlLang = document.documentElement.lang.split('-');
var lang = htmlLang[0];
var country = htmlLang[1];
$('input[name="name"]').attr("autocomplete", "name").attr("required", "required").attr("minlength", "3");
$('input[name="phone"]').attr("autocomplete", "tel").attr("required", "required").attr("type", "tel");
$('input[name="phone"]').each(function() {
    var iti = window.intlTelInput(this, {
        initialCountry: country,
        allowDropdown: false,
        nationalMode: true,
        separateDialCode: true,
        autoPlaceholder: 'polite',
        formatOnDisplay: true,
        hiddenInput: 'phone',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js'
    });
    this.addEventListener('input', ()=> {
        this.setCustomValidity('');
        if (!iti.isValidNumber()) this.setCustomValidity('Wrong number');
    });
    var iso2 = iti.getSelectedCountryData().iso2;
    this.addEventListener('countrychange', ()=> {
        iti.setCountry(iso2);
    });
});
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.querySelector('input[name="name"]').value.trim();
    if (name === '') {
        e.preventDefault(); 
        alert('Please fill in all required fields.');
        return;
    }
    if (name.length < 3) {
        e.preventDefault();
        alert('Name must be at least 3 characters long.');
        return;
    }
});
