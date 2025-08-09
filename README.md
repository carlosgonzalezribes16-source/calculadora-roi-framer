
# Calculadora ROI · codeX (Themable)

Listo para Vercel + Framer (iframe). Incluye dos estilos de fondo:
- **Transparente (por defecto)**: perfecto para incrustar sobre tu propia sección en Framer.
- **Lavender**: degradado suave parecido al de tu página.

## Desarrollo local
```bash
npm install
npm run dev
```

## Despliegue en Vercel
- Vercel detecta Vite automáticamente. Build: `npm run build`, Output: `dist`.

## Modo de fondo por URL
- Transparente (default): `https://TU-APP.vercel.app`
- Lavender: `https://TU-APP.vercel.app/?bg=lavender`

## Incrustar en Framer
```html
<!-- Transparente -->
<iframe src="https://TU-APP.vercel.app" width="100%" height="760" style="border:none;"></iframe>

<!-- Con degradado lavanda -->
<iframe src="https://TU-APP.vercel.app/?bg=lavender" width="100%" height="760" style="border:none;"></iframe>
```
