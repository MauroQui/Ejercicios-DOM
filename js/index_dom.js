import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busqueda.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/lofi-alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "August 02, 2026", "Feliz Cumpleaños Mauro! 😎👍🎈");
  scrollTopButton(".scroll-top-btn");
  
  responsiveMedia(
    "youtube",
    "(min-width: 720px)",
    `<a href="https://www.youtube.com/watch?v=_c26Fyi7RFA&list=PLvq-jIkSeTUbpfewvbKLhHctdkgadAy-K" target="_blank" rel="noopenner">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/_c26Fyi7RFA?si=-vL3pgM7HiTOMqJl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  
  responsiveMedia(
    "gmaps",
    "(min-width: 720px)",
    `<a href="https://maps.app.goo.gl/7uXfrmALQs6oVrt89" target="_blank" rel="noopenner">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.586368532222!2d-76.5453033!3d3.4502808999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a67972954e17%3A0x7a4c9ebc2e3d386b!2sMuseo%20La%20Tertulia!5e0!3m2!1ses-419!2sco!4v1738806709980!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webCam("webcam");
  
  getGeolocation("geolocation");

  searchFilters(".card-filter", ".card");

  draw("#winner-btn", ".player")
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();
