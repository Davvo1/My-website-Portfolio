let submit = document.querySelector("#submit");

submit.addEventListener("click", function() {
    preventDefault();
    let getContacted = document.querySelector("#get-contacted");
    getContacted.innerHTML = Ciao;
});