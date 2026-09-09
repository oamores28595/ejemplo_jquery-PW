$(document).ready(function () {

  /* ==========================================================
     BLOQUE 1: Contador con condicionales (evento: clic)
     ========================================================== */

  let contador = 0; // estado que se mantiene entre clics

  // Función pura: dado un número, decide qué clase y mensaje aplican.
  // Separar la lógica de decisión en su propia función facilita
  // probarla y reutilizarla.
  function evaluarEstado(valor) {
    if (valor > 5) {
      return { clase: "estado--alto", texto: "Estado: ¡muy alto! (" + valor + ")" };
    } else if (valor > 0) {
      return { clase: "estado--positivo", texto: "Estado: positivo (" + valor + ")" };
    } else if (valor < 0) {
      return { clase: "estado--negativo", texto: "Estado: negativo (" + valor + ")" };
    } else {
      return { clase: "estado--neutro", texto: "Estado: neutro (0)" };
    }
  }

  // Función que actualiza el DOM en base al estado calculado
  function actualizarContadorUI() {
    $("#contador").text(contador);

    const resultado = evaluarEstado(contador);

    $("#mensajeEstado")
      .removeClass("estado--neutro estado--positivo estado--alto estado--negativo")
      .addClass(resultado.clase)
      .text(resultado.texto);
  }

  // Evento clic: incrementar
  $("#btnIncrementar").on("click", function () {
    contador++;
    actualizarContadorUI();
  });

  // Evento clic: decrementar
  $("#btnDecrementar").on("click", function () {
    contador--;
    actualizarContadorUI();
  });

  actualizarContadorUI(); // pintar el estado inicial


  /* ==========================================================
     BLOQUE 2: Validación con eventos de foco (focus / blur)
     ========================================================== */

  const $inputNombre = $("#nombre");
  const $ayudaNombre = $("#ayudaNombre");

  // Función que valida el texto y regresa un resultado estructurado
  function validarNombre(texto) {
    const limpio = texto.trim();

    if (limpio.length === 0) {
      return { valido: false, mensaje: "Este campo es obligatorio." };
    } else if (limpio.length < 3) {
      return { valido: false, mensaje: "Escribe al menos 3 caracteres." };
    } else {
      return { valido: true, mensaje: "¡Nombre válido!" };
    }
  }

  // Al perder el foco (blur), se valida el contenido
  $inputNombre.on("blur", function () {
    const resultado = validarNombre($(this).val());

    if (resultado.valido) {
      $(this).removeClass("input--invalido").addClass("input--valido");
      $ayudaNombre.removeClass("ayuda--invalido").addClass("ayuda--valido");
    } else {
      $(this).removeClass("input--valido").addClass("input--invalido");
      $ayudaNombre.removeClass("ayuda--valido").addClass("ayuda--invalido");
    }
    $ayudaNombre.text(resultado.mensaje);
  });

  // Al recibir el foco, se limpia el estado visual para no confundir
  $inputNombre.on("focus", function () {
    $(this).removeClass("input--valido input--invalido");
    $ayudaNombre.removeClass("ayuda--valido ayuda--invalido").text("Escribiendo...");
  });


  /* ==========================================================
     BLOQUE 3: Ciclo for + funciones para generar el catálogo
     ========================================================== */

  const productos = [
    { nombre: "Teclado",   precio: 45, stock: 12 },
    { nombre: "Mouse",     precio: 20, stock: 0  },
    { nombre: "Monitor",   precio: 180, stock: 5 },
    { nombre: "Audífonos", precio: 35, stock: 8 },
    { nombre: "Webcam",    precio: 60, stock: 0 }
  ];

  // Función que construye el HTML de una sola tarjeta de producto
  function crearTarjetaProducto(producto) {
    const agotado = producto.stock === 0;
    const claseExtra = agotado ? "producto--agotado" : "";
    const etiqueta = agotado
      ? '<p class="producto__etiqueta">Agotado</p>'
      : "";

    return (
      '<div class="producto ' + claseExtra + '">' +
        '<p class="producto__nombre">' + producto.nombre + "</p>" +
        '<p class="producto__precio">$' + producto.precio + "</p>" +
        etiqueta +
      "</div>"
    );
  }

  // Función que recorre el arreglo con un ciclo for y arma el catálogo completo
  function renderProductos(lista) {
    let html = "";

    for (let i = 0; i < lista.length; i++) {
      html += crearTarjetaProducto(lista[i]);
    }

    $("#listaProductos").html(html);
  }

  renderProductos(productos);


  /* ==========================================================
     BLOQUE 4: Evento de scroll (navbar dinámico + botón flotante)
     ========================================================== */

  const UMBRAL_SCROLL = 80; // píxeles a partir de los cuales cambia el navbar

  function actualizarPorScroll() {
    const posicion = $(window).scrollTop();

    if (posicion > UMBRAL_SCROLL) {
      $("#navbar").addClass("navbar--scrolled");
      $("#scrollStatus").text("Has bajado " + Math.round(posicion) + "px");
      $("#btnArriba").addClass("btn-flotante--visible");
    } else {
      $("#navbar").removeClass("navbar--scrolled");
      $("#scrollStatus").text("Arriba de la página");
      $("#btnArriba").removeClass("btn-flotante--visible");
    }
  }

  $(window).on("scroll", actualizarPorScroll);

  // El botón flotante regresa el scroll al inicio de forma animada
  $("#btnArriba").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

});
