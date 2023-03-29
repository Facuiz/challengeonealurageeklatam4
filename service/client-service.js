const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (urlImagen, nombre, categoria, descripcion, precio) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({urlImagen,nombre,categoria,descripcion,precio, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}; 

const actualizarProducto = (urlImagen,nombre,categoria,descripcion,precio, id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify({urlImagen,nombre,categoria,descripcion,precio})
  })
  .then( respuesta => console.log(respuesta))
  .catch(err => console.log(err));
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleProducto,
  actualizarProducto,
};
