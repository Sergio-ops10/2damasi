const images = [
    {
        src: "d9b2a48a-0b89-4de4-b037-b34c667682b1.jpg",
        time: "14/02/2026 0:27:27",
        title: "Instalación de Dependencias del Sistema",
        desc: "Configuración inicial del entorno en macOS. Ejecutando `brew install python git cmake` para instalar las herramientas esenciales para el proceso de fine-tuning."
    },
    {
        src: "eb53fe88-2708-4205-ba76-d6b00a8c70bc.jpg",
        time: "14/02/2026 0:27:39",
        title: "Borrador del Dataset",
        desc: "Creación de la primera versión de los datos de entrenamiento `train.json`. El ejemplo muestra una instrucción personalizada sobre 'Manolo Lama' para probar la inyección de conocimiento específico."
    },
    {
        src: "713653ec-141e-456f-bbe5-26a235e4d745.jpg",
        time: "14/02/2026 0:27:43",
        title: "Instalación de Librerías de Python",
        desc: "Instalando el ecosistema de librerías de Hugging Face: `torch`, `transformers`, `datasets`, `peft`, `accelerate`, y `bitsandbytes`."
    },
    {
        src: "29ac291d-e9f1-4db0-b053-144e737a947c.jpg",
        time: "14/02/2026 0:27:46",
        title: "Instalación de MLX",
        desc: "Instalando el framework de machine learning de Apple para Apple Silicon: `pip3 install mlx mlx-lm datasets`."
    },
    {
        src: "6feb5442-975a-409f-a8b1-5b93a4751a7b.jpg",
        time: "14/02/2026 0:27:50",
        title: "Verificación de Torch y Transformers",
        desc: "Asegurando que todas las librerías de aprendizaje profundo (`torch`, `torchvision`, `trl`) estén correctamente instaladas y actualizadas."
    },
    {
        src: "a7c4a996-23f7-49a8-b77c-920314d768ad.jpg",
        time: "14/02/2026 0:27:55",
        title: "Siguiendo la Guía - Configuración del Entorno",
        desc: "Referencia a la documentación/tutorial que se está siguiendo. Configurando un entorno virtual `venv_mlx` para mantener el espacio de trabajo limpio."
    },
    {
        src: "eaf768b6-825d-4e09-acf7-04876a856173.jpg",
        time: "14/02/2026 0:27:59",
        title: "Creación de train.json",
        desc: "Refinando el archivo del dataset. El usuario está ingresando manualmente la estructura JSON para el ajuste de instrucciones."
    },
    {
        src: "07bf228d-2377-4083-8625-d82b1ada5519.jpg",
        time: "14/02/2026 0:28:04",
        title: "Error de Acceso a Hugging Face",
        desc: "Encontrando un error `response.raise_for_status()`. Esto generalmente indica un problema de red o fallo de autenticación (probablemente token inválido o acceso restringido al modelo)."
    },
    {
        src: "148bfc84-b325-4d2f-9e5a-c1698abc2f40.jpg",
        time: "14/02/2026 0:28:12",
        title: "Intento de Entrenamiento con Gemma",
        desc: "Intentando iniciar el entrenamiento con `google/gemma-3-270m-it`. Aparece el error 'Access to model... is restricted', requiriendo cambiar de modelo o aceptar términos de licencia."
    },
    {
        src: "b8c83275-3755-409b-b1c0-9944319da772.jpg",
        time: "14/02/2026 0:28:22",
        title: "Reinstalación de Datasets",
        desc: "Solucionando problemas del entorno reinstalando la librería `datasets`."
    },
    {
        src: "b1bd538b-5f57-4713-bf50-fe60e8bee701.jpg",
        time: "14/02/2026 0:28:31",
        title: "Corrección de Dependencias",
        desc: "Instalación exitosa de dependencias faltantes como `aiohappyeyeballs` y `fsspec` para resolver conflictos en el entorno de Python."
    },
    {
        src: "9efc82de-5d70-49c1-8688-28fb89ac4547.jpg",
        time: "14/02/2026 0:28:38",
        title: "Formateo del Dataset a ChatML",
        desc: "Cambiando a `nano` para editar `data/train.jsonl`. El formato se actualiza al estándar ChatML: lista de `messages` con roles de `user` y `assistant`."
    },
    {
        src: "a8b3a6c9-0be9-400e-a467-22c4e4e7f99e.jpg",
        time: "14/02/2026 0:28:44",
        title: "Error de Tamaño de Batch",
        desc: "El entrenamiento falló con `ValueError: Dataset must have at least batch_size=4 examples but only has 1`. El dataset era muy pequeño para la configuración por defecto."
    },
    {
        src: "f4d00fd4-935e-4ab5-9b72-295aff1e6ceb.jpg",
        time: "14/02/2026 0:28:50",
        title: "Ajuste de Parámetros de Entrenamiento",
        desc: "Reejecutando el comando de entrenamiento con ajustes: `--batch-size 1` para acomodar el tamaño pequeño del dataset."
    },
    {
        src: "7302fca0-ac7d-4d2a-ba88-6378a78a0758.jpg",
        time: "14/02/2026 0:28:56",
        title: "Verificación del Modelo Fine-Tuned",
        desc: "Primera prueba del modelo entrenado. El usuario pregunta '¿Quién es Pepito123Jackson Tercero?' y el modelo responde correctamente con los datos personalizados provistos en el JSONL."
    },
    {
        src: "d3cdeb76-8302-4de2-82df-6dfe705d0a6d.jpg",
        time: "14/02/2026 0:29:04",
        title: "Organización de Archivos de Salida",
        desc: "Renombrando la carpeta de salida de `mi-qwen-finetuned` a `Mi-Qwen-Personal` para preparar la exportación."
    },
    {
        src: "4241192e-985f-4147-92e5-f4707402bef2.jpg",
        time: "14/02/2026 0:29:10",
        title: "Entrenamiento Completo",
        desc: "El bucle de entrenamiento finalizó exitosamente después de 600 iteraciones. La pérdida convergió alrededor de 2.30. Adaptadores guardados en `adapters.safetensors`."
    },
    {
        src: "2bceee48-7cf2-4019-955b-909faa97020f.jpg",
        time: "14/02/2026 0:29:15",
        title: "Fusión del Modelo",
        desc: "Ejecutando `python -m mlx_lm.fuse` para fusionar los adaptadores LoRA de vuelta en el modelo base. También muestra un error de 'Archivo no encontrado' durante un intento de renombrado."
    },
    {
        src: "64074a96-987a-4575-bccf-04cf46c25307.jpg",
        time: "14/02/2026 0:29:20",
        title: "Descarga del Modelo Base para Fusión",
        desc: "El script de fusión descarga el modelo original Qwen2.5-0.5B-Instruct para aplicar los pesos del adaptador."
    },
    {
        src: "7e387c78-1dd0-41e2-bce8-dcaa4c29e137.jpg",
        time: "14/02/2026 0:30:05",
        title: "Preparación para Conversión GGUF",
        desc: "Instalando las librerías `gguf` y `protobuf` para habilitar la conversión al formato GGUF para su uso en LM Studio."
    },
    {
        src: "a5495dc9-457c-47fd-a91d-4412095d057f.jpg",
        time: "14/02/2026 0:30:19",
        title: "Instalación de Requisitos de Llama.cpp",
        desc: "Ejecutando `pip install -r llama.cpp/requirements.txt` para configurar las herramientas oficiales de conversión del proyecto llama.cpp."
    },
    {
        src: "7ee6daf7-fe81-4ea3-a76c-78d16badfe02.jpg",
        time: "14/02/2026 0:30:27",
        title: "Configuración de Python 3.11",
        desc: "Siguiendo la guía: Instalando Python 3.11 específicamente para evitar problemas de compatibilidad con el script de conversión."
    },
    {
        src: "d8b96912-911d-4c12-9461-08fb9296b3dc.jpg",
        time: "14/02/2026 0:30:32",
        title: "Resolución de Dependencia GDBM",
        desc: "Instalando `python-gdbm@3.11` vía Homebrew para arreglar un error de librería faltante."
    },
    {
        src: "35839d67-c7bb-4165-aa40-ae957076df3c.jpg",
        time: "14/02/2026 0:30:50",
        title: "Finalizando Entorno de Conversión",
        desc: "Reejecutando la instalación de requisitos en el nuevo entorno limpio para asegurar que todo esté listo."
    },
    {
        src: "f787daea-51ee-4816-90b8-f8b2dbbd7e32.jpg",
        time: "14/02/2026 0:30:56",
        title: "Ejecutando Conversión GGUF",
        desc: "Ejecutando `convert_hf_to_gguf.py ./Mi-Qwen-Personal` para convertir el modelo fusionado en un único archivo `.gguf`."
    },
    {
        src: "4ce21c19-757e-42ab-94b3-768fe2db200b.jpg",
        time: "14/02/2026 0:31:02",
        title: "Cargando en LM Studio",
        desc: "Abriendo LM Studio y verificando que el archivo `mi-modelo.gguf` es reconocido en el directorio de modelos."
    },
    {
        src: "36b68c9c-fc0e-4a45-b6d3-85d876f3cd2a.jpg",
        time: "14/02/2026 0:31:07",
        title: "Modelo Cargado Exitosamente",
        desc: "LM Studio mostrando 'mi modelito' cargado. El conteo de parámetros (494M) coincide con la arquitectura Qwen2.5-0.5B."
    },
    {
        src: "19387228-6fea-40f9-9cc2-709bbded6552.jpg",
        time: "14/02/2026 0:31:20",
        title: "Prueba Final de Chat",
        desc: "Chateando con el modelo GGUF en LM Studio. Identifica correctamente a 'Pepito123Jackson Tercero' (aunque con algo de alucinación), confirmando que el fine-tuning fue exitoso."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Set current date
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('es-ES');

    const container = document.getElementById('gallery-container');

    images.forEach((imgData, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const stepNumber = index + 1;

        item.innerHTML = `
            <div class="card">
                <div class="step-badge">Paso ${stepNumber}</div>
                <div class="img-wrapper">
                    <img src="${imgData.src}" alt="${imgData.title}" loading="lazy" onclick="window.open(this.src, '_blank')">
                </div>
                <div class="card-content">
                    <h3>${imgData.title}</h3>
                    <p>${imgData.desc}</p>
                    <span class="timestamp">Capturado: ${imgData.time}</span>
                </div>
            </div>
        `;

        container.appendChild(item);
    });
});
