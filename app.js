// Nodo Studio — landing page (responsive, mobile-first friendly)

const C_CREAM = "#FFF4E6";
const C_ORANGE = "#FF8A3D";
const C_ORANGE_DEEP = "#E66A1A";
const C_INK = "#1A0F08";
const C_MUTE = "#5A4A3F";
const C_LINE = "#1A0F0815";
const fontDisplay = "'Space Grotesk', system-ui, sans-serif";
const fontMono = "'JetBrains Mono', ui-monospace, monospace";

// Hook: viewport breakpoint
function useViewport() {
  const get = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    return {
      w,
      isMobile: w < 720,
      isTablet: w >= 720 && w < 1024
    };
  };
  const [v, setV] = React.useState(get);
  React.useEffect(() => {
    const onR = () => setV(get());
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  return v;
}
function GlyphMark({
  size = 40,
  fg = C_INK,
  accent = C_ORANGE
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 12 L 14 52 L 20 52 L 20 24 L 44 52 L 50 52 L 50 12 L 44 12 L 44 40 L 20 12 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "6",
    width: "3",
    height: "14",
    fill: accent,
    transform: "rotate(20 29.5 13)"
  }));
}
function NavBar() {
  const {
    isMobile
  } = useViewport();
  const [open, setOpen] = React.useState(false);
  const links = ["Servicios", "Casos", "Proceso", "Contacto"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: C_CREAM,
      borderBottom: `1px solid ${C_LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: isMobile ? "14px 20px" : "18px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: C_INK
    }
  }, /*#__PURE__*/React.createElement(GlyphMark, {
    size: isMobile ? 26 : 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontDisplay,
      fontWeight: 600,
      fontSize: isMobile ? 16 : 18,
      letterSpacing: "-0.03em"
    }
  }, "nodostudio")), isMobile ? /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_CREAM,
      background: C_INK,
      padding: "9px 14px",
      borderRadius: 6,
      textDecoration: "none",
      letterSpacing: "0.04em"
    }
  }, "Hablemos \u2192") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_INK,
      textDecoration: "none",
      letterSpacing: "0.04em",
      opacity: 0.75
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_CREAM,
      background: C_INK,
      padding: "10px 16px",
      borderRadius: 6,
      textDecoration: "none",
      letterSpacing: "0.04em"
    }
  }, "Hablemos \u2192"))));
}
function Hero() {
  const {
    isMobile,
    isTablet
  } = useViewport();
  const pad = isMobile ? "48px 20px 64px" : "80px 32px 100px";
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: C_CREAM,
      padding: pad,
      borderBottom: `1px solid ${C_LINE}`,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: isMobile ? 28 : 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: C_ORANGE,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: isMobile ? 10 : 12,
      letterSpacing: "0.16em",
      color: C_MUTE,
      textTransform: "uppercase"
    }
  }, "Agencia digital \xB7 Venezuela \xB7 2026")), isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      display: "flex",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      borderRadius: "50%",
      background: C_ORANGE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 18px 40px ${C_ORANGE_DEEP}55`
    }
  }, /*#__PURE__*/React.createElement(GlyphMark, {
    size: 88,
    fg: C_INK,
    accent: C_CREAM
  }))), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontWeight: 700,
      fontSize: isMobile ? "clamp(40px, 12vw, 64px)" : "clamp(48px, 8vw, 128px)",
      lineHeight: 0.95,
      color: C_INK,
      letterSpacing: "-0.045em",
      maxWidth: isMobile ? "100%" : 1100
    }
  }, "Tu negocio,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C_ORANGE_DEEP
    }
  }, "conectado"), " al", /*#__PURE__*/React.createElement("br", null), "mundo digital."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: isMobile ? "24px 0 0" : "40px 0 0",
      maxWidth: 580,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 16 : 20,
      lineHeight: 1.5,
      color: C_MUTE,
      fontWeight: 400
    }
  }, "Hacemos sitios web, chatbots y herramientas digitales para restaurantes, cl\xEDnicas, inmobiliarias y barber\xEDas que quieren dejar de perder clientes por WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: isMobile ? 32 : 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    style: {
      fontFamily: fontDisplay,
      fontWeight: 600,
      fontSize: isMobile ? 15 : 16,
      background: C_INK,
      color: C_CREAM,
      padding: isMobile ? "16px 22px" : "18px 28px",
      borderRadius: 8,
      textDecoration: "none",
      letterSpacing: "-0.01em",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, "Cotiza tu proyecto", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 18
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#casos",
    style: {
      fontFamily: fontDisplay,
      fontWeight: 500,
      fontSize: isMobile ? 15 : 16,
      background: "transparent",
      color: C_INK,
      padding: isMobile ? "16px 20px" : "18px 24px",
      borderRadius: 8,
      textDecoration: "none",
      border: `1px solid ${C_INK}30`
    }
  }, "Ver casos")), !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: isTablet ? -20 : -40,
      top: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: isTablet ? 220 : 320,
      height: isTablet ? 220 : 320,
      borderRadius: "50%",
      background: C_ORANGE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 30px 80px ${C_ORANGE_DEEP}55`
    }
  }, /*#__PURE__*/React.createElement(GlyphMark, {
    size: isTablet ? 140 : 200,
    fg: C_INK,
    accent: C_CREAM
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 56 : 96,
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 20 : 32,
      padding: "32px 0",
      borderTop: `1px solid ${C_LINE}`
    }
  }, [{
    n: "40+",
    l: "Negocios activados"
  }, {
    n: "5",
    l: "Ciudades de Venezuela"
  }, {
    n: "24h",
    l: "Tiempo de respuesta"
  }, {
    n: "100%",
    l: "Hablamos tu idioma"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fontDisplay,
      fontSize: isMobile ? 40 : 56,
      fontWeight: 700,
      color: C_INK,
      letterSpacing: "-0.04em",
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_MUTE,
      marginTop: 8,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, s.l))))));
}
function ServiceCard({
  num,
  title,
  desc,
  features,
  accent = false,
  isMobile
}) {
  const bg = accent ? C_ORANGE : "#FFFFFF";
  const fg = C_INK;
  const muteColor = accent ? "#1A0F08CC" : C_MUTE;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 16,
      padding: isMobile ? 28 : 36,
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 20 : 24,
      minHeight: isMobile ? "auto" : 480,
      border: accent ? "none" : `1px solid ${C_LINE}`,
      boxShadow: accent ? `0 20px 60px ${C_ORANGE_DEEP}30` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: muteColor,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, num, " \xB7 servicio"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: accent ? C_INK : C_ORANGE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(GlyphMark, {
    size: 28,
    fg: accent ? C_ORANGE : C_INK,
    accent: C_CREAM
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 28 : 36,
      fontWeight: 700,
      color: fg,
      letterSpacing: "-0.03em",
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 15 : 16,
      color: muteColor,
      lineHeight: 1.55,
      flex: 1
    }
  }, desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      borderTop: `1px solid ${accent ? "#1A0F0820" : C_LINE}`,
      paddingTop: 20
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: fg,
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent ? C_INK : C_ORANGE_DEEP,
      fontWeight: 700
    }
  }, "+"), f))));
}
function Servicios() {
  const {
    isMobile
  } = useViewport();
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      background: C_CREAM,
      padding: isMobile ? "64px 20px" : "100px 32px",
      borderBottom: `1px solid ${C_LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: isMobile ? 36 : 56,
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_MUTE,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "01 \xB7 Qu\xE9 hacemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      fontFamily: fontDisplay,
      fontSize: isMobile ? 44 : 72,
      fontWeight: 700,
      color: C_INK,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
      maxWidth: 700
    }
  }, "Tres servicios.", /*#__PURE__*/React.createElement("br", null), "Cero excusas.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 15 : 16,
      color: C_MUTE,
      lineHeight: 1.6
    }
  }, "No vendemos paquetes inflados. Vendemos lo que tu negocio necesita para vender m\xE1s ma\xF1ana.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? 16 : 20
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    isMobile: isMobile,
    num: "01",
    title: "Sitios web que venden",
    desc: "P\xE1ginas r\xE1pidas, claras y pensadas para que tu cliente reserve, pida o llame en el primer minuto.",
    features: ["Diseño y desarrollo", "Optimización móvil", "Reservas y pedidos online", "SEO local"]
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    isMobile: isMobile,
    num: "02",
    title: "Chatbots de WhatsApp",
    desc: "Atiende 24/7 sin perder un mensaje. Reserva mesa, agenda cita, responde precios \u2014 autom\xE1tico.",
    features: ["WhatsApp Business API", "Flujos personalizados", "Integración con tu agenda", "Reportes semanales"],
    accent: true
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    isMobile: isMobile,
    num: "03",
    title: "Herramientas a la medida",
    desc: "Sistemas internos para tu equipo: control de inventario, agendas, CRMs livianos. Sin c\xF3digos imposibles.",
    features: ["Dashboards", "Bases de datos", "Automatizaciones", "Capacitación incluida"]
  }))));
}
const CASES = [{
  tag: "Restaurante",
  name: "La Esquina del Sabor",
  city: "Caracas",
  result: "+180%",
  metric: "reservas online",
  body: "Pasaron de tomar pedidos solo por teléfono a un sistema de reservas y delivery por WhatsApp."
}, {
  tag: "Clínica",
  name: "Centro Médico Andes",
  city: "Mérida",
  result: "−65%",
  metric: "no-shows",
  body: "Chatbot que confirma citas y reagenda automáticamente. Las salas dejaron de quedar vacías."
}, {
  tag: "Inmobiliaria",
  name: "Habitar Maracaibo",
  city: "Maracaibo",
  result: "+12",
  metric: "leads / semana",
  body: "Catálogo web con filtros y formulario directo a WhatsApp del asesor. Sin Excel, sin caos."
}, {
  tag: "Barbería",
  name: "Brava Barber Co.",
  city: "Valencia",
  result: "100%",
  metric: "agenda llena",
  body: "Sistema de citas online + recordatorios automáticos. Dos sedes, una sola agenda."
}];
function Casos() {
  const {
    isMobile
  } = useViewport();
  return /*#__PURE__*/React.createElement("section", {
    id: "casos",
    style: {
      background: C_INK,
      padding: isMobile ? "64px 20px" : "100px 32px",
      color: C_CREAM
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 36 : 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_ORANGE,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "02 \xB7 Casos reales"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      fontFamily: fontDisplay,
      fontSize: isMobile ? 40 : 72,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
      color: C_CREAM,
      maxWidth: 800
    }
  }, "Negocios venezolanos que ya est\xE1n ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C_ORANGE
    }
  }, "en l\xEDnea"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? 14 : 16
    }
  }, CASES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      background: i === 1 ? C_ORANGE : "#22160E",
      borderRadius: 16,
      padding: isMobile ? 28 : 36,
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 22 : 28,
      minHeight: isMobile ? "auto" : 320,
      color: i === 1 ? C_INK : C_CREAM
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      opacity: 0.7
    }
  }, c.tag, " \xB7 ", c.city), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontDisplay,
      fontSize: isMobile ? 19 : 22,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, c.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      opacity: 0.5
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14,
      borderTop: `1px solid ${i === 1 ? "#1A0F0825" : "#FFF4E625"}`,
      paddingTop: isMobile ? 18 : 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontDisplay,
      fontSize: isMobile ? 48 : 64,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1
    }
  }, c.result), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      opacity: 0.7,
      letterSpacing: "0.04em"
    }
  }, c.metric)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 14 : 15,
      lineHeight: 1.55,
      opacity: 0.85
    }
  }, c.body))))));
}
function Proceso() {
  const {
    isMobile
  } = useViewport();
  const steps = [{
    n: "01",
    title: "Llamada de 30 min",
    desc: "Sin compromiso. Nos cuentas qué vendes, qué te frena, dónde están tus clientes."
  }, {
    n: "02",
    title: "Propuesta clara",
    desc: "En 48h te enviamos alcance, plazos y precio en bolívares o dólares. Sin letra chica."
  }, {
    n: "03",
    title: "Construimos juntos",
    desc: "Reuniones cortas cada semana. Ves el avance en vivo, no al final."
  }, {
    n: "04",
    title: "Lanzamos y acompañamos",
    desc: "Te capacitamos, dejamos todo documentado y seguimos disponibles 90 días."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "proceso",
    style: {
      background: C_CREAM,
      padding: isMobile ? "64px 20px" : "100px 32px",
      borderBottom: `1px solid ${C_LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 36 : 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_MUTE,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "03 \xB7 C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      fontFamily: fontDisplay,
      fontSize: isMobile ? 40 : 72,
      fontWeight: 700,
      color: C_INK,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
      maxWidth: 700
    }
  }, "De la idea", /*#__PURE__*/React.createElement("br", null), "al cliente, en 4 pasos."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
      gap: 0,
      borderTop: `1px solid ${C_INK}`
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: isMobile ? "28px 0" : "32px 28px 32px 0",
      borderRight: !isMobile && i < 3 ? `1px solid ${C_LINE}` : "none",
      borderBottom: isMobile && i < 3 ? `1px solid ${C_LINE}` : "none",
      paddingLeft: !isMobile && i > 0 ? 28 : 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_ORANGE_DEEP,
      letterSpacing: "0.14em"
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: C_ORANGE
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontSize: isMobile ? 20 : 22,
      fontWeight: 600,
      color: C_INK,
      letterSpacing: "-0.02em"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: fontDisplay,
      fontSize: 14,
      color: C_MUTE,
      lineHeight: 1.6
    }
  }, s.desc))))));
}
function Contacto() {
  const {
    isMobile
  } = useViewport();
  const [form, setForm] = React.useState({
    nombre: "",
    negocio: "",
    whatsapp: "",
    mensaje: ""
  });
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: C_ORANGE,
      padding: isMobile ? "64px 20px" : "100px 32px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? 36 : 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 12,
      color: C_INK,
      opacity: 0.6,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "04 \xB7 Hablemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      fontFamily: fontDisplay,
      fontSize: isMobile ? 48 : 88,
      fontWeight: 700,
      color: C_INK,
      letterSpacing: "-0.045em",
      lineHeight: 0.92
    }
  }, "\xBFListos para", /*#__PURE__*/React.createElement("br", null), "conectar tu", /*#__PURE__*/React.createElement("br", null), "negocio?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: isMobile ? "20px 0 0" : "32px 0 0",
      fontFamily: fontDisplay,
      fontSize: isMobile ? 16 : 18,
      color: C_INK,
      opacity: 0.8,
      maxWidth: 460,
      lineHeight: 1.5
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas y te respondemos en menos de 24 horas. Sin formularios eternos, sin call-centers."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: isMobile ? 32 : 48,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [{
    k: "WhatsApp directo",
    v: "+58 414 555 0184"
  }, {
    k: "Correo",
    v: "hola@nodo.studio"
  }, {
    k: "Oficina",
    v: "Caracas · Maracaibo · remoto"
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      gap: isMobile ? 4 : 12,
      paddingBottom: 14,
      borderBottom: `1px solid ${C_INK}25`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_INK,
      opacity: 0.6,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontDisplay,
      fontSize: isMobile ? 15 : 16,
      color: C_INK,
      fontWeight: 600
    }
  }, r.v))))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: C_CREAM,
      padding: isMobile ? 24 : 36,
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      boxShadow: `0 30px 80px ${C_ORANGE_DEEP}50`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_MUTE,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "Cotizaci\xF3n gratuita"), /*#__PURE__*/React.createElement(GlyphMark, {
    size: 26
  })), [{
    id: "nombre",
    label: "Tu nombre",
    placeholder: "María García",
    type: "text"
  }, {
    id: "negocio",
    label: "Tipo de negocio",
    placeholder: "Restaurante, clínica...",
    type: "text"
  }, {
    id: "whatsapp",
    label: "WhatsApp",
    placeholder: "+58 414 000 0000",
    type: "tel"
  }].map(f => /*#__PURE__*/React.createElement("label", {
    key: f.id,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_MUTE,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, f.label), /*#__PURE__*/React.createElement("input", {
    type: f.type,
    value: form[f.id],
    onChange: e => setForm({
      ...form,
      [f.id]: e.target.value
    }),
    placeholder: f.placeholder,
    style: {
      fontFamily: fontDisplay,
      fontSize: 16,
      color: C_INK,
      background: "#FFFFFF",
      border: `1px solid ${C_INK}25`,
      padding: "14px 16px",
      borderRadius: 8,
      outline: "none",
      width: "100%"
    },
    onFocus: e => e.target.style.borderColor = C_ORANGE_DEEP,
    onBlur: e => e.target.style.borderColor = `${C_INK}25`
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_MUTE,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Cu\xE9ntanos"), /*#__PURE__*/React.createElement("textarea", {
    value: form.mensaje,
    onChange: e => setForm({
      ...form,
      mensaje: e.target.value
    }),
    rows: 4,
    placeholder: "\xBFQu\xE9 quieres lograr? \xBFQu\xE9 te frena hoy?",
    style: {
      fontFamily: fontDisplay,
      fontSize: 15,
      color: C_INK,
      background: "#FFFFFF",
      border: `1px solid ${C_INK}25`,
      padding: "14px 16px",
      borderRadius: 8,
      outline: "none",
      resize: "vertical",
      width: "100%"
    },
    onFocus: e => e.target.style.borderColor = C_ORANGE_DEEP,
    onBlur: e => e.target.style.borderColor = `${C_INK}25`
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: fontDisplay,
      fontWeight: 600,
      fontSize: 16,
      background: sent ? C_ORANGE_DEEP : C_INK,
      color: C_CREAM,
      padding: "18px 24px",
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      transition: "background 0.2s"
    }
  }, sent ? "✓ Recibido — te escribimos pronto" : "Enviar cotización →"))));
}
function Footer() {
  const {
    isMobile
  } = useViewport();
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: C_INK,
      color: C_CREAM,
      padding: isMobile ? "48px 20px 28px" : "56px 32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
      gap: isMobile ? 28 : 32,
      paddingBottom: 36,
      borderBottom: `1px solid #FFF4E625`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: isMobile ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(GlyphMark, {
    size: 32,
    fg: C_ORANGE,
    accent: C_CREAM
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fontDisplay,
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-0.03em"
    }
  }, "nodostudio")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: fontDisplay,
      fontSize: 14,
      color: "#FFF4E699",
      maxWidth: 320,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Agencia digital venezolana. Sitios web, chatbots y herramientas para negocios que crecen.")), [{
    t: "Servicios",
    l: ["Sitios web", "Chatbots WhatsApp", "Herramientas"]
  }, {
    t: "Estudio",
    l: ["Casos", "Proceso", "Contacto"]
  }, {
    t: "Síguenos",
    l: ["Instagram", "LinkedIn", "Behance"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fontMono,
      fontSize: 11,
      color: C_ORANGE,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, col.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, col.l.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontFamily: fontDisplay,
      fontSize: 14,
      color: C_CREAM,
      textDecoration: "none",
      opacity: 0.85
    }
  }, item)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      gap: 8,
      fontFamily: fontMono,
      fontSize: 11,
      color: "#FFF4E677",
      letterSpacing: "0.06em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nodo Studio \xB7 Hecho en Venezuela"), /*#__PURE__*/React.createElement("span", null, "v2.0 \xB7 orange futurist"))));
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C_CREAM,
      color: C_INK,
      minHeight: "100vh",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Servicios, null), /*#__PURE__*/React.createElement(Casos, null), /*#__PURE__*/React.createElement(Proceso, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Landing, null));