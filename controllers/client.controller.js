import { clientServices } from "../service/client-service.js";

//backticks
const crearNuevaLinea = (urlImagen,nombre,categoria,precio,descripcion, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
    <img src="${urlImagen}" width="80" height="80" />
    
    </td>
    
    <td>${nombre}</td>
    <td>${categoria}</td>    
    <td>${descripcion}</td>
    <td> $ ${precio}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
  const id = btn.id;
  const confirmacion = confirm("¿Desea eliminar a este cliente?");
  if (confirmacion) {
    clientServices
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  }
});

  return linea;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ urlImagen,nombre,categoria,precio,descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(urlImagen,nombre,categoria,precio,descripcion, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
