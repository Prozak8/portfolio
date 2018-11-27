function openModal(index) {
    let modal = document.getElementById(`myModal_${index}`)
    let span = document.getElementsByClassName("close")[index];   
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
