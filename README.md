# Procesador de Imágenes con Node.js

Este script de Node.js te permite procesar imágenes en una carpeta y sus subcarpetas, reduciendo el tamaño de los archivos sin perder calidad y manteniendo la estructura de carpetas original. Puede ser útil para optimizar imágenes en lotes, por ejemplo, después de un evento fotográfico.

## Requisitos

Asegúrate de tener Node.js instalado en tu sistema. También, necesitarás las siguientes bibliotecas:

- sharp: Para el procesamiento de imágenes.
- fs-extra: Para la manipulación de archivos y carpetas.
- yargs: Para el manejo de argumentos de línea de comandos.

Puedes instalar estas bibliotecas ejecutando el siguiente comando:

```bash
    npm install sharp fs-extra yargs
```
## Uso

1. Clona o descarga este repositorio en tu computadora.

2. Abre una terminal y navega hasta el directorio del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias que has definido en tu archivo package.json:

```bash

npm install
```
4. Ejecuta el script proporcionando la carpeta de origen como argumento:

```bash

    node procesar_imagenes.js --source [carpeta_origen]
```
Reemplaza [carpeta_origen] con la ruta de la carpeta que deseas procesar.

5.  El script procesará todas las imágenes en la carpeta de origen y sus subcarpetas. Las imágenes redimensionadas se guardarán en una carpeta llamada [carpeta_origen]_reduced.

6.  El proceso completado se mostrará en la terminal.

## Personalización
Puedes personalizar la calidad y el formato de salida en el script editando las siguientes líneas:

``` JavaScript
    // Redimensiona y convierte la imagen a formato JPEG con compresión
sharp(sourcePath)
  .toFormat('jpeg', { quality: 70 }) // Ajusta la calidad según tus necesidades
  .toFile(destinationItemPath, (err, info) => {
    if (err) {
      console.error(`Error al procesar ${item}: ${err}`);
    } else {
      console.log(`Procesada: ${item}`);
    }
  });


```
Ajusta el valor de quality para controlar la compresión y la calidad de las imágenes. También, puedes cambiar el formato de salida (por ejemplo, a PNG) si es necesario.

## Contribuciones

Si deseas contribuir o mejorar este script, ¡eres bienvenido! Si tienes ideas o encuentras problemas, no dudes en abrir un problema o una solicitud de extracción en este repositorio.


⌨️ con ❤️ por [Toffy Caluga](https://github.com/toffycaluga)


