# Instrucciones para agregar imágenes reales de Full Chamba

## Ubicación de las imágenes
Las imágenes deben colocarse en la carpeta: `public/fullChamba/`

## Nombres de archivos requeridos:
- `envio.png` o `envio.jpg` - Pantalla de envío de aplicación
- `home.png` o `home.jpg` - Pantalla principal con ofertas laborales
- `login.png` o `login.jpg` - Pantalla de inicio de sesión
- `postulando.png` o `postulando.jpg` - Proceso de postulación en progreso
- `postular.png` o `postular.jpg` - Formulario de postulación
- `postulacionEnviada.png` o `postulacionEnviada.jpg` - Confirmación de envío

## Cómo reemplazar:
1. Guarda las capturas de pantalla de tu app con los nombres exactos mencionados arriba
2. Cópialas a la carpeta `public/fullChamba/`
3. Si usas PNG o JPG, actualiza las extensiones en el archivo `src/components/ProjectModal.jsx` en la línea donde se definen las rutas de las imágenes

## Formato recomendado:
- **Formato**: PNG (mejor calidad) o JPG
- **Resolución**: Preferiblemente resolución de teléfono móvil (por ejemplo: 375x812 para iPhone, 360x640 para Android)
- **Calidad**: Alta resolución para que se vean nítidas en el modal

## Ejemplo de actualización en el código:
Si tus imágenes son PNG, cambia las rutas en `ProjectModal.jsx`:
```javascript
src: '/fullChamba/envio.png'  // En lugar de .svg
```

¡Las imágenes placeholder (SVG) funcionarán hasta que agregues las reales!
