const buttons = document.getElementsByTagName("input");
const passwords = Array.from(buttons).filter(inp => inp.getAttribute("type") === 'password' );
const submit = document.getElementsByTagName("button")[0];
const invalidSpan = document.getElementById("invalid-password");

submit.onclick = function() {
    if(passwords[0].value === passwords[1].value) {
        passwords[0].classList.remove("invalid");
        passwords[1].classList.remove("invalid");
        invalidSpan.innerText = ""
    } else {
        passwords[0].classList.add("invalid");
        passwords[1].classList.add("invalid");
        invalidSpan.innerText = "* Passwords do not match"
    }
}