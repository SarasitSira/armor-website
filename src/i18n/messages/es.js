// Spanish site copy (mirrors en.js). Uses informal "tú" and Spanish number formatting (decimal comma).
export default {
  common: {
    requestDemo: 'Solicitar una demo',
    preview: 'Vista previa',
    learnMore: 'Más información',
    contactUs: 'Contáctanos',
    homeAria: 'Inicio de ARMOR',
    language: 'Idioma',
  },

  nav: {
    industries: 'Industrias',
    solutions: 'Soluciones',
    contact: 'Contacto',
    bexoDescription: 'Exotraje lumbar portátil',
    shieldDescription: 'Estudio de ergonomía',
    explore: 'Explorar soluciones',
    viewAll: 'Ver todas las soluciones',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  footer: {
    bexo: 'Bexo',
    shield: 'Shield',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    bookDemo: 'Reservar una demo',
    getUpdates: 'Recibir novedades',
    support: 'Soporte',
    sources: 'Fuentes',
  },

  cta: {
    title: '¿Listo para mejorar la protección de tu equipo?',
    body: 'Haz que la prevención de lesiones esté a tu alcance. Contacta a nuestro equipo de implementación para llevar Bexo a tus instalaciones.',
  },

  newsletter: {
    eyebrow: 'Boletín',
    title: 'Sigue nuestro avance.',
    muted: 'Novedades de ARMOR.',
    body: 'Resultados de investigación, novedades de producto e hitos de la empresa, directamente en tu correo.',
    emailLabel: 'Correo electrónico',
    placeholder: 'Tu correo electrónico',
    subscribe: 'Suscribirme',
    fine: 'Gratis. Cancela cuando quieras.',
  },

  home: {
    heroTitle: 'Protege a tu equipo.',
    heroMuted: 'Potencia su rendimiento.',
    heroBody:
      'Exotrajes lumbares ligeros y portátiles que reducen hasta un 38 % la activación de los músculos de la zona lumbar, protegiendo a los trabajadores y mejorando la productividad.',
    exploreBexo: 'Descubrir Bexo',
    photoAlt: 'Trabajador con el exotraje lumbar Bexo en un almacén',
    photoPill: 'Bexo V3',
    photoTitle: 'Bexo',
    photoMuted: 'Exotraje lumbar portátil',
    stats: [
      { value: 'Hasta 38 %', label: 'Menos activación máxima de los músculos lumbares' },
      { value: '2,25 kg', label: 'Traje híbrido completo' },
      { value: '25+', label: 'Años de investigación combinada en exoesqueletos' },
      { value: '0', label: 'Cambios necesarios en los flujos de trabajo' },
    ],
    backedBy: 'Con el respaldo de',
    shieldEyebrow: 'Shield',
    shieldTitle: 'Mide cada levantamiento.',
    shieldBody:
      'Shield Ergonomics Studio convierte los datos de sensores portátiles en puntuaciones de postura en vivo, para medir el riesgo en lugar de suponerlo.',
    shieldAlt: 'Panel de Shield Ergonomics Studio con un modelo corporal 3D y puntuaciones de postura',
    previewShield: 'Ver Shield',
    shieldFeatures: [
      { title: 'Modelo corporal 3D', body: 'Sensores IMU portátiles animan un esqueleto en vivo con cada movimiento.' },
      { title: 'Puntuación de postura', body: 'Evaluaciones NIOSH, REBA y RULA en tiempo real.' },
      { title: 'Telemetría en tiempo real', body: 'Historial de señales con exportación a CSV en cada sesión.' },
    ],
    exploreShield: 'Descubrir Shield',
  },

  industries: {
    eyebrow: 'Industrias',
    title: 'Diseñado para quienes',
    muted: 'levantan a otras personas.',
    intro:
      'El personal sanitario soporta una de las mayores cargas de lesiones musculoesqueléticas de cualquier sector en EE. UU. Bexo lleva soporte lumbar a los momentos a los que no llegan los equipos de elevación.',
    statsTitle: 'Movilizar pacientes es un trabajo pesado.',
    stats: [
      { value: '59,6 %', label: 'de 973 profesionales sanitarios encuestados declara haber tenido un trastorno o dolor musculoesquelético relacionado con el trabajo.', source: 1 },
      { value: '5×', label: 'la tasa media de lesiones por sobreesfuerzo en auxiliares de enfermería frente a todas las ocupaciones: 118 frente a 23 por cada 10.000 trabajadores.', source: 2 },
      { value: '7,0 kN', label: 'de compresión máxima en la columna lumbar al desplazar a un paciente hacia la cabecera de la cama.', source: 3 },
      { value: '82 %', label: 'de las lesiones al movilizar pacientes ocurrieron sin usar equipos de elevación, que se emplean en solo un 21 % de los traslados.', source: 4 },
    ],
    needTitle: 'Donde más se necesita.',
    needBody: 'Siempre que se mueve a una persona a mano, la carga recae en la zona lumbar de quien la cuida.',
    settings: [
      {
        title: 'Hospitales y rehabilitación',
        body: 'Los traslados de la cama a la silla, los desplazamientos laterales y la recolocación en la cama generan las mayores cargas en la columna en el cuidado de pacientes. Un traje que se lleva todo el turno está ahí también para el traslado imprevisto.',
      },
      {
        title: 'Residencias asistidas',
        body: 'Las habitaciones tipo apartamento rara vez tienen grúas de techo y el personal suele trasladar a los residentes en solitario. Las lesiones por sobreesfuerzo son un 40 % más frecuentes que en hospitales: 65 frente a 47 por cada 10.000 trabajadores.',
        source: 2,
      },
      {
        title: 'Equipos de emergencias',
        body: 'Paramédicos y técnicos de emergencias levantan y cargan pacientes en hogares, escaleras y carreteras, donde no hay ningún equipo de elevación.',
        source: 6,
      },
      {
        title: 'Cuidadores en el hogar',
        body: 'Familiares y cuidadores informales movilizan a sus seres queridos cada día, sin formación, sin equipos y sin nadie que les ayude.',
      },
    ],
    gapTitle: 'Las opciones actuales dejan un vacío.',
    gaps: [
      { title: 'Equipos de elevación', body: 'Son eficaces cuando se usan, pero suelen estar guardados y tardan en prepararse. En la mayoría de los traslados no se utilizan.', source: 4 },
      { title: 'Fajas lumbares', body: 'Un ensayo con 312 trabajadores no encontró reducción del dolor de espalda ni de las bajas, y solo el 43 % la llevó al menos la mitad del tiempo.', source: 5 },
      { title: 'Exoesqueletos rígidos', body: 'Son potentes, pero pesados y voluminosos cerca de pacientes, vías y monitores, y los trajes pasivos de perfil fijo no se adaptan al peso del paciente.' },
    ],
    gapSummary:
      'Bexo se lleva como un chaleco durante todo el turno, pesa 0,75 kg en su versión pasiva y añade asistencia motorizada solo en los levantamientos más pesados.',
    beyondEyebrow: 'Más allá de la salud',
    beyondTitle: 'Donde la espalda carga el peso.',
    beyondBody: 'El mismo hardware se aplica, con pocas modificaciones, a otros trabajos de gran exigencia física.',
    others: [
      {
        title: 'Manufactura y automoción',
        body: 'Las líneas de montaje y los talleres de mantenimiento exigen flexionarse y levantar peso durante todo el turno. El traje pasivo puede entregarse al personal de línea sin limitar sus movimientos.',
      },
      {
        title: 'Logística y almacenes',
        body: 'Los equipos de almacén y operadores 3PL pueden reducir la tensión lumbar en turnos largos, sin invertir en costosa automatización ni rediseñar sus procesos.',
      },
      {
        title: 'Construcción',
        body: 'Manipular materiales en obra implica levantamientos pesados y en posturas forzadas, en condiciones cambiantes y lejos de cualquier equipo de elevación.',
      },
      {
        title: 'Rehabilitación y rendimiento deportivo',
        body: 'La asistencia ajustable permite a los preparadores físicos fijar cuánta ayuda recibe la zona lumbar y reducirla a medida que el atleta vuelve al entrenamiento completo, registrando cada repetición.',
      },
      {
        title: 'Defensa',
        body: 'Militares y equipos de apoyo levantan y transportan cargas pesadas sobre el terreno, donde un traje ligero y de bajo perfil marca la diferencia.',
      },
    ],
  },

  overview: {
    title: 'Soluciones.',
    subtitle: 'Soporte portátil para el cuerpo y los datos que demuestran que funciona.',
    bexoTitle: 'Exotraje lumbar portátil.',
    bexoBody: 'Configuraciones pasiva e híbrida para todo tipo de levantamiento.',
    passiveAlt: 'Render de Bexo Passive',
    hybridAlt: 'Render de Bexo Hybrid',
    shieldTitle: 'Estudio de ergonomía.',
    shieldBody: 'Puntuación de postura en vivo a partir de sensores IMU portátiles.',
    shieldAlt: 'Panel de Shield Ergonomics Studio',
  },

  bexo: {
    eyebrow: 'Bexo',
    title: 'Conoce Bexo.',
    subtitle: 'Seguridad integrada en cada movimiento.',
    intro:
      'Bexo es la tercera generación de exotrajes lumbares accionados por cables desarrollados con el EPIC Lab de Georgia Tech, respaldada por un equipo con más de 25 años de investigación en exoesqueletos. Un único traje modular, pasivo o híbrido.',
    configs: [
      {
        name: 'Bexo Passive',
        weight: '0,75 kg',
        body: 'Las bandas elásticas almacenan energía al inclinarte y la devuelven al incorporarte. Sin motores, baterías ni electrónica, por lo que es fácil de ajustar y llevar todo el día.',
        alt: 'Render de Bexo Passive, vista trasera sobre un maniquí',
      },
      {
        name: 'Bexo Hybrid',
        weight: '2,25 kg en total con el módulo de 1,5 kg',
        body: 'Acopla el módulo activo para levantamientos pesados y repetitivos. Dos motores accionados por cables, dispuestos en X sobre la zona lumbar, añaden fuerza en el punto más bajo del levantamiento.',
        alt: 'Render de Bexo Hybrid, vista trasera sobre un maniquí',
      },
    ],
    weightEyebrow: 'El traje híbrido completo',
    weightValue: '2,25 kg',
    weightBody: 'Todo lo necesario para un soporte lumbar motorizado, lo bastante ligero para llevarlo durante todo el turno.',
    weightParts: [
      { value: '0,75 kg', label: 'Base pasiva' },
      { value: '1,5 kg', label: 'Módulo activo' },
    ],
    howTitle: 'Ayuda que se adapta a cada levantamiento.',
    howBody:
      'Los trajes de perfil fijo dan la misma ayuda para alcanzar algo ligero que para un traslado pesado. Bexo ajusta su asistencia a lo que está haciendo tu cuerpo.',
    steps: [
      { title: 'Detecta', body: 'Un sensor inercial en el tronco registra cómo te inclinas y levantas, 100 veces por segundo.' },
      { title: 'Estima', body: 'El controlador estima en tiempo real la carga sobre tu zona lumbar, sin necesidad de reconocer antes la tarea.' },
      { title: 'Asiste', body: 'La tensión de los cables se ajusta a una parte de esa carga, mientras las bandas elásticas acompañan el resto del movimiento.' },
    ],
    resultsEyebrow: 'Probado en laboratorio',
    resultsHeadline: 'Hasta 38 %',
    resultsBody: 'menos activación de los músculos lumbares en levantamientos simétricos con asistencia activa.',
    results: [
      { value: '14 %', label: 'menos activación máxima de los músculos de la espalda con la configuración híbrida', source: 2 },
      { value: '18 %', label: 'menos activación integrada de los músculos de la espalda con la configuración híbrida', source: 2 },
      { value: '62 %', label: 'menos energía que la asistencia solo con motor al bajar la carga, sin perder alivio muscular', source: 2 },
    ],
    resultsNote: 'Los participantes valoraron la configuración híbrida como la más útil y la más cómoda de todas las condiciones probadas.',
    features: [
      { title: 'Integración ergonómica', body: 'De bajo perfil y ligero. Se lleva como un chaleco.' },
      { title: 'Sin restricciones', body: 'Diseñado para interferir lo mínimo con el movimiento natural.' },
      { title: 'Soporte dinámico', body: 'La actuación híbrida ofrece soporte justo cuando se necesita.' },
      { title: 'Implementación escalable', body: 'Un camino sencillo desde el piloto inicial hasta toda la plantilla.' },
    ],
  },

  shield: {
    eyebrow: 'Shield',
    title: 'Mide cada levantamiento.',
    intro:
      'Shield Ergonomics Studio convierte los sensores IMU portátiles en un modelo corporal 3D en vivo, con puntuación de postura NIOSH, REBA y RULA y telemetría en tiempo real.',
    openPreview: 'Abrir la vista previa de Shield',
    dashboardAlt:
      'Shield Ergonomics Studio en modo claro: un esqueleto 3D en pleno levantamiento con la espalda flexionada junto a las puntuaciones NIOSH, REBA y RULA',
    scoresAlt: 'Puntuaciones de postura de Shield durante un levantamiento flexionado: NIOSH 2 de 10, REBA 3 de 15, RULA 4 de 7',
    features: [
      { title: 'Modelo corporal 3D', body: 'Nodos de sensores IMU colocados en el cuerpo animan en vivo un esqueleto con cada movimiento.' },
      { title: 'Puntuación de postura', body: 'Evaluaciones de levantamiento NIOSH, REBA y RULA calculadas en tiempo real.' },
      { title: 'Telemetría en tiempo real', body: 'Historial de señales de varios nodos, con exportación a CSV en cada sesión.' },
    ],
    dataEyebrow: 'Flujo de datos',
    dataTitle: 'Cada sensor, en vivo.',
    dataMuted: 'Cada eje, registrado.',
    dataBody: 'Estado, batería y orientación de cada sensor, con historial de señales en varios ejes que puedes exportar a CSV.',
    dataAlt: 'Pestaña de flujo de datos de Shield con ocho nodos de sensores activos y una curva en vivo de la inclinación de la columna durante un levantamiento',
  },

  contact: {
    title: '¿Listo para mejorar la protección de tu equipo?',
    body: 'Haz que la prevención de lesiones esté a tu alcance. Contacta a nuestro equipo de implementación para llevar Bexo a tus instalaciones.',
    demoTitle: 'Reserva una demo',
    demoBody: 'Elige el horario que mejor te venga y mira Bexo en acción.',
    demoLink: 'Agendar en Calendly',
    emailTitle: 'Escríbenos',
    emailBody: 'Preguntas sobre pilotos, precios o implementación.',
    emailLink: 'Contacto',
    newsletterTitle: 'Boletín',
    newsletterBody: 'Noticias de la empresa y novedades de producto, directamente en tu correo.',
    newsletterLink: 'Suscribirme',
    followTitle: 'Síguenos',
    followBody: 'Conoce ARMOR sobre el terreno y detrás de escena.',
  },

  notFound: {
    title: 'Página no encontrada.',
    body: 'La página que buscas no existe.',
    back: 'Volver al inicio',
  },

  meta: {
    '/': {
      title: 'ARMOR | Seguridad integrada en cada movimiento',
      description:
        'ARMOR está dando forma al futuro de la movilidad humana con robots portátiles. Conoce Bexo, un exotraje lumbar ligero, y Shield, un estudio de ergonomía en tiempo real.',
    },
    '/industries': {
      title: 'Industrias | ARMOR',
      description:
        'Bexo ayuda a enfermeras, cuidadores de residencias, equipos de emergencias y otros trabajos exigentes a reducir la tensión lumbar al movilizar pacientes y levantar cargas.',
    },
    '/solutions': {
      title: 'Soluciones | ARMOR',
      description:
        'Descubre las soluciones de ARMOR: Bexo, un exotraje lumbar modular pasivo e híbrido, y Shield, un estudio de ergonomía con sensores IMU y puntuación de postura en vivo.',
    },
    '/solutions/bexo': {
      title: 'Exotraje lumbar Bexo | ARMOR',
      description:
        'Bexo es un exotraje lumbar modular de 2,25 kg con configuraciones pasiva e híbrida que reduce hasta un 38 % la activación máxima de los músculos lumbares.',
    },
    '/solutions/shield': {
      title: 'Shield Ergonomics Studio | ARMOR',
      description:
        'Shield convierte los sensores IMU portátiles en un modelo corporal 3D en vivo con puntuación de postura NIOSH, REBA y RULA y telemetría en tiempo real.',
    },
    '/contact': {
      title: 'Contacto | ARMOR',
      description: 'Reserva una demo de Bexo, escribe al equipo de ARMOR o suscríbete a nuestro boletín para recibir resultados de investigación y novedades de producto.',
    },
    notFound: {
      title: 'Página no encontrada | ARMOR',
      description: 'La página que buscas no existe.',
    },
  },
};
