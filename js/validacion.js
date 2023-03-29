/*const username = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');
button.addEventListener('click',(e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
})
*/
function validar(){
    let user, password
    user = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (user == "admin@" && password=="admin")
    {
        window.location = "./screens/lista_producto.html";
    }
    else{
        alert("Datos Incorrectos")
    }

    
}
