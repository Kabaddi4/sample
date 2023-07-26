const x = document.getElementById('input_text');
x.addEventListener('blur', function() {
    let span = document.getElementById('msg');
    span.classList.remove('hidden');
})

/*const message = document.getElementById('msg');

message.addEventListener('blur', function() {
    console.log("end input");
});*/
