"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "573122919236";
const waReady = /^\d{8,15}$/.test(WHATSAPP_NUMBER);

const routes = [
  { from: "Origen por confirmar", to: "Destino por confirmar", time: "Horario por confirmar", price: "Tarifa por confirmar" },
  { from: "Origen por confirmar", to: "Destino por confirmar", time: "Horario por confirmar", price: "Tarifa por confirmar" },
  { from: "Origen por confirmar", to: "Destino por confirmar", time: "Horario por confirmar", price: "Tarifa por confirmar" },
];

const faqs = [
  { q: "¿Cómo solicito una cotización?", a: "Completa los datos de tu viaje en el formulario y continúa por WhatsApp. Nuestro equipo confirmará la tarifa y los detalles contigo." },
  { q: "¿Qué información debo compartir?", a: "Indica origen, destino, fecha, hora, cantidad de pasajeros y equipaje para que podamos orientarte mejor." },
  { q: "¿Las rutas y tarifas ya están disponibles?", a: "Estamos confirmando rutas, horarios y tarifas. La información se publicará aquí cuando esté verificada; mientras tanto, puedes consultarnos por WhatsApp." },
  { q: "¿Puedo cancelar o cambiar mi viaje?", a: "Las condiciones de cambio y cancelación deben confirmarse al cotizar. Solicita los términos aplicables a tu viaje antes de confirmar tu reserva." },
];

function whatsappUrl(message: string) {
  return `https://wa.me/${waReady ? WHATSAPP_NUMBER : ""}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ origin: "", destination: "", date: "", time: "", passengers: "1", luggage: "" });
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formNotice, setFormNotice] = useState("");

  function requestQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hola, quiero solicitar una cotización de viaje.",
      `Origen: ${form.origin || "Por confirmar"}`,
      `Destino: ${form.destination || "Por confirmar"}`,
      `Fecha: ${form.date || "Por confirmar"}`,
      `Hora: ${form.time || "Por confirmar"}`,
      `Pasajeros: ${form.passengers}`,
      `Equipaje: ${form.luggage || "Por confirmar"}`,
    ].join("\n");
    if (!waReady) {
      setFormNotice("Tu consulta está lista, pero el número oficial de WhatsApp aún no está configurado. Por favor, contáctanos cuando se publique el canal oficial.");
      return;
    }
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> Atención personalizada para planear tu próximo viaje <a href="#cotizar">Hablemos <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Driveo Car, inicio"><span className="brand-symbol">d<span>.</span></span><span className="brand-name">driveo<span>car</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegación principal">
          <a onClick={() => setMenuOpen(false)} href="#servicios">Servicios</a><a onClick={() => setMenuOpen(false)} href="#rutas">Rutas</a><a onClick={() => setMenuOpen(false)} href="#nosotros">Nosotros</a><a onClick={() => setMenuOpen(false)} href="#faq">Preguntas frecuentes</a>
          <a className="nav-cta" href="#cotizar">Planea tu viaje <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true"><div className="photo-grain" /><div className="sun-disc" /><div className="road-line road-one" /><div className="road-line road-two" /><div className="road-horizon" /><div className="hero-photo-caption"><span>EL CAMINO TAMBIÉN ES PARTE DEL VIAJE</span><span>01 — 03</span></div></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> VIAJAR, A TU MANERA</div>
          <h1>Tu próximo<br />destino, <em>más</em><br /><em>cerca.</em></h1>
          <p className="hero-copy">Conectamos ciudades y personas con una forma de viajar más cómoda, cercana y pensada alrededor de ti.</p>
          <div className="hero-actions"><a className="button button-dark" href="#cotizar">Planea tu viaje <ArrowRight size={16} /></a><a className="text-link" href="#servicios">Conoce Driveo <ArrowDown size={15} /></a></div>
          <div className="hero-footnote"><span className="footnote-icon"><MapPin size={15} /></span><span>Viajes interurbanos<br /><b>Hechos para llegar mejor.</b></span></div>
        </div>
        <a className="scroll-note" href="#servicios"><span>DESCUBRE DRIVEo</span><ArrowDown size={14} /></a>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="trust-strip" aria-label="Ventajas de viajar con Driveo"><div><span className="trust-icon"><ShieldCheck size={19} /></span><p>Viaja con confianza<small>Atención cercana en cada paso</small></p></div><div><span className="trust-icon"><Clock3 size={19} /></span><p>A tu ritmo<small>Planea un viaje que se adapte a ti</small></p></div><div><span className="trust-icon"><MessageCircle size={19} /></span><p>Siempre en contacto<small>Te atendemos directamente</small></p></div><span className="trust-aside">BUEN VIAJE. BUENA COMPAÑÍA.</span></section>

      <section className="section services-section" id="servicios"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> LO IMPORTANTE ES EL VIAJE</div><h2>Una mejor forma<br />de <em>llegar.</em></h2></div><p className="section-intro">Cada viaje tiene su razón. Nosotros ponemos el cuidado, la atención y el acompañamiento para que disfrutes el trayecto tanto como el destino.</p></div>
        <div className="service-grid"><article className="service-card service-card-featured"><div className="service-number">01 / VIAJES</div><div className="service-illustration"><div className="mini-road"><div className="mini-road-dash" /></div><span className="mini-sun" /><MapPin className="mini-pin" size={28} /></div><h3>Entre ciudades,<br />más cerca.</h3><p>Traslados interurbanos con atención personal desde que empiezas a planear.</p><a href="#cotizar" className="circle-link" aria-label="Solicitar un traslado"><ArrowUpRight size={17} /></a></article>
        <article className="service-card"><div className="service-number">02 / A TU MEDIDA</div><div className="service-illustration illustration-sand"><UsersRound size={30} strokeWidth={1.2} /><span className="illustration-label">TU VIAJE<br />COMIENZA AQUÍ</span></div><h3>Un viaje<br />pensado para ti.</h3><p>Cuéntanos qué necesitas y te ayudamos a encontrar la mejor opción.</p><a href="#cotizar" className="circle-link" aria-label="Personalizar cotización"><ArrowUpRight size={17} /></a></article>
        <article className="service-card"><div className="service-number">03 / EN CONTACTO</div><div className="service-illustration illustration-green"><MessageCircle size={30} strokeWidth={1.2} /><span className="chat-dots">•••</span></div><h3>Personas que<br />sí responden.</h3><p>Resuelve tus dudas directamente con nuestro equipo, sin complicaciones.</p><a href="#cotizar" className="circle-link" aria-label="Contactar a Driveo"><ArrowUpRight size={17} /></a></article></div>
      </section>

      <section className="quote-banner" id="nosotros"><div className="quote-mark">“</div><div className="quote-content"><div className="eyebrow"><span className="eyebrow-line" /> UNA IDEA SENCILLA</div><blockquote>Creemos que llegar<br />bien <em>lo cambia todo.</em></blockquote><p>Por eso queremos hacer del transporte entre ciudades una experiencia más humana: con comunicación clara, atención cercana y viajes pensados para personas reales.</p><a className="text-link text-link-light" href="#contacto">Conoce nuestra manera de viajar <ArrowRight size={15} /></a></div><div className="quote-seal"><Sparkles size={20} /><span>MUCHO MÁS<br />QUE LLEGAR</span></div><div className="quote-decoration" aria-hidden="true">d.</div></section>

      <section className="section routes-section" id="rutas"><div className="section-heading routes-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> DESTINOS QUE NOS ACERCAN</div><h2>El camino<br />empieza <em>aquí.</em></h2></div><div className="route-heading-aside"><p>Estamos preparando nuestras rutas. Consulta con nuestro equipo para conocer disponibilidad y opciones para tu viaje.</p><a href="#cotizar" className="text-link">Consultar una ruta <ArrowRight size={15} /></a></div></div>
        <div className="route-list">{routes.map((route, i) => <article className="route-row" key={i}><span className="route-index">0{i + 1}</span><span className="route-origin">{route.from}</span><MoveRight className="route-arrow" size={20} /><span className="route-destination">{route.to}</span><span className="route-time"><Clock3 size={15} /> {route.time}</span><span className="route-price">{route.price}</span><a href="#cotizar" className="route-link" aria-label="Consultar esta ruta"><ArrowUpRight size={18} /></a></article>)}</div>
        <p className="pending-note"><span className="pending-dot" /> Rutas, horarios y tarifas se publicarán cuando estén confirmados.</p>
      </section>

      <section className="booking-section" id="cotizar"><div className="booking-left"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> EMPIEZA CON UN HOLA</div><h2>El viaje de tus<br />planes <em>empieza aquí.</em></h2><p>Cuéntanos un poco de tu viaje. Nuestro equipo te ayudará a encontrar la mejor opción y te confirmará los detalles por WhatsApp.</p><div className="booking-promise"><span><Check size={15} /></span> Sin pagos en línea. Solo conversación real.</div><div className="booking-ornament" aria-hidden="true">D.</div></div>
        <form className="booking-form" onSubmit={requestQuote}><div className="form-topline"><span>CUÉNTANOS TU PLAN</span><span>01 — 06</span></div><div className="form-grid"><label>¿Desde dónde sales?<input required placeholder="Tu ciudad de origen" value={form.origin} onChange={e => setForm({ ...form, origin: e.target.value })} /></label><label>¿A dónde vas?<input required placeholder="Tu ciudad de destino" value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })} /></label><label>Fecha del viaje<input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label><label>Hora aproximada<input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} /></label><label>Pasajeros<select value={form.passengers} onChange={e => setForm({ ...form, passengers: e.target.value })}><option value="1">1 pasajero</option><option value="2">2 pasajeros</option><option value="3">3 pasajeros</option><option value="4">4 pasajeros</option><option value="5+">5 o más</option></select><ChevronDown className="select-chevron" size={15} /></label><label>Equipaje<input placeholder="Cuéntanos qué llevas" value={form.luggage} onChange={e => setForm({ ...form, luggage: e.target.value })} /></label></div><button className="button button-olive form-submit" type="submit">{waReady ? "Continuar por WhatsApp" : "Preparar mi consulta"}<ArrowRight size={16} /></button>{!waReady && <p className="setup-note" role="status">{formNotice || "WhatsApp pendiente de configuración. Podrás enviar tu consulta cuando se añada el número oficial."}</p>}<p className="privacy-note">Al continuar, aceptas que usemos estos datos para responder tu solicitud. <a href="#legal">Conoce más</a>.</p></form>
      </section>

      <section className="section faq-section" id="faq"><div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> ANTES DE SALIR</div><h2>Lo que quieres<br />saber, <em>sin vueltas.</em></h2><p>¿No encuentras tu respuesta? Escríbenos y lo vemos contigo.</p><a className="text-link" href="#contacto">Haznos una pregunta <ArrowRight size={15} /></a></div><div className="faq-list">{faqs.map((item, i) => <article className={`faq-item ${faqOpen === i ? "faq-active" : ""}`} key={item.q}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span className="faq-num">0{i + 1}</span><span>{item.q}</span><span className="faq-toggle">{faqOpen === i ? <X size={16} /> : <ArrowDown size={16} />}</span></button>{faqOpen === i && <p>{item.a}</p>}</article>)}</div></section>

      <section className="contact-band" id="contacto"><div className="contact-label"><span className="contact-dot" /> ESTAMOS PARA AYUDARTE</div><h2>¿Hablamos de<br />tu <em>próximo viaje?</em></h2><p>Una pregunta, una idea o un destino en mente. Aquí estamos.</p><a className="button button-dark" href="#cotizar">Escríbenos <ArrowRight size={16} /></a><span className="contact-scribble" aria-hidden="true">hola!</span></section>

      <footer className="site-footer" id="legal"><div className="footer-main"><div className="footer-brand"><a className="brand brand-footer" href="#inicio"><span className="brand-symbol">d<span>.</span></span><span className="brand-name">driveo<span>car</span></span></a><p>El camino también<br />es parte del viaje.</p></div><div className="footer-col"><span>EXPLORA</span><a href="#servicios">Servicios</a><a href="#rutas">Rutas</a><a href="#nosotros">Sobre nosotros</a><a href="#faq">Preguntas frecuentes</a></div><div className="footer-col"><span>HABLEMOS</span><a href="#cotizar">Solicita una cotización</a><a href="#contacto">Contacto</a><a href={whatsappUrl("Hola, quiero información sobre un viaje con Driveo Car.")} target="_blank" rel="noreferrer">WhatsApp: +57 312 291 9236</a></div><div className="footer-col"><span>INFORMACIÓN</span><a href="#legal-terminos">Términos y condiciones</a><a href="#legal-privacidad">Aviso de privacidad</a><a href="#faq">Cambios y cancelaciones</a></div><a className="footer-top" href="#inicio" aria-label="Volver al inicio"><ArrowUpRight size={18} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Driveo Car. Todos los derechos reservados.</span><span>HECHO PARA LLEGAR MEJOR <span className="footer-heart">✳</span></span></div><div className="legal-details"><details id="legal-terminos"><summary>Términos y condiciones</summary><p>El servicio, la tarifa, los horarios, las condiciones de cambio y las políticas de cancelación se confirman directamente antes de reservar. No se considera confirmada una solicitud hasta recibir confirmación expresa del equipo de Driveo Car. Reemplazar este texto con las condiciones definitivas y revisadas para la jurisdicción donde opere el servicio.</p></details><details id="legal-privacidad"><summary>Aviso de privacidad</summary><p>Los datos que compartas mediante el formulario se utilizarán únicamente para atender tu consulta de viaje. Al enviar la solicitud, los datos se incorporan a un mensaje de WhatsApp que abrirá tu dispositivo; el tratamiento posterior también está sujeto a las políticas de WhatsApp. Completar con la identidad legal del responsable, medios de contacto, plazos de conservación y derechos aplicables antes del lanzamiento.</p></details></div></footer>
      <a className="floating-contact" href="#cotizar" aria-label="Cotiza tu viaje"><MessageCircle size={18} /><span>Planea tu viaje</span></a>
    </main>
  );
}
