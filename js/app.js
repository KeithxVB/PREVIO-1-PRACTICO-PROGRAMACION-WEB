
const APP_NAME = "TechBlog Interactivo";
let visitas = parseInt(localStorage.getItem("visitas")) || 0;

const saludoEl = document.getElementById("saludo");
if (saludoEl) {
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "Buenos días";
  } else if (hora < 18) {
    mensaje = "Buenas tardes";
  } else {
    mensaje = "Buenas noches";
  }

  saludoEl.innerHTML = `<h2>${mensaje}, bienvenido a <strong>${APP_NAME}</strong> 👋</h2>`;
}


const bienvenida = (nombre) => {
  return `¡Hola ${nombre}! Bienvenido a ${APP_NAME}`;
};

console.log(bienvenida("Usuario"));

const btnVisitas = document.getElementById("btnVisitas");
const contadorEl = document.getElementById("contador");

if (btnVisitas && contadorEl) {
  contadorEl.innerText = visitas;

  btnVisitas.addEventListener("click", () => {
    visitas++;
    contadorEl.innerText = visitas;
    localStorage.setItem("visitas", visitas);
  });
}


const textoEl = document.getElementById("texto");

const btnRojo = document.getElementById("btnRojo");
const btnVerde = document.getElementById("btnVerde");
const btnAzul = document.getElementById("btnAzul");

if (textoEl) {
  btnRojo?.addEventListener("click", () => (textoEl.style.color = "red"));
  btnVerde?.addEventListener("click", () => (textoEl.style.color = "green"));
  btnAzul?.addEventListener("click", () => (textoEl.style.color = "blue"));
}


const nuevaNota = document.getElementById("nuevaNota");
const btnAgregarNota = document.getElementById("agregarNota");
const listaNotas = document.getElementById("listaNotas");

if (btnAgregarNota && nuevaNota && listaNotas) {
  btnAgregarNota.addEventListener("click", () => {
    const texto = nuevaNota.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.innerText = texto;

    listaNotas.prepend(li); 
    nuevaNota.value = "";
  });
}


const formContacto = document.getElementById("formContacto");

if (formContacto) {
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    formContacto.querySelectorAll(".error").forEach((el) => el.remove());

    let valido = true;

    const email = formContacto.querySelector('input[name="correo"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailRegex.test(email.value)) {
      mostrarError(email, "Ingrese un correo válido");
      valido = false;
    }

    const mensaje = formContacto.querySelector('textarea[name="mensaje"]');
    if (!mensaje.value || mensaje.value.length < 10) {
      mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres");
      valido = false;
    }

    const tema = formContacto.querySelector('select[name="tema"]');
    if (!tema.value) {
      mostrarError(tema, "Debe seleccionar un tema");
      valido = false;
    }

    if (valido) {
      alert("Formulario enviado correctamente ✅");
      formContacto.reset();
    }
  });
}

function mostrarError(campo, mensaje) {
  const error = document.createElement("p");
  error.innerText = mensaje;
  error.classList.add("error");
  error.style.color = "red";
  error.style.fontSize = "0.9em";
  campo.insertAdjacentElement("afterend", error);
}
