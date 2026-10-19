# Driveo Car

Sitio web mobile-first en español para presentar un servicio de transporte interurbano y recibir solicitudes de cotización por WhatsApp. Las rutas, tarifas y datos de contacto están pendientes de confirmación; no se publican datos comerciales inventados.

## Requisitos

- Node.js 18.18 o posterior para Next.js 15.
- npm.

## Desarrollo

Instala dependencias con `npm install` y ejecuta `npm run dev`. Abre `http://localhost:3000` en el navegador.

## Verificación de producción

Ejecuta `npm run build` para compilar y `npm start` para servir el resultado.

## Configuración antes de publicar

1. El número oficial de WhatsApp ya está configurado en `src/app/page.tsx` como `573122919236` (formato internacional, solo dígitos). El formulario abre un mensaje con origen, destino, fecha, hora, pasajeros y equipaje.
2. Sustituye las entradas de rutas por rutas, horarios y tarifas confirmados. Si el equipo todavía no ofrece rutas concretas, conserva el aviso de consulta.
3. Completa y revisa las secciones de términos y privacidad con el nombre legal del responsable, las condiciones reales de cambio/cancelación y la normativa del lugar donde opere el negocio.
4. Revisa el texto de marca y añade únicamente fotos autorizadas, ubicación y datos de redes oficiales si se desean incluir.
5. Verifica las consultas por WhatsApp y el sitio en móvil, teclado y lector de pantalla antes de publicar.

No incluye pagos, cuentas, panel administrativo, base de datos ni disponibilidad en tiempo real. El número oficial de WhatsApp está configurado para activar el contacto directo.
