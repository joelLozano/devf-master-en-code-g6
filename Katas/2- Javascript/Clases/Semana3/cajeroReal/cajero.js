var loginValido = false;
var cuentas = [
  {
    nombre: "Mali",
    saldo: 200,
    password: "123",
    id: "10A",
  },
  {
    nombre: "Gera",
    saldo: 290,
    password: "l33t",
    id: "10B",
  },
  {
    nombre: "Maui",
    saldo: 67,
    password: "1234",
    id: "10C",
  },
];

function login() {
  const id = document.getElementById("inputUsuario").value;
  const password = document.getElementById("inputContraseña").value;

  const usuario = cuentas.find((cuenta) => {
    return cuenta.id === id;
  });
  console.log(usuario);
  if (usuario.password === password) {
    loginValido = true;
    console.log("Puedes consultar balance, ingresar monto o retirar monto");
    document.getElementById("nombreDeUsario").innerHTML =
      "Bienvenida " + usuario.nombre;
  } else {
    console.log("Tus credenciales son incorrectas, vuelve a intentarlo");
    alert("Credenciales incorrectas");
  }
}

function consultarBalance(id) {
  if (loginValido === true) {
    const usuario = cuentas.find((cuenta) => {
      return cuenta.id === id;
    });
    console.log("Tu saldo es de", usuario.saldo);
  }
}
