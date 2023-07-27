const input = document.getElementById("text");
const output = document.getElementById('msg');

input.addEventListener("blur", function() {
    output.textContent = input.value;
})
