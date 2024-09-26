document.addEventListener("DOMContentLoaded", function() {
    const code = countryCode;
    const minTotalLength = code.length + minPhoneLength;
    const maxTotalLength = code.length + maxPhoneLength;

    const inputs = document.querySelectorAll('input[name="phone"]');
    inputs.forEach((input) => {
        input.value = code; 
        input.setAttribute("maxlength", maxTotalLength); 
    });

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        const submitBtn = form.querySelector('button[type="submit"]');
        const inputPhone = form.querySelector('input[name="phone"]'); 

        if (submitBtn) {
            submitBtn.disabled = true;

            if (inputPhone) {
                inputPhone.addEventListener("input", (e) => {
                    const plus = e.target.value.includes("+");
                    const clearStr =
                        (e.target.value[0] === "+" ? "+" : "") +
                        e.target.value.replace(/[+]/g, "");

                  
                    if (plus) {
                        inputPhone.setAttribute("minlength", minTotalLength + 1);
                        inputPhone.setAttribute("maxlength", maxTotalLength + 1);
                    } else {
                        inputPhone.setAttribute("minlength", minTotalLength);
                        inputPhone.setAttribute("maxlength", maxTotalLength);
                    }

                    inputPhone.value = clearStr;

                  
                    if (new RegExp(`^\\${code}[0-9]{${minPhoneLength},${maxPhoneLength}}$`).test(clearStr)) {
                        submitBtn.disabled = false;
                        inputPhone.style.border = "3px solid #00ff24";
                    } else {
                        submitBtn.disabled = true;
                        inputPhone.style.border = "3px solid #ff0049";
                    }
                });
            }
        }
    });
});
