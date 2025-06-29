const form = document.querySelector(".fale-conosco")
const mascaraForm = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraForm.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-280px"
    form.style.transform = "translateX(0)"
    mascaraForm.style.visibility = "hidden"
}