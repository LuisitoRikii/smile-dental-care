import { IMG } from "./data";

export const STAFF_PAGE = {
  navLabel: "Staff",
  title: "Bienvenido a Smile Dental Care",
  image: `${IMG}/doctora.jpg`,
} as const;

export const OFFICE_PAGE = {
  navLabel: "Office",
  title: "Our Locations",
  locationHeading: "Our Locations",
  details: [
    { label: "Dirección:", value: "860 Nw 42 ave suite 407. Miami Fl 32126" },
    { label: "Teléfono:", value: "+1786-849-2174" },
    { label: "Horario:", value: "Abierto de Martes a Sábado.  Cerrado Domingo y Lunes." },
    { label: "Correo electrónico:", value: "Smiledentalcare860@gmail.com" },
  ],
  brandHeading: "Smile Dental Care",
  image: `${IMG}/consultorio.jpg`,
  imageAlt: "Our Locations",
  team: {
    title: "Equipo",
    text: "Sabemos que tiene muchas opciones al elegir un dentista en Smile Dental. Por eso, hemos simplificado el proceso de solicitud de cita a través de nuestro sitio web. Si por alguna razón no puede asistir a su cita programada o se retrasa, llámenos lo antes posible.",
  },
  insuranceHeading: "Seguros y Facturación",
  blocks: [
    {
      title: "Seguros y facturación",
      paragraphs: [
        "Aceptamos la mayoría de los planes de seguro tradicionales. Comuníquese con nuestra oficina para verificar la aceptación de su plan. Smile Dental Care no participa en Organizaciones de Gestión de la Salud; sin embargo, con gusto presentaremos sus reclamos de seguro. Aceptamos cheques, efectivo y tarjetas de crédito. También ofrecemos un plan de pago flexible. Para más detalles, consulte con nuestro Coordinador Financiero. Con gusto presentaremos su reclamo de seguro para su reembolso, siempre y cuando usted tenga la libertad de elegir a su propio dentista.",
      ],
    },
    {
      title: "Seguros y facturación",
      paragraphs: [
        "Aceptamos la mayoría de los planes de seguro tradicionales. Comuníquese con nuestra oficina para verificar la aceptación de su plan. Smile Dental Care no participa en Organizaciones de Gestión de la Salud; sin embargo, con gusto presentaremos sus reclamos de seguro por usted. Aceptamos cheques, efectivo o tarjetas de crédito. También ofrecemos un plan de pago flexible. Consulte con nuestro Coordinador Financiero para obtener más información. Con gusto presentaremos su reclamo de seguro para su reembolso, siempre y cuando pueda elegir libremente a su dentista.",
      ],
    },
    {
      title: "Opciones de pago",
      paragraphs: [
        "Aceptamos cheques, efectivo o tarjetas de crédito. También ofrecemos un plan de pago flexible. Para más información, consulte con nuestro Coordinador Financiero. Con gusto solicitaremos un reembolso al seguro, siempre y cuando pueda elegir libremente a su dentista.",
      ],
    },
    {
      title: "Opciones de financiación",
      paragraphs: [
        "CareCredit está aquí para ayudarle a pagar los tratamientos y procedimientos que su seguro no cubre. Ofrecemos financiación sin intereses* o opciones de pago mínimo mensual bajo para que pueda obtener lo que desea, cuando lo desee. Incluso puede usar CareCredit para su familia y su mascota favorita.",
        "Con tres sencillos pasos, incluyendo un proceso de aprobación instantánea, solicitar CareCredit es fácil. Una vez aprobado, podrá usar CareCredit para los servicios que elija, como LASIK, veterinaria, odontología, estética, audífonos y más.",
        "CareCredit cuenta con el respaldo de algunas de las organizaciones más prestigiosas de cada profesión sanitaria que apoyamos. Además, CareCredit es una empresa de GE Money, así que sabe que puede contar con nosotros. Durante más de 20 años, hemos ayudado a más de cinco millones de titulares de tarjetas a obtener los tratamientos médicos que desean y necesitan.",
        "Ahora no tiene que preocuparse por ahorrar para los procedimientos que desea y necesita. Con CareCredit, la decisión está en sus manos para obtener lo que desea, cuando lo desea. Para obtener más información o solicitar en línea, visite carecredit.com",
      ],
    },
  ],
  equipment: {
    title: "Instalaciones y Equipos",
    items: ["Digital X-rays", "Invisalign"],
  },
} as const;

export const NEW_PATIENTS_PAGE = {
  navLabel: "New Patients",
  title: "Bienvenido a Smile Dental Care",
  image: `${IMG}/new-patients.jfif`,
  intro: {
    title: "Formularios para pacientes, mapa e indicaciones para llegar a Smile Dental Care",
    text: "Su primera visita a Sunny Smiles sienta las bases fundamentales de nuestra relación con usted. Durante la primera visita, nos aseguramos de obtener información importante, como su historial médico, y le damos tiempo para que conozca a su médico. Para saber qué esperar en su primera visita, lea esta página. Encontrará toda la información práctica que necesita, como un mapa e indicaciones para llegar a nuestra oficina, el horario de atención, las políticas de pago y más. También encontrará información sobre nuestro dedicado personal y los procedimientos de la primera visita. Incluso puede ahorrar tiempo en su primera visita imprimiendo y completando los formularios para pacientes antes de su cita.",
  },
  appointment: {
    title: "La cita",
    text: "Estar bien preparado para su cita le garantizará que el médico tenga toda la información necesaria para brindarle la mejor atención posible. También le ayudará a aliviar cualquier ansiedad innecesaria que pueda sentir. Infórmese sobre sus síntomas consultando el contenido de este sitio web. Además, tómese un tiempo para revisar la página de nuestro personal y familiarizarse con los médicos. Esperamos su primera visita.",
  },
} as const;

export const CONTACT_PAGE = {
  navLabel: "Contact Us",
  title: "Comunícate con nosotros",
  image: `${IMG}/contact-hero.jpg`,
  form: {
    title: "Comunícate con nosotros.",
    fields: [
      { label: "Nombre", type: "text", name: "name" },
      { label: "Correo electrónico*", type: "email", name: "email", required: true },
    ],
    submit: "Enviar",
    recaptchaBefore: "Este sitio está protegido por reCAPTCHA y aplican las",
    recaptchaPrivacy: "Política de privacidad",
    recaptchaPrivacyHref: "https://policies.google.com/privacy",
    recaptchaAfter: "y los",
    recaptchaTerms: "Términos de servicio",
    recaptchaTermsHref: "https://policies.google.com/terms",
    recaptchaTail: "de Google.",
  },
} as const;

export const GALLERY_PAGE = {
  navLabel: "Galeria",
  title:
    "Descubre nuestra sonrisa: Galería de imágenes de Smile Dental Care y nuestros pacientes felices",
  images: [
    `${IMG}/gallery-1.jpg`,
    `${IMG}/gallery-2.jpg`,
    `${IMG}/gallery-3.jpg`,
    `${IMG}/gallery-4.jpg`,
    `${IMG}/gallery-5.jpg`,
    `${IMG}/gallery-6.jpg`,
  ],
} as const;
