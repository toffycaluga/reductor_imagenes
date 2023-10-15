const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const fse = require('fs-extra');
const yargs = require('yargs');

// Configuración de argumentos de línea de comandos
const argv = yargs
    .usage('Usage: $0 --source [folder]')
    .demandOption(['source'])
    .argv;

const sourceFolder = argv.source;
const destinationFolder = `${sourceFolder}_reduced`;

// Función para procesar imágenes en una carpeta y sus subcarpetas
function processImagesInFolder(folder) {
    // Obtén una lista de archivos y subcarpetas en la carpeta
    const items = fs.readdirSync(folder);

    // Crear la estructura de carpetas en la carpeta de destino
    const relativePath = path.relative(sourceFolder, folder);
    const destinationPath = path.join(destinationFolder, relativePath);
    fse.ensureDirSync(destinationPath);

    // Procesa cada archivo o subcarpeta en la carpeta
    items.forEach((item) => {
        const sourcePath = path.join(folder, item);
        const destinationItemPath = path.join(destinationPath, item);

        if (fs.statSync(sourcePath).isDirectory()) {
            // Si es una subcarpeta, procesa su contenido de manera recursiva
            processImagesInFolder(sourcePath);
        } else {
            // Verifica si el archivo es una imagen
            if (item.match(/\.(jpg|jpeg|png|gif)$/)) {
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
            } else {
                // Si no es una imagen, simplemente copia el archivo a la carpeta de destino
                fse.copySync(sourcePath, destinationItemPath);
                console.log(`Copiado: ${item}`);
            }
        }
    });
}

// Crear la carpeta de destino si no existe
if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
}

// Procesa todas las imágenes en la carpeta y sus subcarpetas manteniendo la estructura
processImagesInFolder(sourceFolder);

console.log('Proceso completado.');
