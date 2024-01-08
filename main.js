let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("contraseña");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let demorasPago = document.getElementById("demorasPago");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let ordenLlegada = document.getElementById("ordenLlegada");
let demorasCargas = document.getElementById("demorasCargas");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Buenas! 👋🏼
⚠️ CONSULTE SIEMPRE EL CBU ANTES DE TRANSFERIR ⚠️

💎 MÍNIMO DE CARGA $500 💎

*DATOS DE LA CUENTA*
🔹*Nombre:* ${inputNombre}
🔹*CBU:* ${inputCBU}
🔹*ALIAS:* ${inputAlias}

ENVIAR:
📤COMPROBANTE
📤USUARIO de la plataforma

🎰Para comenzar a jugar ingresa en: http://citygame.casino`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `🃏*USUARIO REGISTRADO*🃏

*TU USUARIO ES:* ${user}
*CONTRASEÑA:* bet123

🎰Para comenzar a jugar ingresa en: http://citygame.casino

⚠️ CONSULTAR CBU PARA CARGAR TUS FICHAS 📲`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `👋🏼 Hola! Bienvenido/a a DYNASTY CABA 💎
 
🔹 MÍNIMO DE CARGA: $500
🔹 MÍNIMO DE RETIRO: $1.500

🎰 Para comenzar a jugar con nosotros te pido *NOMBRE* y *APELLIDO* así podemos generarte un usuario! 📲️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

info.addEventListener("click", () => {
  const texto = `💎 Somos DYNASTY CABA 💎

Tu casino ONLINE de confianza 🔥
En nuestra plataforma podes encontrar los mismos juegos que en un casino físico, sólo que podrás jugarlos desde la comodidad en donde estés 📲

¿Cómo hago para jugar?🎰
Te creamos un usuario, nos solicitas nuestro CBU para cargar el dinero que quieras jugar, corroboramos que ingrese y listo 🫡
Te acreditamos las fichas al instante.🔥

 🔹MÍNIMO DE CARGA: $500
🔹 MÍNIMO DE RETIRO: $1.500

💠 Para generar un usuario responda este mensaje con su Nombre y Apellido 💠`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `💵 Para retirar su dinero 💵
necesitamos los siguientes datos:

➡️ Usuario:
➡️ Nombre que figura en su cuenta bancaria:
➡️ Monto que desea retirar:
➡️ CBU o ALIAS:

🔹 MINIMO DE RETIRO: $1.500

Una vez que complete los datos, le retiramos las fichas y lo enviamos al área de pagos para que le abonen su premio.🫡💰

🙏🏼 LE PEDIMOS POR FAVOR, SEA PACIENTE Y AGUARDE SU TURNO`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

exitos.addEventListener("click", () => {
  const texto = `💰💎FICHAS RETIRADAS💎💰

Sus fichas ya fueron retiradas y su premio fue enviado al sector de pagos 🫡

Ahora se encuentra en fila para ser abonado 💸🏦

⚠️ NO responda este mensaje porque pasará a estar último/a en la fila de premios, POR FAVOR AGUARDE SU TURNO. 🙏🏻

💠 MUCHAS GRACIAS 💠`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `🎉💰TU PREMIO YA FUE ENVIADO 🏆🎉

✨Felicitaciones!🍾 
Gracias por elegirnos 🎰
Que lo disfrutes mucho ☺️

Muchas gracias
💎DYNASTY CABA💎`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `📲 SU CONTRASEÑA FUE RESTABLECIDA 💬

Pasos a seguir:
🔹Recargue la página 
🔹Copie y pegue los siguientes datos (así no tenemos errores de tipeo) 

⚠️ De esta manera evitamos que se bloquee su cuenta 🫡`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `⚠️ Su transferencia aún no ingresó ⚠️

las transferencias pueden contar con demoras. ⌛️

Tenga en cuenta que si el dinero no se acredita en nuestra cuenta bancaria, no tenemos autorización para cargarle las fichas 🎰 

🔹 Por favor sea paciente y aguarde🙏🏻
En cuanto llegue la transferencia, sus fichas serán cargadas 🔹`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `🔹Estimado cliente🔹
Por inconvenientes con la plataforma le solicitamos por favor que se comunique con el soporte de la página 🙏🏻
-Debe ingresar al cuadro de diálogo que figura en la parte superior derecha de la misma. 📲💬
Nosotros no tenemos acceso a la configuración de las máquinas. 🎰`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasPago.addEventListener("click", () => {
  const texto = `🔹Estimado cliente🔹
El sector de pagos se encuentra con demoras para realizar los mismos. ⏳

-Le pedimos por favor que NO ENVÍE MENSAJES para poder seguir en fila y recibir en la brevedad su premio. 🫡💰-

💠 Si desea cargar nuevamente, puede hacerlo descontando fichas de su premio. 💠

🙏🏻 Gracias y disculpe las molestias ocasionadas.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitoUsuario.addEventListener("click", () => {
  const texto = `Le pedimos por favor🙏🏻, debajo de cada comprobante enviado nos adjunte su nombre de USUARIO. 💬
Ya que, sin el mismo, NO podremos cargarle las fichas 🎰
Muchas gracias 🔥`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `💰RETIROS💰
-Las 24 hrs
-A partir de $1500
-No hay máximo de retiro por día 

⏱️DEMORA EN PAGOS⏳
-depende del monto a retirar 
-depende de la cantidad de gente en fila para retirar su premio 
-depende del saldo disponible con el que cuente la banca de pagos. 

Si al momento del retiro contamos con demora, lo estaremos notificando previamente 🫡

🏦FORMA DE PAGO💸
-en su totalidad 
-en cuotas (depende del monto a pagar y la carga realizada anteriormente)`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

ordenLlegada.addEventListener("click", () => {
  const texto = `🔹Estimado cliente🔹
Le informamos que el dinero enviado al siguiente CBU NO corresponde con la cuenta que estamos trabajando en este momento.

Le pedimos por favor que SIEMPRE antes de realizar un pago CONSULTE EL CBU VIGENTE.

-Solicitaremos que verifique que su dinero se haya reintegrado de vuelta a su cuenta, pero debe aguardar ya que esto puede tomar más tiempo de lo habitual ⏱️-

⚠️ Por favor, le pedimos que sea cuidadoso y responsable al momento de transferir ya que si no podemos acceder a la cuenta, usted pierde su dinero ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasCargas.addEventListener("click", () => {
  const texto = `⚠️ ATENCIÓN ⚠️
-MERCADO PAGO TIENE DEMORAS-

Momentáneamente la aplicación MERCADO PAGO se encuentra con demoras para realizar las transferencias.
Si usted envío dinero desde la aplicación le pedimos paciencia hasta que ingrese el pago.
No cargamos fichas hasta que ingrese el mismo.
⚠️ Sin excepción ⚠️
Muchas gracias`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
