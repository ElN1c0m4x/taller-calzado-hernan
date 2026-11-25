# Taller de Calzado Hernán — Landing page

Sitio estático hecho con [Astro](https://astro.build). Casi sin JavaScript, rápido y listo para Vercel.

## Requisitos
- Node.js 18.20+ (recomendado 20 o 22)

## Instalar y correr localmente
```bash
npm install
npm run dev        # http://localhost:4321
```

Otros comandos:
```bash
npm run build      # genera la carpeta dist/
npm run preview    # prueba el build local
```

## Dónde se edita cada cosa
| Qué | Dónde |
|---|---|
| Teléfono, WhatsApp, horarios, dirección, redes, mapa, servicios, galería | `src/data/site.ts` (único lugar) |
| Textos y estructura de cada sección | `src/components/` |
| Colores, tipografías, espaciados | `src/styles/global.css` (variables en `:root`) |
| Fotos de trabajos | `public/trabajos/` |

### Cargar WhatsApp / horarios / mapa
Abrí `src/data/site.ts` y reemplazá los `null`:
- `whatsapp: '549XXXXXXXXXX'` → aparece el botón de WhatsApp en portada y contacto.
- `horarios: [{ dias: 'Lunes a viernes', horas: '…' }]` → aparece en Contacto.
- `direccion.mapsUrl` y `direccion.mapsEmbedUrl` → botón "Cómo llegar" exacto y mapa incrustado.
- Cuando todo esté completo, poné `mostrarPendientes = false`.

### Agregar fotos
Copiá la imagen (mejor `.webp`, ~1000 px) a `public/trabajos/` y sumá un ítem en `trabajos` dentro de `site.ts`. Para antes/después usá `antes` y `despues`.

## Publicar en Vercel
1. Subí la carpeta a un repositorio de GitHub.
2. En vercel.com → **Add New → Project** → importá el repo.
3. Vercel detecta Astro solo (build: `npm run build`, salida: `dist`). Deploy.

No hay variables de entorno ni claves.

Los datos que faltan confirmar están en `PENDIENTES.md`.
