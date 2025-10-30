

export function getandCreateparticles() {
  const particle = document.createElement("span");
  particle.className ="particulas";
  const contenedor  = document.querySelector(".contenedorParticulas");
  if (!particle) return; 

  for (let i = 0; i < 20; i++) {
    const clone = particle.cloneNode(true);
    const coordenadas = obtenerPosicionDeParticulas();
    clone.style.transform = `translate(${coordenadas[0]}px, ${coordenadas[1]}px)`;
    contenedor.append(clone);
  }
  generarMovimiento();
}

function obtenerPosicionDeParticulas() {
    const ancho = document.documentElement.clientWidth;
    const alto = document.documentElement.clientHeight;
    const positionX = Math.random()*ancho;
    const positionY = Math.random()*alto;
    return [positionX, positionY];
}

export function generarMovimiento() {
  const arraySpan = document.querySelectorAll("span.particulas");

  arraySpan.forEach(element => {
    // Generamos una dirección aleatoria de movimiento
    let dx = (Math.random() - 0.5) * 2; // movimiento horizontal
    let dy = (Math.random() - 0.5) * 2; // movimiento vertical

    // Posición inicial aleatoria si no la tiene
    if (!element.dataset.x) {
      element.dataset.x = Math.random() * window.innerWidth;
      element.dataset.y = Math.random() * window.innerHeight;
    }

    // Convertimos los valores almacenados (string) a números
    let x = parseFloat(element.dataset.x);
    let y = parseFloat(element.dataset.y);

    // Función que actualiza la posición en cada frame
    function mover() {
      x += dx;
      y += dy;

      // Rebote en los bordes de la pantalla
      if (x < 0 || x > window.innerWidth) dx *= -1;
      if (y < 0 || y > window.innerHeight) dy *= -1;

      element.style.transform = `translate(${x}px, ${y}px)`;

      // Guardar la nueva posición
      element.dataset.x = x;
      element.dataset.y = y;

      requestAnimationFrame(mover); // vuelve a ejecutar el movimiento
    }

    mover() ; // inicia la animación
  });
}
