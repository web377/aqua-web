# Industrias Aqua — tienda en línea

Reglas para cualquier agente que trabaje en este repositorio. Aplican a todas las tareas.

## Cómo se trabaja
- Cada tarea es acotada. Haz solo lo que pide; si algo fuera de ella parece necesario, repórtalo en vez de hacerlo.
- Antes de declarar una tarea terminada deben pasar npm run lint, npm run typecheck, npm test y npm run build.
- Sistema de desarrollo: Windows con PowerShell, sin permisos de administrador. Trabaja solo dentro del repositorio.
- Los commits los hace Samuel desde GitHub Desktop. No hagas commits, push ni cambios en el historial de Git.

## Prohibido
- Instalar paquetes globales o cambiar PATH, variables del sistema, Execution Policy, firewall o antivirus.
- Agregar dependencias que la tarea no pida.
- Escribir secretos o llaves en el código, en commits o en .env.example. Los valores van solo en .env.local (ignorado por Git) y en Vercel.
- Usar llaves de producción de cualquier servicio.
- Aplicar migraciones o modificar el proyecto remoto de Supabase. Las migraciones se escriben en supabase/migrations/ y las aplica una persona después de revisarlas.
- Comandos destructivos (rm -rf, git reset --hard, git clean -fd, force push).

## Seguridad
- Todo monto se calcula en el servidor con los precios de la base de datos. Nunca se confía en un precio o total que venga del navegador.
- RLS activo en todas las tablas. La llave secreta de Supabase solo existe en código de servidor.
- Toda entrada se valida en el servidor. Los formularios públicos llevan Cloudflare Turnstile.
- Los datos personales nunca se escriben en logs ni viajan en la URL.
- La sesión vive en cookies httpOnly con @supabase/ssr, nunca en localStorage.
- Un pedido solo pasa a "pagado" desde el panel, por una persona autorizada; nunca desde una acción del comprador.

## Contenido
- Nada de texto de relleno ni datos inventados (testimonios, cifras, reseñas, teléfonos). Si un dato no existe, la sección no se muestra.
- Datos del negocio solo en content/business.ts; textos legales en content/legal/ con versión; banners en content/banners.ts.
- Un solo precio por producto con IVA incluido (lista 1 de Ribisoft): sin descuentos, cupones, precios especiales ni combos.
- Sin cantidades de stock en la página: una variante está disponible o agotada.
- Interfaz en español de Colombia. Comentarios del código en español, explicando el porqué cuando no es obvio.

## Interfaz
- Plus Jakarta Sans con next/font (solo latín) e íconos SVG; nada de fuentes de íconos.
- Precios y fechas con Intl en es-CO y zona America/Bogota, desde un solo helper; números tabulares en precios y totales.
- Filtros, orden, búsqueda y página del catálogo en la URL. La navegación usa <Link>, no onClick.
- Imágenes con next/image y dimensiones fijas; priority solo en las visibles al cargar.
- Áreas táctiles de mínimo 44 px; campos de mínimo 16 px en celular.
- Formularios: label en cada campo, autocomplete e inputmode correctos, sin corrector en correos, errores junto al campo, foco en el primer error, botón de enviar habilitado hasta el envío y luego con indicador de carga, valores recortados.
- Paneles y modales: foco atrapado, cierre con Escape, retorno del foco, overscroll-behavior: contain.
- Avisos asíncronos con aria-live="polite". Botones de solo ícono con nombre accesible.
- Nada de avance automático sin pausa; respetar prefers-reduced-motion. Animar solo transform y opacity; nunca transition: all.
- Estados vacíos y de error en cada lista, formulario y paso de compra.
- Los estados ("Agotado" y otros) se indican con texto, no solo con color. Jerarquía de títulos correcta y enlace para saltar al contenido.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
