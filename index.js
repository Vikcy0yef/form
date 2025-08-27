const emailValue = document.querySelector(".input");
const success = document.querySelector(".success");
const emailSucces = document.querySelector(".email-success");
const container = document.querySelector(".container");
const btnSuccess = document.querySelector(".btn-success");
const form = document.querySelector(".form");
// @ts-ignore
const validate = new JustValidate(".form");

validate.addField(".input", [
    {
        rule: "required",
        errorMessage: "Email is required",
    },
    {
        rule: "email",
        errorMessage: "Email is invalid!"
    }
], {
    errorsContainer: ".label-wrap"
}).onSuccess((e) => {
    e.preventDefault();
    const value = emailValue.value.trim();
    emailSucces.textContent = value;
    container.classList.add("is-hidden");
    success.classList.add("is-open");

    const focus = success.querySelector(".title-success") || success.querySelector(".btn-success");
    if (focus) focus.focus();
});

btnSuccess.addEventListener("click", () => {
    success.classList.remove("is-open");
    container.classList.remove("is-hidden");

    emailValue.value = "";
    emailValue.dispatchEvent(new Event("input", {
        bubbles: true
    }));
    emailValue.focus();
})



