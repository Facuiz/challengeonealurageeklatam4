const nuevoProducto=(name,imagenUrl,price,id)=>{
    const card = document.createElement("div");
    const contenido = `
    <div class="div-producto">
    <img class="url__imagen" alt="vaso star war" src="${imagenUrl}" />
    <div class="product__contenido">
        <h4 class="product__titulo">${name}</h4>
        <p class="product__descripcion">$ ${price}</p>
        <button class="product__boton">Ver producto</button>
    </div>
</div>
    `
    card.innerHTML = contenido
    card.dataset.id = id
    return card
};

const productos = document.querySelector('[data-product]')
