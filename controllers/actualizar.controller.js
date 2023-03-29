import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        window.location.href = "/screens/error.html"
    }
    
    const urlImagen = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const categoria = document.querySelector("[data-categoria]");
    const descripcion= document.querySelector("[data-descripcion]");
    const precio = document.querySelector("[data-precio]");
   
   
    clientServices.detalleProducto(id).then((perfil) => {
         urlImagen.value = perfil.urlImagen;
        nombre.value = perfil.nombre;
         categoria.value = perfil.categoria;
        descripcion.value = perfil.descripcion;
         precio.value = perfil.precio;
     });

};
obtenerInformacion(); 

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlImagen = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descripcion= document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    console.log(urlImagen,nombre,categoria,descripcion,precio);

    clientServices.actualizarProducto(urlImagen,nombre,categoria,descripcion,precio,id);
    
    clientServices.actualizarProducto( urlImagen,nombre,categoria,descripcion,precio)
    .then(() => {
      window.location.href = "/screens/registro_completado.html";
    })
    .catch((err) => console.log(err));
});