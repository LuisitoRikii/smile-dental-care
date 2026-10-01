export const SITE = {
  name: " Smile Dental Care",
  legalName: "Smile Dental Care",
  phoneDisplay: "+1786-849-2174",
  phoneDisplayAlt: "786-849-2174",
  phoneHref: "tel:+17868492174",
  phoneHrefAlt: "tel:7868492174",
  email: "Smiledentalcare860@gmail.com",
  emailHref: "mailto:Smiledentalcare860@gmail.com",
  address: "860 Nw 42 ave suite 407. Miami Fl 32126",
  addressShort: "860 NW 42 AVE SUITE 407, MIAMI FL",
  mapsQuery: "25.780214,-80.264785",
  mapsEmbed:
    "https://www.google.com/maps?q=25.780214,-80.264785&z=14&hl=es&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=25.780214,-80.264785",
  instagram: "https://www.instagram.com/smiledentalcare305/",
  copyright: "Copyright © 2026  Smile Dental Care - Todos los derechos reservados.",
} as const;

export const IMG = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Inicio", href: "/" },
  { label: "Staff", href: "/staff" },
  { label: "Office", href: "/office" },
  { label: "Service", href: "/service" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Galeria", href: "/galeria" },
];

export const OPEN_HOURS = "09:00 a.m. – 05:00 p.m.";

export const HOUR_ROWS: { day: string; value: string; dow: number }[] = [
  { day: "lun", value: "Cerrado", dow: 1 },
  { day: "mar", value: OPEN_HOURS, dow: 2 },
  { day: "mié", value: OPEN_HOURS, dow: 3 },
  { day: "jue", value: OPEN_HOURS, dow: 4 },
  { day: "vie", value: OPEN_HOURS, dow: 5 },
  { day: "sáb", value: OPEN_HOURS, dow: 6 },
  { day: "dom", value: "Cerrado", dow: 0 },
];

export const HERO = {
  eyebrow: "BIENVENIDOS",
  title: "Atención dental de calidad",
  subtitle:
    "Sonrisas saludables para toda la familia en un ambiente acogedor.",
  cta: "Solicite su cita hoy",
  ctaHref: "/contact-us",
  image: `${IMG}/hero-lg.jpg`,
  alt: "Atención dental de calidad",
} as const;

export const ABOUT = {
  eyebrow: "Acerca de Smile Dental Care",
  rows: [
    {
      image: `${IMG}/about-1.jpg`,
      title: "Nuestro Equipo de Expertos",
      text: "Contamos con un equipo de dentistas altamente capacitados y comprometidos con su salud dental. Cada miembro de nuestro equipo está dedicado a brindar una atención personalizada y de calidad.",
    },
    {
      image: `${IMG}/about-2.jfif`,
      title: "Nuestro Enfoque Integral",
      text: "En Smile Dental Care, creemos en un enfoque integral para el cuidado dental. Nos enfocamos en la relación entre sus dientes, encías y salud general para ofrecerle el mejor tratamiento posible.",
    },
    {
      image: `${IMG}/about-3.jpg`,
      title: "Tecnología Avanzada",
      text: "Utilizamos tecnología dental de vanguardia para asegurar tratamientos precisos y cómodos. En Smile Dental Care, su experiencia es nuestra prioridad y estamos aquí para hacerla lo más placentera posible.",
    },
  ],
} as const;

const SERVICE_HREF =
  "https://www.smiledentalcare.com/articles_premium_education/premium_education/509262-cosmetic-tooth-bonding";

export const SERVICES = {
  eyebrow: "Servicios dentales",
  title: "Bienvenido a Smile Dental Care",
  intro:
    "Las visitas dentales regulares son esenciales para detectar y tratar a tiempo los problemas de salud bucal, desde caries hasta cáncer bucal. En nuestra clínica, su salud bucal es nuestra prioridad. ¡Queremos asegurarnos de que sus dientes se mantengan sanos, funcionen bien y luzcan espléndidos! Desde limpiezas y exámenes regulares hasta tratamientos restauradores avanzados, todas sus necesidades dentales rutinarias se cubren aquí.",
  listHeading: "Los servicios que ofrecemos incluyen:",
  items: [
    "Adhesiones para reparar pequeñas astillas o grietas",
    "Coronas y puentes para reemplazar grandes cantidades de estructura dental perdida o dientes faltantes",
    "Implantes dentales para el reemplazo dental más duradero disponible en la actualidad",
    "Empastes para fortalecer y sanar sus dientes",
    "Exámenes de detección de cáncer bucal para detectar enfermedades en una etapa curable",
    "Tratamiento de ortodoncia para mover los dientes a la posición correcta",
    "Terapia para la enfermedad periodontal (de las encías) para prevenir la pérdida de dientes",
    "Carillas de porcelana para reparar astillas y grietas más grandes y remodelar los dientes",
    "Limpiezas dentales profesionales para mantener una buena salud bucal",
    "Dentaduras postizas removibles para ayudarle a sonreír de nuevo",
    "Tratamiento de conducto para salvar un diente infectado",
    "Selladores para proteger los dientes de los niños de las caries",
    "Blanqueamiento dental para aclarar una sonrisa descolorida o descolorida",
    "Tratamiento de ATM/DTM para el dolor crónico de mandíbula",
  ].map((label) => ({ label, href: SERVICE_HREF })),
  image: `${IMG}/service-1.jfif`,
  emergencyTitle: "Tratamiento dental de emergencia",
  emergencyText:
    "Si sufre una lesión grave o potencialmente mortal, llame al 911 o acuda directamente a la sala de urgencias del hospital más cercano. Podemos tratar diversas lesiones dentales traumáticas, incluyendo dientes astillados, movidos o completamente caídos. Llame a nuestra oficina para obtener ayuda.",
  cta: "Ver todos los servicios",
  ctaHref: "/service",
} as const;

export const HIGHLIGHTS = {
  eyebrow: "Office",
  title: "Seguros y facturación",
  cards: [
    {
      title: "Seguros y facturación",
      text: "Aceptamos la mayoría de los planes de seguro tradicionales. Comuníquese con nuestra oficina para verificar la aceptación de su plan. Smile Dental Care no participa en Organizaciones de Gestión de la Salud; sin embargo, con gusto presentaremos sus reclamos de seguro por usted.",
      href: "/office",
    },
    {
      title: "Opciones de pago",
      text: "Aceptamos cheques, efectivo o tarjetas de crédito. También ofrecemos un plan de pago flexible. Consulte con nuestro Coordinador Financiero para obtener más información.",
      href: "/office",
    },
    {
      title: "Opciones de financiación",
      text: "CareCredit está aquí para ayudarle a pagar los tratamientos y procedimientos que su seguro no cubre. Ofrecemos financiación sin intereses* o opciones de pago mínimo mensual bajo para que pueda obtener lo que desea, cuando lo desee.",
      href: "/office",
    },
  ],
  equipment: ["Digital X-rays", "Invisalign"],
} as const;

export const DOCTOR = {
  eyebrow: "Staff",
  name: "Doctora Helen Pavon Pozo",
  lead: "Bienvenidos a Smile Dental Care",
  paragraphs: [
    "Soy la Dra. Helen Pavon, odontóloga comprometida con brindar una atención dental honesta, moderna y centrada en el bienestar integral de cada paciente. Desde el inicio de mi carrera, mi objetivo ha sido claro: crear un espacio donde las personas se sientan escuchadas, respetadas y seguras, mientras reciben tratamientos de alta calidad con los más altos estándares profesionales.",
    "En Smile Dental Care combinamos tecnología avanzada, actualización constante y un trato humano y cercano. Creo firmemente que una sonrisa saludable va más allá de la estética: impacta la confianza, la salud general y la calidad de vida.",
    "Mi mayor satisfacción es acompañar a mis pacientes en su proceso de cuidado dental, educarlos y ofrecer soluciones personalizadas para cada etapa de su vida. Smile Dental Care nace de esa visión: una clínica donde la excelencia médica se une con calidez, ética y compromiso genuino con nuestra comunidad.",
  ],
  image: `${IMG}/doctora.jpg`,
  cta: "Staff",
  ctaHref: "/staff",
} as const;

export const MISSION = {
  eyebrow: "New Patients",
  title: "Declaración de misión",
  lead: "Nuestra práctica está trabajando en conjunto para hacer realidad una visión compartida de excelencia absoluta en odontología.",
  leadHeading: "Para cumplir esta misión, nos comprometemos a:",
  commitments: [
    "Escuchar a quienes tenemos el privilegio de servir.",
    "Ganar la confianza y el respeto de los pacientes, la profesión y la comunidad.",
    "Superar sus expectativas.",
    "Garantizar un entorno profesional creativo, estimulante y compasivo.",
    "Esforzarnos por la mejora continua en todos los niveles.",
  ],
  cta: "New Patients",
  ctaHref: "/new-patients",
} as const;

export const CONTACT = {
  eyebrow: "Comunícate con nosotros",
  title: "O, aún mejor, ¡ven a visitarnos!",
  lead: "Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina.",
  officeName: "Smile Dental Care",
  hoursTitle: "Horario",
  formTrigger: "Comunícate con nosotros.",
  formTitle: "Comunícate con nosotros.",
  fields: [
    { label: "Nombre", type: "text", name: "name" },
    { label: "Correo electrónico*", type: "email", name: "email", required: true },
    { label: "Teléfono", type: "tel", name: "phone" },
  ],
  notesLabel: "Otras notas",
  notesName: "message",
  attach: "Adjuntar archivos",
  attachCount: "Datos adjuntos (0)",
  recaptchaBefore: "Este sitio está protegido por reCAPTCHA y aplican las",
  recaptchaPrivacy: "Política de privacidad",
  recaptchaPrivacyHref: "https://policies.google.com/privacy",
  recaptchaAfter: "y los",
  recaptchaTerms: "Términos de servicio",
  recaptchaTermsHref: "https://policies.google.com/terms",
  recaptchaTail: "de Google.",
  submit: "Enviar",
  submitSending: "Enviando…",
  submitSuccess: "¡Listo! Tu mensaje fue enviado. Te responderemos a la brevedad.",
  submitError: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
  cancel: "Cancelar",
  directions: "Consigue las instrucciones",
} as const;

export const SOCIAL = {
  eyebrow: "Conéctate con nosotros",
  label: "Instagram",
  handle: "@smiledentalcare305",
} as const;

export const SUBSCRIBE = {
  eyebrow: "Suscribirse",
  text: "Suscríbete para recibir noticias sobre promociones, ofertas y eventos.",
  field: "Correo electrónico",
  cta: "Registrarse",
  image: `${IMG}/subscribe-bg.jpg`,
} as const;

export const COOKIE = {
  title: "Este sitio web utiliza cookies",
  text: "Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia. Al aceptar nuestro uso de cookies, tus datos se agruparán con los datos de todos los demás usuarios.",
  accept: "Aceptar",
} as const;

export const FACTS: {
  label: string;
  value: string;
  detail?: string;
  href: string;
  small?: boolean;
}[] = [
  {
    label: "Horario",
    value: "Mar – Sáb",
    detail: OPEN_HOURS,
    href: "/contact-us",
  },
  {
    label: "Ubicación",
    value: "Miami, FL",
    detail: "860 NW 42 Ave Suite 407",
    href: SITE.mapsDirections,
  },
  {
    label: "Teléfono",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
  },
  {
    label: "Correo",
    value: SITE.email,
    href: SITE.emailHref,
    small: true,
  },
];
