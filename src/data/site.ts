/**
 * ÚNICO lugar para completar o actualizar datos del taller.
 * Todo valor `null` es un dato pendiente: mientras `mostrarPendientes` sea true,
 * Contacto y Ubicación muestran un aviso "Pendiente" claramente identificable.
 * Poné `mostrarPendientes` en false para ocultar esos avisos antes de publicar.
 * Ver PENDIENTES.md.
 */
export const mostrarPendientes = true;

export const site = {
  nombre: 'Taller de Calzado Hernán',
  // URL pública (completar al publicar en Vercel). Se usa solo para metadatos.
  url: null as string | null,

  direccion: {
    calle: 'Bartolomé Mitre 2397',
    ciudad: 'San Pedro, Buenos Aires, Argentina',
    cp: '2930',
    // PENDIENTE: pegar acá el enlace de "Compartir" de Google Maps cuando el taller lo confirme.
    // Mientras tanto se usa una búsqueda por dirección (enlace real, sin coordenadas inventadas).
    mapsUrl: null as string | null,
    // PENDIENTE: URL "embed" de Google Maps para mostrar el mapa incrustado.
    mapsEmbedUrl: null as string | null,
  },

  redes: {
    instagram: { usuario: 'tallerdelcalzadohernan', url: 'https://www.instagram.com/tallerdecalzadohernan/' },
    facebook: { usuario: 'Tallerdelcalzadohernan', url: 'https://www.facebook.com/profile.php?id=61575417453572' },
  },

  // PENDIENTE: número en formato internacional sin "+" ni espacios (ej. 5493329XXXXXX).
  // Mientras sea null, los botones de WhatsApp NO se muestran.
  whatsapp: null as string | null,
  whatsappMensaje: 'Hola, quería consultar por un arreglo.',

  // PENDIENTE: teléfono fijo/celular para mostrar (si se confirma).
  telefono: null as string | null,

  // PENDIENTE: días y horarios. Ejemplo de formato: [{ dias: 'Lunes a viernes', horas: '9 a 13 y 16 a 20' }]
  horarios: null as { dias: string; horas: string }[] | null,

  // PENDIENTE: confirmar con el responsable. Mientras sea null no se publica ningún dato de experiencia.
  experiencia: null as string | null,
};

export const servicios = [
  {
    id: 'calzado',
    titulo: 'Reparación de calzados',
    texto: 'Arreglos para tu calzado de todos los días: lo revisamos y lo ponemos a punto para que siga acompañándote.',
    icono: 'zapato',
  },
  {
    id: 'valijas',
    titulo: 'Costura y reparación de valijas',
    texto: 'Costuras y arreglos en valijas para que estén listas para el próximo viaje.',
    icono: 'valija',
  },
  {
    id: 'mochilas',
    titulo: 'Cambio de cierres y arreglos de mochilas',
    texto: 'Cambio de cierres y reparaciones en mochilas.',
    icono: 'cierre',
  },
  {
    id: 'bolsos',
    titulo: 'Arreglos de bolsos y carteras',
    texto: 'Arreglos en bolsos y carteras, con cuidado por el detalle.',
    icono: 'bolso',
  },
];

/**
 * Galería de trabajos. Para sumar fotos: copiar la imagen a /public/trabajos
 * (idealmente .webp, ~1000 px) y agregar un ítem acá.
 * Para un antes/después usar `antes` y `despues` en lugar de `src`.
 */
export const trabajos: {
  src?: string;
  antes?: string;
  despues?: string;
  alt: string;
}[] = [
  { src: '/trabajos/bota-cuero.webp', alt: 'Botas de cuero color miel con suela de goma, sobre el mostrador del taller' },
  { src: '/trabajos/sandalias-tachas.webp', alt: 'Sandalias de plataforma con tiras de cuero y tachas, montadas sobre hormas' },
  { src: '/trabajos/sandalias-negras.webp', alt: 'Sandalias negras de taco ancho con cuero grabado y tiras elásticas' },
];

// Cantidad de espacios vacíos "Próximamente" que se muestran al final de la galería.
export const espaciosGaleriaPendientes = 3;

export const sobreElTaller = [
  'Somos un taller de compostura y reparación de calzados, valijas, mochilas, bolsos y carteras en San Pedro.',
  'Trabajamos en Bartolomé Mitre 2397. Si tenés dudas sobre un arreglo, escribinos o pasá por el taller.',
];
