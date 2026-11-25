import { site } from './site';

export const whatsappUrl = (): string | null =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMensaje)}`
    : null;

export const direccionCompleta = () =>
  `${site.direccion.calle}, ${site.direccion.ciudad} (CP ${site.direccion.cp})`;

export const mapsLink = (): string =>
  site.direccion.mapsUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.direccion.calle}, San Pedro, Buenos Aires, Argentina`
  )}`;
