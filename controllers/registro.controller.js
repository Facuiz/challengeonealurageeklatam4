import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const urlImagen = document.querySelector("[data-url]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const categoria = document.querySelector("[data-categoria]").value;  
  const descripcion = document.querySelector("[data-descripcion]").value;
  const precio = document.querySelector("[data-precio]").value;

  clientServices
    .crearCliente( urlImagen,nombre,categoria,descripcion,precio)
    .then(() => {
      window.location.href = "/screens/registro_completado.html";
    })
    .catch((err) => console.log(err));
});
