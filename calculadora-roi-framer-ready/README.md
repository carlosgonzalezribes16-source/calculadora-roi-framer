
# Calculadora ROI · codeX (Ready for Vercel + Framer iframe)

Este proyecto es una plantilla mínima de **React + Vite** que renderiza tu calculadora de ROI.
Está listo para desplegar en **Vercel** y luego incrustar en **Framer** con un `<iframe>`.

## Requisitos
- Node.js 18+
- Cuenta en Vercel

## Desarrollo local
```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Despliegue en Vercel
1. Sube esta carpeta a un repo de GitHub (o haz `vercel` directamente si usas la CLI).
2. En Vercel: **Add New → Project** y elige el repo.
3. Vercel detectará Vite automáticamente. Build: `npm run build`, Output: `dist`.
4. Publica. Obtendrás una URL como `https://calculadora-roi.vercel.app`.

## Incrustar en Framer
En tu página, añade un bloque **Embed** con:
```html
<iframe src="https://TU-URL.vercel.app" width="100%" height="760" style="border:none;"></iframe>
```

---
> Notas
- He eliminado dependencias de UI (shadcn/ui) y Tailwind para simplificar y que funcione out‑of‑the‑box.
- Se mantiene **Recharts** para la gráfica.
- Si quieres estilos más avanzados, puedes añadir Tailwind más adelante.
