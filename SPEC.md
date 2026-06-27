# SPEC - Arquitectura del sitio Colibri Detalles

## 1. Objetivo

Crear un sitio web profesional para Colibri Detalles con estilo visual limpio, elegante y tipo Tesla: secciones amplias, fotografias protagonistas, textos breves y botones claros para convertir visitantes en clientes.

El sitio debe permitir que una persona comun pueda realizar tareas simples sin depender de un programador, especialmente:

- Subir fotos nuevas de trabajos.
- Agregar trabajos al portafolio.
- Editar textos basicos del sitio.
- Cambiar datos de contacto.
- Publicar novedades o promociones simples.

## 2. Publico objetivo

Personas que buscan detalles personalizados, regalos, decoraciones o trabajos especiales para eventos, fechas importantes o pedidos personalizados.

El sitio debe transmitir:

- Confianza.
- Cuidado por los detalles.
- Profesionalismo.
- Calidez.
- Estilo visual delicado y moderno.

## 3. Identidad visual

La identidad parte del logo actual: una C blanca con colibri sobre fondo amarillo/dorado.

### Paleta principal

- Dorado principal: `#F6BE4F`
- Dorado oscuro: `#B9851E`
- Blanco: `#FFFFFF`
- Negro suave: `#171717`
- Gris calido: `#F7F4EF`

### Estilo

- Minimalista.
- Limpio.
- Fotografias grandes.
- Mucho espacio en blanco.
- Botones simples y elegantes.
- Animaciones suaves, sin exceso.
- Sensacion premium, pero cercana y artesanal.

### Tipografias recomendadas

- Titulos: `Playfair Display` o `Cormorant Garamond`.
- Texto general: `Inter`, `Montserrat` o `Poppins`.

## 4. Arquitectura general

El sitio debe estar organizado en pocas paginas faciles de entender.

```txt
/
  Inicio
/trabajos
  Galeria completa de trabajos
/trabajos/[slug]
  Detalle de un trabajo especifico
/servicios
  Servicios disponibles
/sobre-nosotros
  Historia y estilo de la marca
/contacto
  WhatsApp, Facebook, formulario y datos basicos
```

## 5. Pagina de inicio

La pagina principal debe funcionar como una landing visual tipo Tesla.

### Secciones

1. Hero principal
2. Servicios destacados
3. Trabajos recientes
4. Proceso de pedido
5. Sobre Colibri Detalles
6. Testimonios
7. Llamado final a cotizar
8. Footer

### Hero principal

Debe mostrar una fotografia destacada o fondo limpio con el logo.

Texto sugerido:

```txt
Detalles personalizados que hacen memorable cada momento.
```

Botones principales:

- Ver trabajos
- Cotizar por WhatsApp

## 6. Portafolio de trabajos

El portafolio es la parte mas importante del sitio. Debe permitir mostrar trabajos realizados de forma visual y ordenada.

### Categorias sugeridas

- Cumpleanos
- Eventos
- Regalos personalizados
- Decoracion
- Temporadas especiales
- Otros trabajos

### Informacion de cada trabajo

Cada trabajo debe tener:

```txt
Titulo
Categoria
Descripcion corta
Fotos
Fecha opcional
Texto para cotizar algo parecido
Estado destacado: si/no
```

Ejemplo:

```txt
Titulo: Detalle personalizado para cumpleanos
Categoria: Regalos personalizados
Descripcion: Detalle hecho a medida con presentacion elegante y colores calidos.
Fotos: 3 imagenes
Destacado: si
```

## 7. Servicios

Los servicios deben explicarse de forma simple, con imagenes y textos cortos.

Servicios iniciales sugeridos:

- Detalles personalizados.
- Regalos para fechas especiales.
- Recuerdos para eventos.
- Decoraciones tematicas.
- Trabajos por encargo.

Cada servicio debe tener:

```txt
Nombre
Descripcion breve
Imagen opcional
Boton para cotizar
```

## 8. Contacto y conversion

El sitio debe estar pensado para convertir visitas en mensajes.

### Acciones principales

- Boton fijo de WhatsApp.
- Boton de Facebook.
- Formulario simple opcional.
- Mensaje prellenado para pedir cotizacion.

Mensaje sugerido para WhatsApp:

```txt
Hola, vengo del sitio web de Colibri Detalles. Quiero cotizar un detalle personalizado.
```

## 9. Administracion sencilla

Para que una persona comun pueda hacer cambios simples, el sitio debe tener una de estas dos opciones.

### Opcion recomendada: CMS visual

Usar un panel administrativo facil como `Sanity`, `Decap CMS` o similar.

La persona podria entrar a una pantalla privada y editar:

- Trabajos.
- Fotos.
- Servicios.
- Textos del inicio.
- Datos de contacto.
- Testimonios.

Ventaja: no necesita tocar codigo.

### Opcion simple: carpetas y archivos

Si se quiere algo mas economico y directo, usar carpetas organizadas:

```txt
content/
  site.json
  trabajos/
    detalle-cumpleanos.md
    regalo-personalizado.md
  servicios/
    detalles-personalizados.md
public/
  images/
    trabajos/
    servicios/
    marca/
```

La persona solo tendria que:

- Poner fotos en `public/images/trabajos/`.
- Crear o copiar un archivo de trabajo en `content/trabajos/`.
- Cambiar textos simples dentro del archivo.

## 10. Modelo de contenido recomendado

### Configuracion general del sitio

Archivo sugerido: `content/site.json`

```json
{
  "brandName": "Colibri Detalles",
  "headline": "Detalles personalizados que hacen memorable cada momento.",
  "subheadline": "Creamos regalos, decoraciones y detalles especiales hechos a medida.",
  "whatsapp": "",
  "facebook": "https://www.facebook.com/profile.php?id=61574074611655",
  "location": "",
  "primaryColor": "#F6BE4F"
}
```

### Trabajo del portafolio

Archivo sugerido: `content/trabajos/nombre-del-trabajo.md`

```md
---
title: "Detalle personalizado para cumpleanos"
category: "Regalos personalizados"
description: "Detalle hecho a medida con presentacion elegante y colores calidos."
images:
  - "/images/trabajos/detalle-cumpleanos-1.jpg"
  - "/images/trabajos/detalle-cumpleanos-2.jpg"
featured: true
---

Texto adicional opcional sobre el trabajo.
```

## 11. Arquitectura tecnica recomendada

### Stack recomendado

- Framework: `Astro` o `Next.js`.
- Estilos: `Tailwind CSS`.
- Contenido: CMS visual o archivos Markdown.
- Hosting: `Vercel` o `Netlify`.
- Imagenes: optimizadas automaticamente.

### Recomendacion principal

Para este proyecto conviene usar `Astro` porque:

- Es rapido.
- Es ideal para sitios visuales y de portafolio.
- Requiere menos complejidad.
- Funciona muy bien con contenido en archivos.
- Es facil de desplegar en Netlify o Vercel.

## 12. Estructura tecnica propuesta

```txt
src/
  components/
    Header.astro
    Hero.astro
    ServiceCard.astro
    ProjectCard.astro
    GalleryGrid.astro
    ProcessSteps.astro
    WhatsAppButton.astro
    Footer.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    trabajos/
      index.astro
      [slug].astro
    servicios.astro
    sobre-nosotros.astro
    contacto.astro
  styles/
    global.css
content/
  site.json
  trabajos/
  servicios/
public/
  images/
    marca/
    trabajos/
    servicios/
```

## 13. Funciones esenciales

### Debe tener en la primera version

- Inicio visual profesional.
- Galeria de trabajos.
- Pagina individual por trabajo.
- Boton de WhatsApp.
- Datos de contacto.
- Seccion de servicios.
- Sitio responsive para celular.
- SEO basico.

### Puede agregarse despues

- Panel administrativo visual.
- Blog o novedades.
- Filtros avanzados por categoria.
- Testimonios administrables.
- Formulario conectado a correo.
- Integracion con Instagram o Facebook.

## 14. Reglas para que sea facil de mantener

- Las fotos deben estar separadas del codigo.
- Los textos principales deben estar en archivos de contenido o CMS.
- Los trabajos deben poder copiarse desde una plantilla.
- Cada trabajo debe tener una categoria.
- Las imagenes deben tener nombres simples, sin espacios ni acentos.
- El boton de WhatsApp debe aparecer en todas las paginas.
- La pagina debe poder crecer sin redisenar todo.

## 15. Flujo para subir un trabajo nuevo

1. Subir las fotos a `public/images/trabajos/`.
2. Crear un archivo nuevo en `content/trabajos/`.
3. Escribir titulo, categoria, descripcion e imagenes.
4. Guardar el archivo.
5. El sitio muestra automaticamente el nuevo trabajo.

## 16. Criterios de aceptacion

El proyecto estara bien construido si cumple esto:

- Una persona puede agregar un trabajo nuevo siguiendo una guia simple.
- El sitio se ve profesional en celular y escritorio.
- El visitante puede contactar por WhatsApp en menos de 2 clics.
- Los trabajos tienen fotos grandes y buena presentacion.
- La marca mantiene su color dorado, blanco y estilo delicado.
- La arquitectura permite agregar un CMS en el futuro sin rehacer todo.

## 17. Proxima fase

Despues de aprobar esta arquitectura, la siguiente fase debe ser crear la base del proyecto con:

- Estructura de carpetas.
- Componentes principales.
- Contenido de ejemplo.
- Guia simple para subir fotos y trabajos.
- Diseno visual inicial basado en el logo.
