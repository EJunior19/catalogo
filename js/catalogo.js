      
// js/catalogo.js

// --- LOG PARA VER SI EL SCRIPT SE CARGA ---
console.log("Script catalogo.js cargado.");


// --- 1. Estructura de datos de los productos (AQUÍ PONDRÁS TODOS TUS PRODUCTOS REALES) ---
// Cada objeto en este array representa un producto.
// El 'id' debe coincidir con el 'data-id' en el HTML.
// 'images' es un array de rutas de imágenes.
// 'description_full' es la descripción detallada para el modal.
// 'characteristics' es un array de strings para la lista con viñetas de características técnicas.
const productsData = [
     // --- EJEMPLO: BICICLETAS Y MOTOS ---
    {
        id: 'Caloi Bici Moto Aro 16', // Coincide con data-id en HTML
        name: 'Bicicleta Caloi Bici Moto Aro 16"', // Nombre completo
        images: ['imagenes/Caloi Bici Moto Aro 16.png', 'imagenes/Caloi Bici Moto Aro 162.png'], // Array de rutas de imágenes
        description_full: 'La Caloi Bici Moto Aro 16" combina el diseño divertido de una motocicleta con la seguridad y comodidad de una bicicleta infantil. Ideal para niñas y niños entre 4 y 5 años, esta bici está pensada para acompañarlos en sus primeros paseos, aportando estabilidad, seguridad y mucha diversión.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            '🔹 Producto: Caloi Bici Moto Aro 16"',
            '🔹 Código: 9446',
            '🔹 Aro: 16 pulgadas',
            '🔹 Color: Azul vibrante',
            '🔹 Cuadro de acero con carcasa plástica',
            '🔹 Llantas metálicas duraderas',
            '🔹 Frenos V-Brake para frenado eficiente',
            '🔹 Guardabarros delantero y trasero',
            '🔹 Cubre cadena de seguridad',
            '🔹 Rueditas laterales de apoyo para estabilidad',
            '🔹 Roncador de moto incorporado',
            '🔹 Edad recomendada: 4 a 5 años',
            '🔹 Altura del ciclista: 86 cm a 114 cm',
            '🔹 Peso máximo soportado: hasta 60 kg'
        ]
    },
    {
        id: 'Caloi California', // Coincide con data-id en HTML
        name: 'Caloi California', // Nombre completo
        images: ['imagenes/Bicicleta Caloi California Aro 20.png'], // Array de rutas de imágenes
        description_full: 'La Caloi California es una bicicleta pensada para niñas que quieren estilo, comodidad y seguridad mientras pedalean. Disponible en versiones Aro 20 y Aro 24, se adapta a diferentes etapas de crecimiento, desde los primeros paseos hasta trayectos más largos y urbanos.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            '🔹 Producto: Bicicleta Caloi California Aro 20',
            '🔹 Código: 9863',
            '🔹 Código: 7752 (Aro 24)',
            '🔹 Aro: 20 pulgadas',
            '🔹 Cuadro: Acero resistente',
            '🔹 Frenos: V-Brake delantero y trasero',
            '🔹 Llantas: Metálicas reforzadas',
            '🔹 Guardabarros delantero y trasero',
            '🔹 Cubre cadena de protección',
            '🔹 Diseño ergonómico y femenino',
            '🔹 Edad sugerida: 7 a 10 años',
            '🔹 Altura del ciclista: 1,20 m a 1,45 m',
            '🔹 Peso máximo soportado: 70 kg'
        ]
    },
    // --- EJEMPLO: HELADERAS Y FREEZERS ---
    {
        id: 'heladera-consul-300-litros-frio-humedo-1p', // Coincide con data-id en HTML
        name: 'Heladera Consul 300 Litros Frío Húmedo 1 Puerta', // Nombre completo
        images: ['imagenes/heladera-consul-300-litros-frio-humedo-1p.jpg', 'imagenes/heladera-consul-300-litros-frio-humedo-1p2.jpg'], // Array de rutas de imágenes
        description_full: 'Con sistema de frío húmedo. Ideal para mantener tus alimentos frescos y organizados. Diseño práctico de 1 puerta, eficiente y funcional para tu cocina. ', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Capacidad: 275 Lts',
            'Función Frío Húmedo',
            'Compartimiento extra frío + rejillas retractil.',
            'Gaveta para frutas y verduras.',
            'Iluminación Interior: LED de alta eficiencia',
            'Medidas: Ancho 55,0 cm. / Alto 144,0 cm. / Profunidad 63,1 cm.'
        ]
    },
    {
        id: 'heladera-electrolux-240-litros-frio-humedo-1p', // Coincide con data-id en HTML
        name: 'Heladera Electrolux 240 Litros Frio Húmedo 1 Puerta RE32', // Nombre completo
        images: ['imagenes/heladera-electrolux-240-litros-frio-humedo-1p.jpg', 'imagenes/heladera-electrolux-240-litros-frio-humedo-1p2.jpg'], // Array de rutas de imágenes
        description_full: 'Con Frío Húmedo y 1 Puerta proporciona un espacio de almacenamiento eficiente para conservar alimentos frescos. Su tecnología de frío húmedo mantiene la humedad ideal para evitar el secado de los alimentos, prolongando su frescura. Con un diseño compacto, se adapta perfectamente a cocinas de tamaño medio, optimizando el uso del espacio. Equipado con estantes ajustables y un compartimento de congelación, ofrece flexibilidad y comodidad en la organización de los productos. Su eficiencia energética contribuye a un menor consumo de electricidad.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Capacidad: 240 Lts',
            'Función Frío Húmedo',
            'Estante profundo en la puerta para botellas PET de hasta 2,5 litros',
            'Gaveta para frutas y verduras.',
            'Iluminación Interior: LED de alta eficiencia',
            'Alto x Ancho x Prof. (mm): 1406x550x611'
        ]
    },
       { id: 'heladera-whirlpool-375-400-litros', // Coincide con data-id en HTML
        name: 'Heladera Whirlpool 375/400 Litros Frío Seco Turbo Freezer', // Nombre completo
        images: ['imagenes/heladera-whirlpool-375-400-litros-frio-seco-turbo-freezer-heladera-whirlpool-375-400-litros.jpg', 'imagenes/heladera-whirlpool-375-400-litros-frio-seco-turbo-freezer-heladera-whirlpool-375-400-litros2.jpg','imagenes/heladera-whirlpool-375-400-litros-frio-seco-turbo-freezer-heladera-whirlpool-375-400-litros3.jpg'], // Array de rutas de imágenes
        description_full: 'Frío seco y turbo freezer: Amplio espacio de almacenamiento, enfriamiento eficiente y congelador potente para conservar tus alimentos  ', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Espacio Fresh Conserva la frescura original de tus frutas y verduras toda la semana',
            'Función Frío Húmedo',
            'Compartimiento extra frío + rejillas retractil.',
            'Luz LED Permite una iluminación panorámica, ahorra energía y dura más tiempo.',
            'Control externo de temperatura',
            'Capacidad Bruta 399 litros',
            'Capacidad Neta 374 litros.',
            'Compartimiento extra frío',
            'Ancho 62,1 cm. Alto 176 cm.Profundidad 75,5 cm'
        ]
    },
     { id: 'electrolux-heladeras-heladera-electrolux-dc44-362-lts', // Coincide con data-id en HTML
        name: 'Heladera Electrolux DC44 362 Lts Frío Húmedo.', // Nombre completo
        images: ['imagenes/electrolux-heladeras-heladera-electrolux-dc44-362-lts2.png','imagenes/electrolux-heladeras-heladera-electrolux-dc44-362-lts.png','imagenes/electrolux-heladeras-heladera-electrolux-dc44-362-lts3.jpg'], // Array de rutas de imágenes
        description_full: 'Es una solución eficiente y funcional para el almacenamiento de alimentos y bebidas. Con un diseño moderno y características prácticas, este electrodoméstico es ideal para cualquier hogar', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Diseño unico con manija empotrada e integrada.',
            'Función Frío Húmedo',
            'Estante en la puerta del refrigerador.',
            'Luz LED Permite una iluminación panorámica, ahorra energía y dura más tiempo.',
            ' Estante 100% removible',
            ' Eficiencia energética A.',
            'Canasta porta huevos 12 unidades.',
            'Compartimiento extra frío',
            ' Alto: 173,8 cm.  Largo: 60 cm. Profundidad: 69 cm.'
        ]
    },
    { 
        id: 'Heladera Electrolux Iw43s 408 Lts Inverter Inox', // Coincide con data-id en HTML
        name: 'Heladera Electrolux Iw43s 408 Lts Inverter Inox', // Nombre completo
        images: ['imagenes/HELADERA ELECTROLUX IW43S 408 LTS INVERTER INOX1.png','imagenes/HELADERA ELECTROLUX IW43S 408 LTS INVERTER INOX2.png'], // Array de rutas de imágenes
        description_full: 'Eficiencia, diseño y frescura para tu cocina. Con tecnología Inverter y sistema AutoSense, conserva los alimentos por mas tiempo y reduce el consumo energético. Incluye cajón HortiNatura, estantes ajustables FastAdapt y dispensador de agua. Ideal para quienes buscan funcionalidad y estilo en solo electrodoméstico.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Ice Tray: Accesorio ideal para mantener tus bebidas frías siempre que quieras.',
            'Dispenser de agua (IW43S): Disfrute de agua fresca con todo el confort directo del refrigerador, sin tener que abrir la puerta.',
            'Estante en la puerta del refrigerador.',
            'Luz LED Permite una iluminación panorámica.',
            'Fast Adapt: Estantes que permiten más de 20 configuraciones internas para almacenar alimentos de diferentes tamaños y formatos',
            'Tecnología Inverter: Mantiene la temperatura más estable, garantizando ondiciones ideales para preservar sus alimentos y ahorro de hasta 30% de energía con la eficiencia.',
            'Canasta porta huevos 12 unidades.',
            'Cajón HortiNatura: Conserva la frescura de frutas y verduras por hasta 2 veces más tiempo.'
        ]
    },
    { 
        id: 'Heladera Electrolux 2P F/H 257L Ertm28G5', // Coincide con data-id en HTML
        name: 'Heladera Electrolux 2P F/H 257L Ertm28G5', // Nombre completo
        images: ['imagenes/heladera-electrolux-2p-f-h-257l-ertm28g5.jpg','imagenes/heladera-electrolux-2p-f-h-257l-ertm28g52.jpg'], // Array de rutas de imágenes
        description_full: 'Combina un diseño moderno y funcionalidad. Con un amplio espacio de almacenamiento, su sistema de refrigeración mantiene los alimentos frescos por más tiempo. Incluye estantes ajustables, compartimientos especiales y un eficiente consumo energético, ideal para cualquier hogar.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Capacidad: 257 litros.',
            'Gas Refrigerante: R600a',
            'Estante en la puerta del refrigerador.',
            'Luz LED Permite una iluminación panorámica.',
            'Compartimientos: Puerta con espacio para botellas y compartimentos especiales para lácteos',
            'Consumo Energético: Eficiencia energética clase A.',
            '60 cm de ancho 60 cm de profundidad 60 cm de profundidad Peso (Kg): 45'
        ]
    },
    { 
        id: 'Heladera Electrolux IT70S 2 Puertas 474L', // Coincide con data-id en HTML
        name: 'Heladera Electrolux IT70S 2 Puertas 474L', // Nombre completo
        images: ['imagenes/Heladera Electrolux IT70S 2 Puertas 474L.png','imagenes/Heladera Electrolux IT70S 2 Puertas 474L2.png','imagenes/Heladera Electrolux IT70S 2 Puertas 474L3.png'], // Array de rutas de imágenes
        description_full: 'La Heladera Electrolux IT70S combina diseño moderno y tecnología avanzada para ofrecerte una experiencia superior. Con 474 litros de capacidad, motor Inverter y sistema Frost Free, garantiza eficiencia y comodidad. Su tecnología AutoSense ajusta la temperatura automáticamente, mientras que el cajón HortiNatura prolonga la frescura de frutas y verduras. Estantes ajustables, control digital y freezer amplio completan esta opción ideal para tu cocina.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Marca: Electrolux',
            'Modelo: IT70S',
            'Capacidad total neta: 474 L',
            'Luz LED Permite una iluminación panorámica.',
            'Motor: Inverter (mayor eficiencia y ahorro de energía)',
            'Consumo Energético: Eficiencia energética clase A.',
            'Dimensiones (aprox.): 189 cm alto × 70 cm ancho × 73 cm profundidad'
        ]
    },
    { 
        id: 'Heladera Electrolux F/S 538 LItros Inverter Inoxidable IM8S', // Coincide con data-id en HTML
        name: 'Heladera Electrolux F/S 538 LItros Inverter Inoxidable IM8S', // Nombre completo
        images: ['imagenes/Heladera Electrolux F-S 538 IM8S.png','imagenes/Heladera Electrolux F-S 538 IM8S2.png','imagenes/Heladera Electrolux F-S 538 IM8S3.png'], // Array de rutas de imágenes
        description_full: 'Combina un diseño elegante en acero inoxidable con una gran capacidad de 538 litros. Cuenta con tecnología de enfriamiento eficiente, estantes ajustables, y un compartimento especial para frescura prolongada. Ideal para familias, garantiza un almacenamiento óptimo y fácil acceso a tus alimentos', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Marca: Electrolux',
            'Modelo: IM8S',
            'Capacidad total neta: 538 L',
            'Luz LED Permite una iluminación panorámica.',
            'Control Digital de Temperatura: Fácil acceso y precisión en el manejo.',
            'Consumo Energético: Eficiencia energética clase A.',
            'Dimensiones (aprox.): 189 cm alto × 70 cm ancho × 73 cm profundidad',
            'Diseño de Acero Inoxidable:  Estético y fácil de limpiar, resistente a huellas',
        ]
    },
    { 
        id: 'Heladera Multidoor Electrolux DM90X 540L - Inox', // Coincide con data-id en HTML
        name: 'Heladera Multidoor Electrolux DM90X 540L - Inox', // Nombre completo
        images: ['imagenes/Heladera Electrolux DM90X.png','imagenes/Heladera Electrolux DM90X2.png','imagenes/Heladera Electrolux DM90X3.png','imagenes/Heladera Electrolux DM90X4.png','imagenes/Heladera Electrolux DM90X5.png'], // Array de rutas de imágenes
        description_full: 'Combina un diseño elegante en acero inoxidable con una gran capacidad de 540 litros. Cuenta con tecnología de enfriamiento eficiente, estantes ajustables, y un compartimento especial para frescura prolongada. Ideal para familias, garantiza un almacenamiento óptimo y fácil acceso a tus alimentos', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Marca: Electrolux',
            'Modelo: DM90X',
            'Capacidad total neta: 538 L',
            'Panel Blue Touch',
            'Permite acceder a los alimentos abriendo solamente una puerta con mínima dispersión de la temperatura.',
            'Agua y Hielo en cubos o triturados con filtro pronto para el consumo para cualquier hora, directo en la puerta del refrigerador',
            'Medidas: Altox Ancho x Prof (mm) 1790 x 600 x 681',
            'Puertas Asietricas independientes',
        ]
    },
    { 
        id: 'HELADERA MIDAS 420LTS. FRIO/SECO CON DISPENSER INOX 2P MD-HF420LT', // Coincide con data-id en HTML
        name: 'HELADERA MIDAS 420LTS. FRIO/SECO CON DISPENSER INOX 2P MD-HF420LT', // Nombre completo
        images: ['imagenes/Heladera Midas HFS420LT.png','imagenes/Heladera Midas HFS420LT2.png','imagenes/Heladera Midas HFS420LT3.png'], // Array de rutas de imágenes
        description_full: 'La Heladera Midas HFS420LT de 420 litros es perfecta para familias que buscan un electrodoméstico espacioso, funcional y con excelente rendimiento. Diseñada para ofrecer una conservación eficiente de tus alimentos, combina practicidad con un diseño moderno y duradero.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
            'Marca: MIDAS',
            'Modelo: HF420LT',
            'Capacidad total neta: 420L',
            'Dispenser de Agua.',
            '5 Niveles de Temperatura.',
            'Botón de Congelamiento Rápido.',
            'Alto: 176cm, Ancho: 61cm, Profundidad: 69cm',
        ]
    },
     {
        id: 'freezer-horizontal-abc', // Coincide con data-id en HTML
        name: 'Freezer Horizontal 200L Marca ABC', // Nombre completo
        images: ['images/freezer1.jpg', 'images/freezer1_interior.jpg'], // Array de rutas de imágenes
        description_full: 'Freezer horizontal de gran capacidad y bajo consumo, perfecto para almacenar grandes cantidades de alimentos congelados de forma organizada. Ideal para comercios o hogares grandes.', // Descripción detallada para modal
        characteristics: [ // Lista de características técnicas para modal
             'Capacidad Total: 200 Litros',
             'Tipo: Horizontal de tapa única',
             'Clasificación Energética: B',
             'Termostato Ajustable',
             'Canasto Interior Removible',
             'Ideal para comercios o hogares grandes'
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE HELADERAS Y FREEZERS.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!


    // --- EJEMPLO: LAVARROPAS Y SECARROPAS ---
    {
        id: 'lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw', // Coincide con data-id en HTML
        name: 'Lavarropas Electrolux Carga Superior 9.5K EWIW95F5USVW', // Nombre completo
        images: ['imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw.jpg','imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw2.jpg','imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw3.jpg'], // Array de rutas de imágenes
        description_full: 'El Lavarropas de 9.5K con Su diseño compacto se adapta a espacios reducidos, mientras que sus programas versátiles aseguran un cuidado adecuado para distintos tipos de tejidos', // Descripción detallada
        characteristics: [ // Lista de características
            'Capacidad de Carga: 9.5 kg',
            'Tipo de Carga: Superior',
            'Velocidad Máx. Centrifugado: 650 RPM',
            'Número de Programas: 10',
            'Tecnología Inverter:   No',
            'No tiene para suavizante.'
        ]
    },
    {
        id: 'lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw-gris', // Coincide con data-id en HTML
        name: 'Lavarropas Electrolux Carga Superior 9.5K EWIW95F5USVW Gris', // Nombre completo
        images: ['imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw-gris.jpg','imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw-gris2.jpg','imagenes/lavarropas-electrolux-carga-superior-9-5k-ewiw95f5usvw-gris3.jpg'], // Array de rutas de imágenes
        description_full: 'El Lavarropas de 9.5K con Su diseño compacto se adapta a espacios reducidos, mientras que sus programas versátiles aseguran un cuidado adecuado para distintos tipos de tejidos', // Descripción detallada
        characteristics: [ // Lista de características
            'Capacidad de Carga: 9.5 kg',
            'Tipo de Carga: Superior',
            'Velocidad Máx. Centrifugado: 650 RPM',
            'Número de Programas: 10',
            'Tecnología Inverter:   No',
            'No tiene para suavizante.'
        ]
    },
    {
        id: 'lavarropa-electrolux-17k-carga-superior-lb17y', // Coincide con data-id en HTML
        name: 'Lavarropa Electrolux 17K Carga Superior LB17Y', // Nombre completo
        images: ['imagenes/lavarropa-electrolux-17k-carga-superior-lb17y-lavarropa-electrolux-17k2.jpg','imagenes/lavarropa-electrolux-17k-carga-superior-lb17y-lavarropa-electrolux-17k.jpg','imagenes/lavarropa-electrolux-17k-carga-superior-lb17y-lavarropa-electrolux-17k3.jpg','imagenes/lavarropa-electrolux-17k-carga-superior-lb17y-lavarropa-electrolux-17k4.jpg','imagenes/lavarropa-electrolux-17k-carga-superior-lb17y-lavarropa-electrolux-17k5.jpg'], // Array de rutas de imágenes
        description_full: 'Con la Lavarropa Electrolux 17K Haz que tu rutina de lavado sea más fácil y eficiente con la Lavadora Electrolux. Ideal para quienes buscan calidad, rapidez y sostenibilidad', // Descripción detallada
        characteristics: [ // Lista de características
            'Cantidad De Programas: 10',
            'Color: Blanco',
            'Alto X Ancho X Prof. (Mm): 1052x662x724',
            'Capacidad Total (Kg): 17',
            'Peso Neto (Kg): 46',
            'Voltaje (V): 220',
            'Frecuencia (Hz): 50',
            'Rotación (Rpm): 630',
            'Peso Bruto - Producto Embalado (Kg): 48',
            'Sistema Jet&Clean',
            'Sistema de lavado con Ciclos Rápidos',
            'Reutilizar Agua',
            'Programa Rápido',
            'Función saltar etapas',
            'Tecnologia de Lavado: Agitador',
            'Linea Essentia',
            'Doble entrada de Agua (Fría/Caliente)',
        ]
    },
    {
        id: 'Lavarropas Electrolux 22K Carga Superior LB22Y', // Coincide con data-id en HTML
        name: 'Lavarropas Electrolux 22K Carga Superior LB22Y', // Nombre completo
        images: ['imagenes/Lavarropas Electrolux LB22Y.png','imagenes/Lavarropas Electrolux LB22Y2.png','imagenes/Lavarropas Electrolux LB22Y3.png'], // Array de rutas de imágenes
        description_full: 'El Electrolux LB22Y está diseñado para familias grandes que necesitan lavar grandes cantidades de ropa y artículos voluminosos, como edredones. Con una capacidad de 22 kg, optimiza tiempos y rendimiento.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹Jet&Clean: dispensador autolimpiante que diluye el jabón y suavizante al 100%, reduciendo residuos',
            '🔹 Reutilización de agua: permite usar el agua del lavado en otros fines domésticos',
            '🔹 11 programas (incluye edredones y delicados), ciclos automáticos rápidos, agua fría/tibia/caliente',
            'Capacidad Total (Kg): 22',
            'Peso Neto (Kg): 46',
            'Voltaje (V): 220',
            'Frecuencia (Hz): 50',
            'Rotación (Rpm): 630',
            'Peso Bruto - Producto Embalado (Kg): 48',
            'Sistema Jet&Clean',
            'Sistema de lavado con Ciclos Rápidos',
            'Reutilizar Agua',
            'Programa Rápido',
            'Función saltar etapas',
            'Tecnologia de Lavado: Agitador',
            'Linea Essentia',
            'Doble entrada de Agua (Fría/Caliente)',
        ]
    },
    {
        id: 'Lavarropa 10,5KG WW10K6410QW Blanco Samsung', // Coincide con data-id en HTML
        name: 'Lavarropa 10,5KG WW10K6410QW Blanco Samsung', // Nombre completo
        images: ['imagenes/Lavarropa 10,5KG WW10K6410QW Blanco Samsung.png','imagenes/Lavarropa 10,5KG WW10K6410QW Blanco Samsung2.png'], // Array de rutas de imágenes
        description_full: 'El Samsung WW10K6410QW es una lavadora de carga frontal de alta capacidad, ideal para familias y cargas voluminosas. Con 10,5 kg de capacidad y motor Digital Inverter, combina eficiencia energética, bajo ruido y durabilidad', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad de Lavado: 10.5kg',
            '🔹 Tipo de Carga: Frontal',
            '🔹 Tecnología EcoBubble: lava eficazmente incluso con agua fría',
            '🔹 AddWash: permite añadir ropa después de iniciar el lavado',
             '🔹 Velocidad de Centrifugado: 1400 rpm',
             '🔹 Motor Digital Inverter: mayor eficiencia y menor ruido',
             '🔹 Programas de Lavado: 14 (incluye Ropa de Bebé, Lana, Delicados, Rápido 15’)',
          '🔹 Función Bubble Soak: remueve manchas difíciles con burbujas activas',
             '🔹 Función Eco Drum Clean: limpieza automática del tambor sin químicos',
              '🔹 Smart Check: diagnóstico de errores mediante app',
                 '🔹 Tambor Diamond Drum: cuidado delicado de las prendas',
              '🔹 Bloqueo para Niños: seguridad garantizada',
                 '🔹 Pantalla LED: display digital intuitivo',
                 '🔹 Dimensiones (cm): 60 x 60 x 85',
                 '🔹 Peso Neto: 69kg',
                 '🔹 Color: Blanco',
                    '🔹 Consumo Energético: Alta eficiencia energética (Digital Inverter)'
        ]
    },
    {
        id: 'Lavarropas Whirlpool Freshcare WLF752B 7,5 Kg Inverter', // Coincide con data-id en HTML
        name: 'Lavarropas Whirlpool Freshcare WLF752B 7,5 Kg Inverter', // Nombre completo
        images: ['imagenes/Lavarropas Whirlpool Freshcare WLF752B 7,5 Kg Inverter.png','imagenes/Lavarropas Whirlpool Freshcare WLF752B 7,5 Kg Inverter2.png'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Whirlpool FreshCare WLF752B de 7,5 kg es la combinación perfecta entre rendimiento, tecnología y cuidado de la ropa. Con su motor Xpert Inverter, ofrece un lavado silencioso, eficiente y duradero. Su tecnología FreshCare+ mantiene la ropa fresca hasta 6 horas después del ciclo de lavado, evitando olores y arrugas gracias a movimientos suaves y control de temperatura.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 7,5 Kg',
            '🔹 Velocidad de Centrifugado: 1200 RPM',
            '🔹 Programas de Lavado: 14 ciclos',
            '🔹 FreshCare+: mantiene la ropa fresca y sin olores hasta 6 horas',
            '🔹 Colours 15°: lavado en frío que preserva colores brillantes',
            '🔹 Lavado Rápido: ciclo de 30 minutos para ropa ligeramente sucia',
            '🔹 Conexión de Agua: fría con calentador integrado',
            '🔹 Motor Xpert Inverter: más durabilidad, menor ruido y vibración',
            '🔹 Eficiencia Energética: ahorro de energía optimizado',
            '🔹 Óptimo Lavado: mayor rendimiento con menor desgaste',
            '🔹 Tipo de Carga: Frontal',
            '🔹 Dimensiones (Al x L x P): 84,5 x 59,5 x 63 cm',
            '🔹 Diseño Moderno y Compacto',
            '🔹 Bajo Nivel de Ruido'
        ]
    },
    {
        id: 'Secarropas Electrolux Carga Frontal 6kg Blanco', // Coincide con data-id en HTML
        name: 'Secarropas Electrolux Carga Frontal 6kg Blanco', // Nombre completo
        images: ['imagenes/Secarropas Electrolux Carga Frontal 6kg Blanco.png','imagenes/Secarropas Electrolux Carga Frontal 6kg Blanco2.png','imagenes/Secarropas Electrolux Carga Frontal 6kg Blanco3.jpg','imagenes/Secarropas Electrolux Carga Frontal 6kg Blanco4.png'], // Array de rutas de imágenes
        description_full: 'El Secarropas Electrolux EDEC06M5JSNW de carga frontal y 6 kg de capacidad está diseñado para facilitar tu día a día con eficiencia y practicidad. Cuenta con 12 programas de secado, adaptándose a distintos tipos de tejidos, desde ropa delicada hasta prendas más pesadas. ', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 6kg',
            '🔹 Tipo de Carga: Frontal',
            '🔹 Programas de Secado: 12 ciclos',
            '🔹 Tambor: Acero Inoxidable',
            '🔹 Consumo de Energía por Ciclo: 1,56 kWh',
            '🔹 Filtro Atrapa Pelusas: retiene pelusas que pueden quedar tras el lavado',
            '🔹 Secado Rápido: botón para dejar la ropa más seca en menos tiempo',
            '🔹 Instalación Flexible: se puede colocar en la pared o en el piso',
            '🔹 Diseño Compacto y Práctico',
            '🔹 Color: Blanco',
            '🔹 Marca: Electrolux',
            '🔹 Modelo: EDEC06M5JSNW'
        ]
    },
    {
        id: 'Secarropas Tokyo Cecilia TOK9CECI 9kg', // Coincide con data-id en HTML
        name: 'Secarropas Tokyo Cecilia TOK9CECI 9kg', // Nombre completo
        images: ['imagenes/Secarropas Tokyo Cecilia TOK9CECI 9kg.png'], // Array de rutas de imágenes
        description_full: 'El Secarropas Tokyo Cecilia TOK9CECI está diseñado para ofrecer potencia, versatilidad y alto rendimiento. Su gran capacidad de 9 kg lo hace ideal para familias o usuarios que manejan mucho volumen de ropa. Gracias a sus 15 programas de secado, se adapta a todo tipo de prendas: desde las más delicadas hasta las más pesadas.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 9kg',
            '🔹 Programas de Secado: 15',
            '🔹 Panel Digital: con pantalla',
            '🔹 Seguridad: Bloqueo para niños',
            '🔹 Temperatura Máxima: 90°C',
            '🔹 Velocidad de Centrifugado: hasta 1.400 rpm',
            '🔹 Categoría Energética: A+++',
            '🔹 Potencia: 2.000W',
            '🔹 Ideal para grandes volúmenes de ropa',
            '🔹 Diseño moderno y funcional',
            '🔹 Marca: Tokyo',
            '🔹 Modelo: TOK9CECI'
        ]
    },
    {
        id: 'Lavarropas Whirlpool 3LWTW4815FW USA 15KG', // Coincide con data-id en HTML
        name: 'Lavarropas Whirlpool 3LWTW4815FW USA 15KG', // Nombre completo
        images: ['imagenes/Lavarropas Whirlpool 3LWTW4815FW USA 15KG.png','imagenes/Lavarropas Whirlpool 3LWTW4815FW USA 15KG2.png'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Whirlpool 3LWTW4815FW con capacidad de 15 kg es un modelo de alta gama fabricado en EE.UU., diseñado para quienes buscan robustez, potencia y durabilidad. Equipado con 11 programas de lavado, adapta el ciclo a cada tipo de ropa, cuidando las telas mientras proporciona una limpieza profunda.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 15kg',
            '🔹 Velocidad de Centrifugado: 660 RPM',
            '🔹 Programas de Lavado: 11',
            '🔹 Tambor Porcelanizado: acero recubierto en porcelana para mayor durabilidad',
            '🔹 XL SYSTEM: diseño y opciones de lavado para mayor capacidad y desempeño',
            '🔹 Lavado Experto: adapta el ciclo según el color de las prendas',
            '🔹 Sensor de Llenado Automático: ajusta el nivel de agua según la carga',
            '🔹 Seguridad: Bloqueo para niños',
            '🔹 Niveles de Agua: 4',
            '🔹 Niveles de Temperatura: 4',
            '🔹 Diseño robusto, ideal para uso intensivo',
            '🔹 Fabricación: Estados Unidos',
            '🔹 Marca: Whirlpool',
            '🔹 Modelo: 3LWTW4815FW'
        ]
    },
    {
        id: 'Lavarropas Wanke Madera 5Kg Carga Superior Semiautomático', // Coincide con data-id en HTML
        name: 'Lavarropas Wanke Madera 5Kg Carga Superior Semiautomático', // Nombre completo
        images: ['imagenes/Lavarropas Wanke Madera 5Kg Carga Superior Semiautomático.png','imagenes/Lavarropas Wanke Madera 5Kg Carga Superior Semiautomático2.png'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Wanke Madera 5Kg es una excelente opción para hogares pequeños o personas que buscan practicidad y diseño. Con su capacidad de 5 kg y funcionamiento semiautomático, este equipo permite lavar cargas medianas con eficiencia, ofreciendo control manual sobre los ciclos para un lavado personalizado.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 5kg',
            '🔹 Tipo de Carga: Superior',
            '🔹 Tipo de Lavado: Semiautomático',
            '🔹 Diseño: Estilo madera clara, atractivo y duradero',
            '🔹 Programas de Lavado: Varios modos según el tipo de ropa',
            '🔹 Eficiencia Energética: Bajo consumo de electricidad y agua',
            '🔹 Función de Enjuague: Elimina residuos de detergente',
            '🔹 Diseño Compacto: Ideal para espacios reducidos',
            '🔹 Motor Eficiente: Mayor durabilidad y rendimiento constante',
            '🔹 Fácil Mantenimiento: Componentes accesibles para limpiar',
            '🔹 Ideal para hogares pequeños',
            '🔹 Marca: Wanke',
            '🔹 Modelo: Madera , Negro 5kg'
        ]
    },
    {
        id: 'LAVARROPAS WANKE SUPER LIS 6KG', // Coincide con data-id en HTML
        name: 'LAVARROPAS WANKE SUPER LIS 6KG', // Nombre completo
        images: ['imagenes/LAVARROPA WANKE SUPER LIS 6KG.jpg','imagenes/LAVARROPA WANKE SUPER LIS 6KG2.jpg','imagenes/LAVARROPAS WANKE SUPER LIS 6KG.png'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Wanke Madera 5Kg es una excelente opción para hogares pequeños o personas que buscan practicidad y diseño. Con su capacidad de 5 kg y funcionamiento semiautomático, este equipo permite lavar cargas medianas con eficiencia, ofreciendo control manual sobre los ciclos para un lavado personalizado.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 6kg',
            '🔹 Programas de Lavado: 4',
            '🔹 Diseño Compacto y Plegable: Ahorro de espacio',
            '🔹 Uso con o sin pedestal: mayor accesibilidad',
            '🔹 Piezas removibles: fácil de limpiar y mantener',
            '🔹 Sistema de Lavado: con turbina',
            '🔹 Tiempo total de lavado: 10 minutos',
            '🔹 Potencia: 200W',
            '🔹 Ideal para familias pequeñas',
            '🔹 Marca: Wanke',
            '🔹 Modelo: Super Lis 6kg'
        ]
    },
    {
        id: 'Lavarropas Mueller Plus De Fibra 4.5 Kg', // Coincide con data-id en HTML
        name: 'Lavarropas Mueller Plus De Fibra 4.5 Kg', // Nombre completo
        images: ['imagenes/LAVARROPAS MUELLER PLUS BLANCO 4.5KG.png','imagenes/LAVARROPAS MUELLER PLUS BLANCO 4.5KG2.png','imagenes/LAVARROPAS MUELLER PLUS BLANCO 4.5KG3.png'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Mueller Plus de Fibra 4.5 Kg es una excelente opción para quienes buscan un electrodoméstico práctico, liviano y eficiente. Con capacidad de 4,5 kg, es ideal para lavar ropa de uso diario en hogares pequeños.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 4,5kg',
            '🔹 Tipo: Semiautomática',
            '🔹 Lavado por agitación Zig Zag',
            '🔹 Programas de Lavado: 3',
            '🔹 Color: Blanco',
            '🔹 Apertura Superior',
            '🔹 Capacidad máxima de agua: 40 litros',
            '🔹 Altura: 75 cm',
            '🔹 Diámetro: 60 cm',
            '🔹 Longitud: 57 cm',
            '🔹 Profundidad: 59 cm',
            '🔹 Peso: 14,7 kg',
            '🔹 Construcción: Fibra resistente',
            '🔹 Marca: Mueller',
            '🔹 Modelo: Plus de Fibra 4.5kg'
        ]
    },
    {
        id: 'Lavarropas Mueller Pop Tank 5Kg Carga Superior Semiautomático', // Coincide con data-id en HTML
        name: 'Lavarropas Mueller Plus De Fibra 4.5 Kg', // Nombre completo
        images: ['imagenes/Lavarropas Mueller Pop Tank 5Kg Carga Superior Semiautomático.png','imagenes/Lavarropas Mueller Pop Tank 5Kg Carga Superior Semiautomático2.webp'], // Array de rutas de imágenes
        description_full: 'El Lavarropas Mueller Pop Tank de 5 Kg es una solución práctica y eficiente para hogares con cargas pequeñas de ropa. Su diseño compacto y semiautomático, con carga superior, lo hace cómodo de usar incluso en espacios reducidos. Gracias a su tambor de acero inoxidable, ofrece gran resistencia y durabilidad, mientras que su temporizador ajustable y panel intuitivo permiten personalizar cada lavado según el tipo de prendas. Además, cuenta con bomba de drenaje para facilitar el vaciado de agua, y un filtro de pelusas que garantiza resultados más limpios.', // Descripción detallada
        characteristics: [ // Lista de características
            '🔹 Capacidad: 5kg',
            '🔹 Tipo de carga: Superior',
            '🔹 Función: Semiautomática',
            '🔹 Diseño compacto: Ideal para espacios reducidos',
            '🔹 Ciclos de lavado ajustables',
            '🔹 Tambor de acero inoxidable',
            '🔹 Temporizador de lavado y enjuague',
            '🔹 Bomba de drenaje integrada',
            '🔹 Filtro de pelusa: para una limpieza más efectiva',
            '🔹 Panel de control intuitivo',
            '🔹 Marca: Mueller',
            '🔹 Modelo: Pop Tank 5kg'
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE LAVARROPAS Y SECARROPAS.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!


     // --- EJEMPLO: CELULARES Y NOTEBOOK ---
     {
        id: 'Celular Samsung A55 5G 8GB RAM 128GB /120Hz', // Coincide con data-id en HTML
        name: 'Celular Samsung A55 5G 8GB RAM 128GB /120Hz', // Nombre completo
        images: ['imagenes/Celular Samsung A55 5G 8GB RAM 128GB -120Hz.png', 'imagenes/Celular Samsung A55 5G 8GB RAM 128GB -120Hz2.png','imagenes/Celular Samsung A55 5G 8GB RAM 128GB -120Hz3.png'], // Array de rutas
        description_full: 'Ofrece un rendimiento excepcional con 8GB de RAM y 128GB de almacenamiento interno, ampliable mediante tarjeta microSD. Su pantalla de 6.4 pulgadas Super AMOLED con tasa de refresco de 120Hz proporciona una experiencia visual fluida y vibrante. Equipado con tecnología 5G, garantiza una conectividad rápida y eficiente para navegar, transmitir y descargar contenido sin interrupciones. Su diseño moderno y elegante lo convierte en un dispositivo atractivo y funcional para el uso diario.', // Descripción detallada
        characteristics: [
             'Pantalla: 6.4 pulgadas Super AMOLED con tasa de refresco de 120Hz, proporcionando imágenes fluidas y colores vibrantes.',
             'Procesador:  Potente chip compatible con 5G para una conectividad rápida y eficiente.',
             'Memoria: 8GB de RAM para un multitasking fluido y 128GB de almacenamiento interno, ampliable con tarjeta microSD.',
             'Cámara: Sistema de cámaras versátil para fotos y videos de alta calidad (especificaciones exactas pueden variar).',
             'Batería: Capacidad robusta para soportar un uso prolongado a lo largo del día',
             'Sistema Operativo:  Android 13 con la capa de personalización One UI para una interfaz intuitiva y actualizaciones de software.',
             '    Diseño: Diseño elegante y moderno con acabados premium y un tamaño cómodo para el uso diario.Ideal para quienes buscan un smartphone con alto rendimiento, conectividad 5G y una experiencia visual envolvente.'
        ]
    },
    {
        id: 'Celular Samsung A05 4GB RAM, 128GB ', // Coincide con data-id en HTML
        name: 'Celular Samsung A05 4GB RAM, 128GB ', // Nombre completo
        images: ['imagenes/Celular Samsung A05 4GB RAM, 128GB.png', 'imagenes/Celular Samsung A05 4GB RAM, 128GB 3.png','imagenes/Celular Samsung A05 4GB RAM, 128GB.png'], // Array de rutas
        description_full: 'Es un smartphone asequible que ofrece una experiencia sólida. Cuenta con una pantalla de tamaño adecuado para visualizar contenido cómodamente, un rendimiento confiable para tareas diarias y una capacidad de almacenamiento generosa para tus fotos, videos y aplicaciones. Ideal para quienes buscan un equilibrio entre funcionalidad y precio.', // Descripción detallada
        characteristics: [
             'Pantalla: 6.4 pulgadas Super AMOLED con tasa de refresco de 120Hz, proporcionando imágenes fluidas y colores vibrantes.',
             'Procesador: Velocidad CPU: 2GHz, 1.8GHz',
             'Memoria: Memoria_(GB): 4',
             'Almacenamiento (GB): 128',
             'Batería: Capacidad robusta para soportar un uso prolongado a lo largo del día',
             'Sistema Operativo:  Android 13 con la capa de personalización One UI para una interfaz intuitiva y actualizaciones de software.'
        ]
    },
    {
        id: 'Celular Xiaomi Redmi 14C 8 GB 256 GB ', // Coincide con data-id en HTML
        name: 'Celular Xiaomi Redmi 14C 8 GB 256 GB', // Nombre completo
        images: ['imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB .png', 'imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB2 .png','imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB3 .png'], // Array de rutas
        description_full: 'El Xiaomi Redmi 14C Dual es un smartphone diseñado para quienes buscan un equilibrio entre calidad y rendimiento. Equipado con un procesador de 8 núcleos, garantiza una experiencia multitarea fluida y eficiente. ', // Descripción detallada
        characteristics: [
             'Pantalla: 6.4 pulgadas Super AMOLED con tasa de refresco de 120Hz, proporcionando imágenes fluidas y colores vibrantes.',
             'Procesador MediaTek Helio G81-UltraProcesador: Cortex-A75 + ',
             'RAM: 8GB4',
             'GB: 256 GB',
             'Cámara frontal de 13 MP',
             'Batería: Capacidad robusta para soportar un uso prolongado a lo largo del día',
             'Sistema Operativo:  Android 13 con la capa de personalización One UI para una interfaz intuitiva y actualizaciones de software.'
        ]
    },
    {
        id: 'Celular Xiaomi Redmi 14C 8 GB 256 GB ', // Coincide con data-id en HTML
        name: 'Celular Xiaomi Redmi 14C 8 GB 256 GB', // Nombre completo
        images: ['imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB .png', 'imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB2 .png','imagenes/Celular Xiaomi Redmi 14C 8 GB 256 GB3 .png'], // Array de rutas
        description_full: 'El Xiaomi Redmi 14C Dual es un smartphone diseñado para quienes buscan un equilibrio entre calidad y rendimiento. Equipado con un procesador de 8 núcleos, garantiza una experiencia multitarea fluida y eficiente. ', // Descripción detallada
        characteristics: [
             'Pantalla: 6.4 pulgadas Super AMOLED con tasa de refresco de 120Hz, proporcionando imágenes fluidas y colores vibrantes.',
             'Procesador MediaTek Helio G81-UltraProcesador: Cortex-A75 + ',
             'RAM: 8GB4',
             'GB: 256 GB',
             'Cámara frontal de 13 MP',
             'Batería: Capacidad robusta para soportar un uso prolongado a lo largo del día',
             'Sistema Operativo:  Android 13 con la capa de personalización One UI para una interfaz intuitiva y actualizaciones de software.'
        ]
    },
    {
        id: 'Celular Honor X5B Plus Dual 256GB', // Coincide con data-id en HTML
        name: 'Celular Honor X5B Plus Dual 256GB', // Nombre completo
        images: ['imagenes/Celular Honor X5B Plus Dual 256GB.png'], // Array de rutas
        description_full: 'El Honor X5B Plus combina potencia, estilo y funcionalidad para quienes buscan un celular confiable, con gran rendimiento y almacenamiento de sobra. Con 256GB de memoria interna, podés guardar miles de fotos, videos, apps y archivos sin preocuparte por el espacio. Su diseño elegante y moderno se adapta perfectamente a tu mano, brindando una experiencia cómoda y visualmente atractiva.', // Descripción detallada
        characteristics: [
             '📱 Pantalla HD+ amplia y nítida, ideal para redes sociales, videos y juegos.',
             '🚀 Procesador fluido para un rendimiento óptimo en multitareas.',
             '🔋 Batería de larga duración, ideal para el día a día.',
             '📸 Cámara trasera que captura tus momentos con buena calidad. ',
             '🎮 Ideal para apps populares, juegos y navegación fluida',
             '🔄 Dual SIM, perfecto para separar trabajo y vida personal.',
        ]
    },
    {
        id: 'CELULAR HONOR X8B 8GB - 256GB 4G', // Coincide con data-id en HTML
        name: 'CELULAR HONOR X8B 8GB - 256GB 4G', // Nombre completo
        images: ['imagenes/HONOR X8B 8GB - 256GB 4G.jpg','imagenes/HONOR X8B 8GB - 256GB 4G2.jpg','imagenes/HONOR X8B 8GB - 256GB 4G3.jpg'], // Array de rutas
        description_full: 'El Honor X8B es un celular de gama media-alta que se destaca por su gran rendimiento, almacenamiento y diseño premium. Equipado con 8GB de RAM y una memoria interna de 256GB, ofrece velocidad, fluidez y espacio más que suficiente para tus apps, juegos, fotos y archivos.', // Descripción detallada
        characteristics: [
             '📱 Pantalla AMOLED FHD+ de 6.7”, colores vivos y fluidez visual.',
             '🚀 8GB RAM + 256GB de almacenamiento: rendimiento garantizado.',
             '📸 Cámara triple con sensor principal de 108 MP (según versión), perfecta para fotos nítidas y videos claros.',
             '🔋 Batería de larga duración con carga rápida.',
             '🎧 Conector de auriculares + expansión por microSD.',
             '🔄 Conectividad 4G, Dual SIM, sistema Android fluido.',
        ]
    },
    {
        id: 'Celular Honor X6B Dual Sim 128GB 4 GB', // Coincide con data-id en HTML
        name: 'Celular Honor X6B Dual Sim 128GB 4 GB', // Nombre completo
        images: ['imagenes/Celular Honor X6B Dual Sim 256GB 4 GB.webp'], // Array de rutas
        description_full: 'El Honor X6B es una excelente opción para quienes buscan un teléfono accesible, elegante y con buen rendimiento. Con 128GB de memoria interna, ofrece muchísimo espacio para fotos, apps y archivos. Sus 4GB de RAM permiten un uso fluido y estable en tareas diarias, redes sociales y entretenimiento.', // Descripción detallada
        characteristics: [
             '📱 Pantalla amplia con colores vivos y buena definición.',
             '🚀 4GB de RAM para multitareas sin trabas.',
             '💾 128GB de almacenamiento: olvidate de quedarte sin espacio',
             '🔋 Batería de larga duración con carga rápida.',
             '🎧 Conector de auriculares + expansión por microSD.',
             '🔄 Conectividad 4G, Dual SIM, sistema Android fluido.',
        ]
    },
    {
        id: 'Celular Honor Magic 6 Lite 5G 8+256GB', // Coincide con data-id en HTML
        name: 'Celular Honor Magic 6 Lite 5G 8+256GB', // Nombre completo
        images: ['imagenes/Celular Honor Magic 6 Lite 5G 8+256GB.jpg','imagenes/Celular Honor Magic 6 Lite 5G 8+256GB2.jpg','imagenes/Celular Honor Magic 6 Lite 5G 8+256GB3.jpg','imagenes/Celular Honor Magic 6 Lite 5G 8+256GB4.jpg'], // Array de rutas
        description_full: 'El Honor Magic 6 Lite 5G es una poderosa opción de gama media-alta que combina rendimiento, velocidad y estilo. Con 8GB de RAM, ofrece una experiencia fluida en multitarea, redes sociales, navegar por internet y jugar. Su amplio almacenamiento de 256GB te permite descargar apps pesadas, almacenar fotos, videos y archivos sin preocupaciones.', // Descripción detallada
        characteristics: [
             '📶 Conectividad 5G para una experiencia en línea sin demoras.',
             '🚀 8GB de RAM + 256GB de almacenamiento: potencia y capacidad sin límites.',
             '🎨 Pantalla AMOLED FHD+ con colores vibrantes y visual fluida.',
             '🔋 Batería de larga duración con carga rápida.',
             '📸 Cámara trasera múltiple para fotos y videos de alta calidad..',
             '💼 Diseño refinado y ergonómico, con lector de huella lateral o bajo pantalla (según versión).',
        ]
    },
    {
        id: 'Celular Honor Honor X7C Dual 256GB 8GB RAM', // Coincide con data-id en HTML
        name: 'Celular Honor Honor X7C Dual 256GB 8GB RAM', // Nombre completo
        images: ['imagenes/Celular Honor Honor X7C Dual 256GB 8GB RAM.png'], // Array de rutas
        description_full: 'El Honor X7C es un celular moderno y completo, ideal para quienes buscan un equipo con buena memoria y rendimiento fluido. Con 8GB de RAM, ofrece capacidad para múltiples apps en segundo plano sin ralentizar el sistema. Además, los 256GB de almacenamiento interno permiten guardar cientos de fotos, videos, apps y juegos sin preocupaciones.', // Descripción detallada
        characteristics: [
             '📱 Pantalla amplia y clara, perfecta para contenido multimedia.',
             '🚀 8GB de RAM: multitarea sin interrupciones.',
             '💾 256GB de almacenamiento: espacio de sobra para lo que necesites.',
             '🔋 Batería de larga duración con carga rápida.',
             '📸 Cámara versátil para capturar tus momentos con buena calidad',
             '🔄 Dual SIM: manejá dos líneas para separar contactos personales y trabajo',
        ]
    },
    {
        id: 'Celular Samsung Galaxy A15 4+128GB', // Coincide con data-id en HTML
        name: 'Celular Samsung Galaxy A15 4+128GB', // Nombre completo
        images: ['imagenes/CELULAR SAMSUNG A15 128GB.jpg','imagenes/CELULAR SAMSUNG A15 128GB2.jpg','imagenes/CELULAR SAMSUNG A15 128GB3.jpg'], // Array de rutas
        description_full: 'El Samsung Galaxy A15 es el dispositivo ideal para quienes buscan un smartphone completo sin salir del presupuesto. Con 4GB de RAM y 128GB de almacenamiento, ofrece un rendimiento sólido para redes sociales, apps, fotografía y entretenimiento, con espacio suficiente para tus archivos y fotos.', // Descripción detallada
        characteristics: [
             '📱 Pantalla HD+ brillante, perfecta para redes y multimedia.',
             '🚀 4GB de RAM: multitarea sin interrupciones.',
             '💾 128GB de almacenamiento: espacio de sobra para lo que necesites.',
             '🔋 Batería de larga duración con carga rápida.',
             '📸 Cámara versátil para capturar tus momentos con buena calidad',
             '🔄 Dual SIM: manejá dos líneas para separar contactos personales y trabajo',
        ]
    },
    {
        id: 'Samsung Galaxy A56 SM-A566E-5G Dual 256 GB', // Coincide con data-id en HTML
        name: 'Samsung Galaxy A56 SM-A566E-5G Dual 256 GB', // Nombre completo
        images: ['imagenes/Samsung Galaxy A56 SM-A566E-5G Dual 256 GB.jpg'], // Array de rutas
        description_full: 'El Samsung Galaxy A56 5G es un celular potente y actual, ideal para quienes buscan tecnología 5G, gran capacidad de almacenamiento y un diseño atractivo. Con 256 GB de memoria interna, tenés espacio de sobra para fotos, videos, apps y archivos. El modo Dual SIM te permite usar dos líneas, ya sea para separar trabajo y vida personal o aprovechar distintas tarifas.', // Descripción detallada
        characteristics: [
             '🌐 Compatible con red 5G para conectividad avanzada.',
             '🚀 256 GB de almacenamiento: sin preocuparte por espacio.',
             '📱 Pantalla AMOLED FHD+ con colores vivos y buen contraste.',
             '🔋 Batería de larga duración con carga rápida.',
             '📸 Cámara cuádruple con sensor principal de alta resolución para fotos y videos nítidos.',
             '🔄 Dual SIM: manejá dos líneas para separar contactos personales y trabajo',
             '🔒 Sensor de huella bajo pantalla, Android con interfaz One UI de Samsung.',
        ]
    },
    {
        id: 'SAMSUNG GALAXY M55 5G 256GB BLACK - SM-M55-B-256GB', // Coincide con data-id en HTML
        name: 'SAMSUNG GALAXY M55 5G 256GB BLACK - SM-M55-B-256GB', // Nombre completo
        images: ['imagenes/SAMSUNG GALAXY M55 5G 256GB BLACK - SM-M5.jpg','imagenes/SAMSUNG GALAXY M55 5G 256GB BLACK - SM-M52.jpg','imagenes/SAMSUNG GALAXY M55 5G 256GB BLACK - SM-M53.jpg'], // Array de rutas
        description_full: 'El Samsung Galaxy M55 5G es una opción muy completa para quienes buscan un celular con conectividad 5G, gran capacidad de almacenamiento y diseño moderno. Con 256 GB de memoria interna, ofrece espacio abundante para tus fotos, videos, apps y archivos. Además, su elegante acabado en color negro le da un toque premium y sofisticado.', // Descripción detallada
        characteristics: [
             '🌐 Compatible con red 5G para conectividad avanzada.',
             '🚀 256 GB de almacenamiento: sin preocuparte por espacio.',
             '📱 Pantalla amplia y nítida, ideal para consumo de contenido y juegos.',
             '🔋 Batería de larga duración con carga rápida.',
             '📸 Cámara cuádruple con sensor principal de alta resolución para fotos y videos nítidos.',
             '🔄 Dual SIM: manejá dos líneas para separar contactos personales y trabajo',
             '🛠 Actualizaciones de software y un sistema operativo robusto: One UI sobre Android.',
        ]
    },
    {
        id: 'Celular Samsung A26 256 GB 8 Ram', // Coincide con data-id en HTML
        name: 'Celular Samsung A26 256 GB 8 Ram', // Nombre completo
        images: ['imagenes/Celular Samsung A26 256 GB 8 Ram.png','imagenes/Celular Samsung A26 256 GB 8 Ram2.png','imagenes/Celular Samsung A26 256 GB 8 Ram3.png'], // Array de rutas
        description_full: 'El Samsung Galaxy A26 es un smartphone de gama media que destaca por su combustible rendimiento y amplio espacio de almacenamiento. Equipada con 8GB de memoria RAM, la multitarea fluye sin problemas, mientras que los 256GB de almacenamiento interno te permiten almacenar grandes bibliotecas de apps, fotos, videos y documentos sin preocupaciones.', // Descripción detallada
        characteristics: [
             'Pantalla: 6.7 pulgadas, Super AMOLED, FHD+ (2400 x 1080 px), tasa de refresco de 120Hz.',
             'Principal: 50 MP, OIS (Estabilización Óptica de Imagen).',
             'Almacenamiento: 256 GB, ampliable mediante tarjeta microSD hasta 1 TB.',
             '🔋 Batería de larga duración con carga rápida.',
             'Conectividad: 5G, Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.0, GPS, USB Type-C.',
             'Seguridad: Lector de huellas dactilares (lateral), reconocimiento facial.',
             'Resistencia: IP67 (resistente al agua y al polvo).',
        ]
    },
    {
          id: 'Celular  Xiaomi Poco X7 Pro 5G 12-512GB 50MP', // Coincide con data-id en HTML
        name: 'Celular  Xiaomi Poco X7 Pro 5G 12-512GB 50MP', // Nombre completo
        images: ['imagenes/Celular  Xiaomi Poco X7 Pro 5G 12-512GB 50MP.jpg','imagenes/Celular  Xiaomi Poco X7 Pro 5G 12-512GB 50MP2.jpg'], // Array de rutas
        description_full: 'El Xiaomi Poco X7 Pro 5G Dual es un smartphone diseñado para usuarios que buscan alto rendimiento y elegancia. Su pantalla de 6.67 pulgadas con resolución de 1220 x 2712 píxeles ofrece una experiencia visual inmersiva con imágenes nítidas y colores vibrantes, ideal para disfrutar de contenido multimedia y juegos. En cuanto a fotografía, está equipado con una cámara principal dual compuesta por un sensor de 50 MP y un ultra gran angular de 8 MP, que garantiza capturas detalladas y versátiles en cualquier entorno. La cámara frontal de 20 MP asegura selfies impecables y videollamadas de alta calidad. Con soporte para conectividad 5G, este dispositivo combina estilo, funcionalidad y tecnología avanzada para satisfacer las necesidades de los usuarios más exigentes.', // Descripción detallada
        characteristics: [
             '🧠 Potente: 12 GB RAM + 512 GB UFS 4.0',
             '🎨 Pantalla AMOLED 6,67″ 1.5K, 120 Hz, Gorilla Glass 7i',
             '📸 Cámara 50 MP OIS + 8 MP ultra-wide, video 4K/60 fps',
             '🔋 Batería 6000 mAh con carga rápida de 90 W',
             '🌐 Conectividad 5G, NFC, Dual SIM',
             '🛡 Protección: IP64, Gorilla Glass, Dolby Vision, TÜV Rheinland',
             '🧠 Chip Dimensity 8400‑Ultra + herramientas IA y Android 15 con HyperOS 2',
        ]
    },
    {
          id: 'Celular Iphone 13 128 GB 4 Ram 5G', // Coincide con data-id en HTML
        name: 'Celular Iphone 13 128 GB 4 Ram 5G', // Nombre completo
        images: ['imagenes/Celular Iphone 13 128 GB 4 Ram 5G.webp','imagenes/Celular Iphone 13 128 GB 4 Ram 5G2.webp','imagenes/Celular Iphone 13 128 GB 4 Ram 5G3.webp','imagenes/Celular Iphone 13 128 GB 4 Ram 5G4.webp'], // Array de rutas
        description_full: 'El iPhone 13 combina diseño elegante con potencia excepcional, ofreciendo una experiencia móvil fluida y avanzada. Con su pantalla Super Retina XDR de 6.1”, disfrutarás imágenes vibrantes y colores reales, perfectos para fotos, videos y juegos. Su procesador A15 Bionic garantiza un rendimiento rápido y eficiente, ideal para multitareas y apps exigentes. Cuenta con 4GB de RAM y 128GB de almacenamiento, espacio suficiente para tus archivos y aplicaciones favoritas. Además, su conectividad 5G permite descargas y streaming ultrarrápidos. La cámara dual captura fotos y videos de alta calidad con modo nocturno y estabilización avanzada. El iPhone 13 integra iOS con funciones de privacidad mejoradas y una batería de larga duración que te acompaña todo el día. Es la elección ideal para quienes buscan tecnología de punta y estilo en un solo dispositivo.', // Descripción detallada
        characteristics: [
             '🧠 Chip Apple A15 Bionic: rendimiento líder en su clase',
             '🎨 Pantalla Super Retina XDR OLED de 6,1″ — ideal para contenido visual.',
             '📸 Doble cámara trasera (12 MP) con modo nocturno y grabación 4K HDR Dolby Vision.s',
             '🔋 Batería con buena autonomía y carga rápida por cable (20 W).',
             '🌐 Conectividad 5G, LTE avanzado, Wi‑Fi 6',
             '🔐 Face ID para desbloqueo seguro y pagos.',
             '🔄 Ecosistema Apple: iOS con actualizaciones, App Store, iCloud y compatibilidad con AirPods, Apple Watch y más.',
        ]
    },
    {
          id: 'Celular iPhone 16 128 GB', // Coincide con data-id en HTML
        name: 'Celular iPhone 16 128 GB', // Nombre completo
        images: ['imagenes/Celular iPhone 16 128 GB.png','imagenes/Celular iPhone 16 128 GB2.png','imagenes/Celular iPhone 16 128 GB3.png','imagenes/Celular iPhone 16 128 GB4.png'], // Array de rutas
        description_full: 'Lanzado el 20 de septiembre de 2024, el iPhone 16 representa el modelo estándar de la nueva generación de Apple, integrando un potente chip A18, conectividad 5G, cámara avanzada y mejoras en rendimiento y autonomía', // Descripción detallada
        characteristics: [
             '🧠 Chip A18 (3 nm) con CPU de 6 núcleos y GPU de 5 núcleos, incluye Neural Engine de 16 núcleos para funciones de IA y hasta 8 GB de RAM',
             '📱 Pantalla Super Retina XDR OLED de 6.1″, resolución 1179×2556, Dolby Vision, picos de brillo hasta 2000 nits, y protección Ceramic Shield .',
             '📸 Sistema de cámaras duales: 48 MP principal con OIS y 12 MP ultra‑gran angular. Cámara frontal de 12 MP, grabación 4K hasta 60 fps, HDR y modo nocturno',
             '🔋 Batería de 3561 mAh, con carga rápida: 50 % en 30 min por cable, 25 W MagSafe y 15 W Qi2',
             '🌐 Conectividad completa: 5G (todas las bandas), Wi‑Fi 7, Bluetooth 5.3, NFC, USB‑C con DisplayPort',
             '💧 Resistencia IP68 (hasta 6 m por 30 min), Face ID, USB‑C, doble SIM (nano + eSIM o dual‑eSIM, según región) .',
             '🆕 Novedades exclusivas: Action Button programable, botón de control de cámara, y Apple Intelligence en iOS 18 para asistentes inteligentes',
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE COCINA Y HORNOS.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!

    // --- EJEMPLO: TELEVISORES Y AUDIO ---
    {
        id: 'televisor-uhd-65', // Coincide con data-id en HTML
        name: 'Televisor Tokyo Smart Google 65" UHd', // Nombre completo
        images: ['imagenes/televisor-tokyo-smart-google-65-uhd.jpg','imagenes/televisor-tokyo-smart-google-65-uhd2.jpg'], // Array de rutas
        description_full: 'El televisor Tokyo Smart Google TV de 65 pulgadas ofrece una experiencia visual de alta calidad con su pantalla LED Ultra HD 4K (3840 x 2160 píxeles) y diseño sin bordes (frameless), brindando una visualización inmersiva. Equipado con el sistema operativo Google TV, permite acceder a una amplia variedad de aplicaciones y contenido, además de contar con el Asistente de Google por voz incorporado para un control sencillo. Incluye Chromecast integrado para transmitir contenido desde dispositivos móviles. En cuanto a conectividad, dispone de Wi-Fi, Bluetooth, 3 puertos HDMI y 2 USB. Sus dimensiones son 155x15x95 cm y pesa 22 kg', // Descripción detallada
        characteristics: [
             'Tamaño de Pantalla: 65 pulgadas',
             'Resolución: Full HD (1920x1080)',
             ' Bordes Frameless ultradelgados.',
             'Conectividad: 3x HDMI, 2x USB, Wi-Fi integrado',
             'Incluye Control Remoto Smart'
        ]
    },
    {
        id: 'televisor-jvc-32', // Coincide con data-id en HTML
        name: 'TV JVC 32 SMART HD GOOGLE TV', // Nombre completo
        images: ['imagenes/TV JVC 32 SMART HD GOOGLE TV.jpg','imagenes/TV JVC 32 SMART HD GOOGLE TV2.jpg','imagenes/TV JVC 32 SMART HD GOOGLE TV3.jpg'], // Array de rutas
        description_full: '¡Descubrir tus programas favoritos nunca ha sido más fácil! Ya no tendrás que hacer malabares entre múltiples aplicaciones. Solo usa tu voz para buscar en todas tus aplicaciones y encontrar rápidamente el contenido que estás buscando, por título, género o programas relacionados. Además, también puedes pedirle a Google actualizaciones del clima y puntuaciones deportivas. Y administrar tus dispositivos domésticos inteligentes es tan simple como decir Hey Google, apaga el televisor de la sala. ', // Descripción detallada
        characteristics: [
             'Tamaño de Pantalla: 32 pulgadas',
             'Resolución: HD (1920x1080)',
             'Google Play, HBO max, Disney+, Youtube, Netflix.',
             'Control remoto con Google Assistant One-click Netflix y YouTube',
             'Incluye Control Remoto Smart'
        ]
    },
     {
        id: 'equipo-audio-pqr', // Coincide con data-id en HTML
        name: 'Mini Componente Bluetooth Marca PQR', // Nombre completo
        images: ['images/audio1.jpg', 'images/audio1_vista2.jpg'], // Array de rutas
        description_full: 'Sistema de audio compacto pero potente con conexión Bluetooth para reproducir música desde tu celular o dispositivos. Varias opciones de conexión para tu entretenimiento.', // Descripción detallada
        characteristics: [
             'Potencia de Salida: 100W RMS',
             'Conectividad: Bluetooth, USB, Radio FM, Entrada Auxiliar',
             'Funciones: EQ, Efectos de Sonido',
             'Incluye Control Remoto'
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE TELEVISORES Y AUDIO.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!


    // --- EJEMPLO: AIRES ACONDICIONADOS Y CLIMATIZACIÓN ---
    {
        id: 'AIRE ACONDICIONADO GOODWEATHER 12000BTU GW-12FO R410', // Coincide con data-id en HTML
        name: 'AIRE ACONDICIONADO GOODWEATHER 12000BTU GW-12FO R410', // Nombre completo
        images: ['imagenes/AIRE ACONDICIONADO GOODWEATHER 12000BTU GW-12FO R410.png'], // Array de rutas
        description_full: 'El aire acondicionado Goodweather 12000BTU modelo GW-12FO con refrigerante R410 es la solución perfecta para mantener tus espacios frescos y confortables. Diseñado para ser eficiente y amigable con el medio ambiente, este equipo combina un rendimiento óptimo con un bajo consumo energético. Ideal para habitaciones y oficinas, ofrece un enfriamiento rápido y uniforme.', // Descripción detallada
        characteristics: [
             'CAPACIDAD DE ENFRIAMIENTO: 12,000 BTU ',
             'CONSUMO DE ENERGIA: 1,200W ',
             'CONTROL REMOTO: INCLUIDO ',
             'FILTRO: LAVABLE ',
             'FUNCIONES ADICIONALES: MODO SLEEP, TIMER, AUTO RESTART ',
             'MODELO: GW-12FO ',
             'RANGO DE TEMPERATURA: 17°CA 30°C ',
             'TIPO DE REFRIGERANTE: R410A ',
             'VOLTAJE: 220V / 50HZ '
        ]
    },
     {
        id: 'AIRE GOODWEATHER 12.000 BTU GW-12INVS INVERTER R410A 2PZ', // Coincide con data-id en HTML
        name: 'AIRE GOODWEATHER 12.000 BTU GW-12INVS INVERTER R410A 2PZ', // Nombre completo
        images: ['imagenes/AIRE ACONDICIONADO GOODWEATHER 12000BTU GW-12FO R410.png'], // Array de rutas
        description_full: 'El aire acondicionado Goodweather GW-12INVS de 12,000 BTU es la solución perfecta para enfriar habitaciones de 20-25 m² con eficiencia y ahorro energético gracias a su tecnología Inverter y refrigerante R410A. Su diseño Split de pared se adapta a cualquier espacio, mientras que funciones como deshumidificación, modo Sleep y temporizador mejoran el confort. Equipado con un compresor rotativo de alta eficiencia y un filtro de aire lavable, garantiza un ambiente fresco y limpio. Bajo nivel de ruido y control remoto incluido para mayor comodidad', // Descripción detallada
        characteristics: [
             'AREA DE COBERTURA: HASTA 20-25 M² ',
             'CAPACIDAD DE ENFRIAMIENTO: 12,000 BTU ',
             'CONSUMO DE ENERGIA: 1,200W ',
             'ACCESORIOS INCLUIDOS: CONTROL REMOTO, KIT DE INSTALACIÓN BÁSICO',
             'CONTROL REMOTO: INCLUIDO ',
             'FILTRO: LAVABLE ',
             'FUNCIONES ADICIONALES: MODO SLEEP, TIMER, AUTO RESTART ',
             'COMPRESOR: ROTATIVO INVERTER ',
             'RANGO DE TEMPERATURA: 17°CA 30°C ',
             'TIPO DE REFRIGERANTE: R410A ',
             'VOLTAJE: 220-240 V / 1 FASE / 60 HZ '
        ]
    },
    {
        id: 'Acondicionador de Aire Split Haustec TSWEES 12000BTU', // Coincide con data-id en HTML
        name: 'Acondicionador de Aire Split Haustec TSWEES 12000BTU', // Nombre completo
        images: ['imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU2.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU3.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU4.jpg'], // Array de rutas
        description_full: 'Climatizá tu ambiente con eficiencia y estilo gracias al aire acondicionado Haustec TSWEES‑12R. Con capacidad de 12 000 BTU, es ideal para dormitorios, oficinas o salas medianas. Ofrece confort todo el año con bajo consumo energético y funcionamiento silencioso.', // Descripción detallada
        characteristics: [
             'Modo ecológico. Para ahorrar en las facturas de electricidad y mantener un rango de temperatura ajustado',
             'Refresco con mas velocidades. Los ajustes más amplios que le permiten establecer una velocidad de aire perfecta y ajustada.',
             'Reinicio automático de corte de energía',
             'Filtro HD, reduce las impurezas del ambiente.',
             'Utiliza Gas Ecológico.',
             'Mejor diseño y apariencia en el evaporador.',
             'Visualización de temperatura LED ',
             'Frío/Calor con mayor rapidez.',
             'Control remoto inteligente ',
             'Monofásico. ',
             'kg  R410A/0.640 Kg '
        ]
    },
    {
        id: 'Acondicionador de Aire Split Haustec  12000 TSW INVERTER', // Coincide con data-id en HTML
        name: 'Acondicionador de Aire Split Haustec  12000 TSW INVERTER', // Nombre completo
        images: ['imagenes/SPLIT PARED 12000 TSW INVERTER.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU2.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU3.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU4.jpg'], // Array de rutas
        description_full: 'Equipado con tecnología Inverter, el TSWEINV‑12R de Haustec ofrece climatización eficiente y silenciosa para espacios de hasta 25 m². Disminuye el consumo de energía en hasta el 50 %, funciona en modo frío o calor, y garantiza un ambiente cómodo durante todo el año.', // Descripción detallada
        characteristics: [
             'Tecnología Inverter: Reduce consumo energético hasta en un 50%',
             'Refresco con mas velocidades. Los ajustes más amplios que le permiten establecer una velocidad de aire perfecta y ajustada.',
             'Reinicio automático de corte de energía',
             'Filtro HD, reduce las impurezas del ambiente.',
             'Utiliza Gas Ecológico.',
             'Mejor diseño y apariencia en el evaporador.',
             'Visualización de temperatura LED ',
             'Frío/Calor con mayor rapidez.',
             'Control remoto inteligente ',
             'Monofásico. ',
             'kg  R410A/0.630 Kg '
        ]
    },
    {
        id: 'ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU F/C C/CONTROL', // Coincide con data-id en HTML
        name: 'ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU F/C C/CONTROL', // Nombre completo
        images: ['imagenes/ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU.jpg','imagenes/ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU2.jpg'], // Array de rutas
        description_full: 'El aire acondicionado Split Tokyo Xperience de 12 000 BTU es ideal para mantener tu hogar u oficina a una temperatura confortable durante todo el año. Con diseño elegante, múltiples funciones inteligentes y un sistema de filtrado avanzado, garantiza confort y calidad del aire.', // Descripción detallada
        characteristics: [
             'Capacidad 12.000 BTU',
             '3 niveles de filtración carbon activo, Ion de plata y filtro catalizador de frio.',
             'Rango de temperatura 16°C-30°C.',
             'Display Led.',
             'Función Timer.',
             'Modo Turbo',
             'Modo silencio y Display Led apagado.',
             'Modo sueño',
             'Kit de Instalación cable de conexión de 3,5m, tubería de cobre puro de 3m, tubo de desagüe de 2m.',
             'Monofásico. ',
             'Auto restart.'
        ]
    },
    {
        id: 'AIRE ACONDICIONADO GOODWEATHER 18000BTU GW-18FO R410', // Coincide con data-id en HTML
        name: 'AIRE ACONDICIONADO GOODWEATHER 18000BTU GW-18FO R410', // Nombre completo
        images: ['imagenes/AIRE ACONDICIONADO GOODWEATHER 12000BTU GW-12FO R410.png'], // Array de rutas
        description_full: 'El aire acondicionado Split Goodweather GW‑18FO de 18.000 BTU (R410A) es la solución ideal para climatizar espacios medianos con eficiencia, bajo consumo y funcionamiento silencioso. Perfecto para hogares, oficinas o pequeños comercios.', // Descripción detallada
        characteristics: [
             'Capacidad: 18.000 BTU, ideal para ambientes de hasta 30 m²',
             'Refrigerante ecológico R410A, más eficiente y respetuoso con el medio ambiente',
             'Compresor rotativo, para un enfriamiento rápido y constante',
             'Modos de operación: frío, calor, deshumidificación, ventilador y auto-reinicio',
             'Función Sleep, que ajusta la temperatura durante la noche para mayor comodidad',
             'Operación silenciosa, con nivel de ruido aproximado de 42 dB',
             'Control remoto con pantalla LED, práctico y fácil de usar',
             'TIPO DE REFRIGERANTE: R410A ',
             'Tensión: 220–240 V / 50 Hz, compatible con instalaciones residenciales'
        ]
    },
    {
        id: 'Acondicionador de Aire Split Haustec TSWEES 18000BTU', // Coincide con data-id en HTML
        name: 'Acondicionador de Aire Split Haustec TSWEES 18000BTU', // Nombre completo
        images: ['imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU2.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU3.jpg','imagenes/Acondicionador de Aire Split Haustec TSWEES 12000BTU4.jpg'], // Array de rutas
        description_full: 'Optimizado para ambientes amplios como salas, oficinas o locales comerciales, el Haustec TSWEES‑18R ofrece climatización eficiente durante todo el año. Su diseño elegante, alto desempeño y bajo consumo lo convierten en la opción ideal para quienes buscan confort y estilo.', // Descripción detallada
        characteristics: [
             'Potencia versátil: 18 000 BTU en modo frío y 18 500 BTU en modo calor, ideal para áreas medianas a grandes.',
             'Sistema frío/calor: adaptabilidad total a cualquier estación del año',
             'Modo ECO: reducción del consumo energético sin perder confort.',
             'Gas refrigerante R410A: respetuoso con el medio ambiente.',
             'Filtro de alta densidad (HD): mejora notablemente la calidad del aire, eliminando polvo y alérgenos.',
             'Control remoto multifunción: incluye temporizador, modo noche, reinicio automático tras cortes de energía y varias velocidades de ventilador.',
             'Visualización de temperatura LED ',
             'Panel frontal con display LED: diseño moderno y visualización clara de temperatura.',
             'Voltaje: 220–240 V / 50 Hz (monofásico).',
             'Monofásico. ',
             'Compresor rotativo: confiable y reflexivo en su rendimiento.'
        ]
    },
    {
        id: 'Acondicionador de Aire Split Speed 18000BTU', // Coincide con data-id en HTML
        name: 'Acondicionador de Aire Split Speed 18000BTU', // Nombre completo
        images: ['imagenes/Acondicionador de Aire Split Speed 18000BTU.jpg'], // Array de rutas
        description_full: 'Descubrí el aire acondicionado split Speed SAT18B50H‑XA6 de 18.000 BTU (50 Hz), diseñado para ofrecer un ambiente cómodo y fresco durante todo el año. Su estilo moderno se combina con tecnología eficiente que garantiza silencio y ahorro energético.', // Descripción detallada
        characteristics: [
             'Capacidad: 18.000 BTU, ideal para espacios medios a grandes   ',
             'Ciclo frío/calor: comodidad en todas las estaciones',
             'Modos de funcionamiento: frío, calor, deshumidificación, ventilación y automático',
             'Sistema ultra silencioso: ideal para dormitorios y oficinas',
             'Filtro de alta densidad (HD): mejora notablemente la calidad del aire, eliminando polvo y alérgenos.',
             'Control remoto multifunción: incluye temporizador, modo noche, reinicio automático tras cortes de energía y varias velocidades de ventilador.',
             'Visualización de temperatura LED ',
             'Panel frontal con display LED: diseño moderno y visualización clara de temperatura.',
             'Voltaje: 220–240 V / 50 Hz (monofásico).',
             'Monofásico. ',
             'Alto ahorro energético: diseñado para optimizar consumo'
        ]
    },
    {
        id: 'A.A SPLIT TOKYO 18000 BTU EXTENSE IONIC CME21-18CHRL', // Coincide con data-id en HTML
        name: 'A.A SPLIT TOKYO 18000 BTU EXTENSE IONIC CME21-18CHRL', // Nombre completo
        images: ['imagenes/ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU.jpg','imagenes/ACONDICIONADOR DE AIRE TOKYO XPERIENCE 12000 BTU2.jpg'], // Array de rutas
        description_full: 'El Extense Ionic Tokyo de 18 000 BTU es ideal para climatizar habitaciones y oficinas medianas. Con tecnología de ionización ofrece aire puro, fresco y funcionamiento silencioso durante todo el año.', // Descripción detallada
        characteristics: [
             'Potencia eficaz: 18 000 BTU en modos frío y calor, adecuado para ambientes de hasta 40 m².',
             'Tecnología iónica: emite iones negativos que ayudan a limpiar el aire, reduciendo partículas y mejorando la calidad del ambiente interior..',
             'Refrigerante ecológico: utiliza gas amigable con el medio ambiente.',
             'Flujo de aire multidireccional: las aletas oscilan horizontal y verticalmente para una distribución uniforme del aire.',
             'Función Timer.',
             'Modo Turbo',
             'Control remoto completo: incluye función temporizador, reinicio automático tras cortes de energía y múltiples velocidades de ventilador.',
             'Modo sueño',
             'Kit de Instalación cable de conexión de 3,5m, tubería de cobre puro de 3m, tubo de desagüe de 2m.',
             'Monofásico. ',
             'Auto restart.'
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE AIRES ACONDICIONADOS Y CLIMATIZACIÓN.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!


    // --- EJEMPLO: PEQUEÑOS ELECTRODOMÉSTICOS ---
    {
        id: 'Plancha a Vapor Electrolux 2200W', // Coincide con data-id en HTML
        name: 'Plancha a Vapor Electrolux 2200W', // Nombre completo
        images: ['imagenes/Plancha a Vapor Electrolux 2200W.png', 'imagenes/Plancha a Vapor Electrolux 2200W2.png','imagenes/Plancha a Vapor Electrolux 2200W3.png','imagenes/Plancha a Vapor Electrolux 2200W4.png'], // Array de rutas
        description_full: 'La Plancha a Vapor Electrolux 2200W es la aliada perfecta para mantener tu ropa impecable con rapidez y precisión. Su diseño cuenta con botones especiales para planchar entre puntas y bordes, ideal para camisas de vestir.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Plancha a Vapor Electrolux 2200W',
             '🔹 Código: 16934',
             '🔹 Botones especiales para puntas y bordes finos',
             '🔹 Base PerfectGlide de cerámica con 64 salidas de vapor',
             '🔹 Sistema de autolimpieza del depósito',
             '🔹 Selector de temperatura ajustable',
             '🔹 Sistema anti-goteo: evita manchas al planchar',
             '🔹 Función de planchado en seco o a vapor',
             '🔹 Indicador de base caliente para mayor seguridad',
             '🔹 Chorro de vapor extra para arrugas difíciles',
             '🔹 Empuñadura de goma y soporte trasero',
             '🔹 Sistema antical que alarga la vida útil',
             '🔹 Luz piloto que indica cuándo está lista',
             '🔹 Depósito transparente con capacidad de 280 ml'
        ]
    },
     {
        id: 'Plancha Tokyo Facilita con Spray', // Coincide con data-id en HTML
        name: 'Plancha Tokyo Facilita con Spray', // Nombre completo
        images: ['imagenes/Plancha Tokyo Facilita con Spray.png'], // Array de rutas (1 imagen)
        description_full: 'La Plancha Tokyo Facilita con Spray es perfecta para quienes buscan practicidad y eficiencia al planchar. Con 1200W de potencia, calienta rápidamente y su suela antiadherente permite un deslizamiento suave sobre todo tipo de tela.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Plancha Tokyo Facilita con Spray',
             '🔹 Código: 11891',
             '🔹 Potencia de 1200W para calentamiento rápido',
             '🔹 Suela antiadherente para mejor deslizamiento',
             '🔹 Función spray que facilita el planchado',
             '🔹 Control de temperatura ajustable',
             '🔹 Depósito de agua de 200 ml',
             '🔹 Cable de 1,8 metros giratorio',
             '🔹 Diseño ergonómico y ligero',
             '🔹 Sistema de seguridad con apagado automático'
        ]
    },
    {
        id: 'Plancha a vapor Arno Essential FV1051B2', // Coincide con data-id en HTML
        name: 'Plancha a vapor Arno Essential FV1051B2', // Nombre completo
        images: ['imagenes/Plancha a vapor Arno Essential FV1051B2.png','imagenes/Plancha a vapor Arno Essential FV1051B22.png'], // Array de rutas (1 imagen)
        description_full: 'La Plancha a Vapor Arno Essential FV1051B2 combina practicidad, eficiencia y diseño compacto, ideal para el uso diario. Con 1100W de potencia, ofrece una excelente performance con impulso de vapor de 80 g/min, además de vapor vertical y función spray, facilitando la eliminación de arrugas en todo tipo de telas.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Plancha a Vapor Arno Essential FV1051B2',
             '🔹 Código: 21078',
             '🔹 Marca: Arno',
             '🔹 Potencia: 1100W',
             '🔹 Impulso de vapor: 80 g/min con función vertical y spray',
             '🔹 Salida continua de vapor: 15 g/min',
             '🔹 Capacidad del depósito: 180 ml',
             '🔹 Suela antiadherente para mejor deslizamiento',
             '🔹 Sistema Easycord para mayor comodidad al planchar',
             '🔹 Medidas: Ancho 29,5 cm, Alto 15,5 cm, Largo 13 cm'
        ]
    },
    //<!-- Bloque para una Licuadora - EJEMPLO -->
    {
        id: 'LICUADORA ARNO ULTRAFORCE MOD LN92 INOX 1400W', // Coincide con data-id en HTML
        name: 'LICUADORA ARNO ULTRAFORCE MOD LN92 INOX 1400W', // Nombre completo
        images: ['imagenes/LICUADORA ARNO ULTRAFORCE MOD LN92 INOX 1400W.png','imagenes/LICUADORA ARNO ULTRAFORCE MOD LN92 INOX 1400W2.png'], // Array de rutas (1 imagen)
        description_full: 'La Licuadora Arno UltraForce Mod LN92 Inox 1400W es sinónimo de potencia y resistencia. Equipada con un motor de 1400W, está diseñada para triturar incluso los ingredientes más duros con facilidad, garantizando resultados perfectos en cada mezcla. Cuenta con vaso de vidrio ultra resistente de 2,2 litros, ideal para preparaciones en grandes cantidades, y 8 velocidades + función pulsar, que permiten ajustar la potencia según cada receta.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Licuadora Arno UltraForce MOD LN92 Inox',
             '🔹 Código: 21345',
             '🔹 Potencia: 1400W',
             '🔹 Vaso de vidrio resistente con capacidad de 2,2 litros',
             '🔹 8 velocidades + función pulsar',
             '🔹 Tritura ingredientes duros con facilidad',
             '🔹 Alta durabilidad y calidad de corte',
             '🔹 Diseño elegante en acero inoxidable',
             '🔹 Ideal para uso intensivo en cocina'
        ]
    },
    //<!-- Bloque para una Batidora - EJEMPLO -->
    {
        id: 'BATIDORA ARNO CHEF RED 400W 5V CAP. 5 L', // Coincide con data-id en HTML
        name: 'BATIDORA ARNO CHEF 5L 5VEL 400W RED', // Nombre completo
        images: ['imagenes/BATIDORA ARNO CHEF 5L 5VEL 400W RED.png','imagenes/BATIDORA ARNO CHEF 5L 5VEL 400W RED2.png','imagenes/BATIDORA ARNO CHEF 5L 5VEL 400W RED3.png'], // Array de rutas (1 imagen)
        description_full: 'Su bowl de 5 litros permite trabajar con grandes volúmenes, perfecta para repostería y cocina familiar. Su estructura robusta y motor confiable la hacen una aliada imprescindible en cualquier cocina. Disponible en color rojo intenso, aporta un toque moderno y vibrante al ambiente.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Batidora Arno Chef 5L Roja',
             '🔹 Código: 19007',
             '🔹 Potencia: 400W',
             '🔹 Velocidades: 5 niveles de velocidad',
             '🔹 Capacidad del bowl: 5 litros',
             '🔹 Ideal para preparar mezclas, batidos y masas',
             '🔹 Diseño moderno en color rojo',
             '🔹 Dimensiones del empaque: 39,5 x 26 x 33 cm',
             '🔹 Peso: 2,2 kg'
        ]
    },
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE PEQUEÑOS ELECTRODOMÉSTICOS.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!

     // --- EJEMPLO: CABECERAS Y CAMAS ---
    {
        id: 'Cabeceira Casal Bourbon de Santos Andirá', // Coincide con data-id en HTML
        name: 'Cabeceira Casal Bourbon de Santos Andirá', // Nombre completo
        images: ['imagenes/Cabeceira Casal Bourbon de Santos Andirá.png', 'imagenes/Cabeceira Casal Bourbon de Santos Andirá2.png'], // Array de rutas
        description_full: 'Su acabado está disponible en dos combinaciones refinadas: Jatobá o Jatobá/Areia, ambas pensadas para adaptarse a diferentes gustos y ambientes. Con espacios funcionales y excelente calidad en los materiales, esta cabeceira no solo decora, sino que también aporta practicidad.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Casal Bourbon',
             '🔹 Marca: Santos Andirá',
             '🔹 Código: 20841',
             '🔹 Acabado disponible:',
             '   - Jatobá: 230644',
             '   - Jatobá/Areia: 230634',
             '🔹 Altura: 1150 mm',
             '🔹 Ancho: 2456 mm',
             '🔹 Profundidad: 460 mm',
             '🔹 Diseño moderno y funcional',
             '🔹 Ideal para camas de dos plazas',
             '🔹 Excelente calidad de fabricación'
        ]
    },
    {
        id: 'Cabeceira Belle', // Coincide con data-id en HTML
        name: 'Cabeceira Belle', // Nombre completo
        images: ['imagenes/Cabeceira Belle.png'], // Array de rutas
        description_full: 'La Cabeceira Belle (Código 21462) es una pieza que combina estilo, comodidad y sustentabilidad. Con una estructura fabricada en madera de reforestación (pino, eucalipto y MDF), tratada contra moho, termitas y microorganismos, ofrece gran resistencia y larga vida útil.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Belle',
            '🔹 Código: 21462',
            '🔹 Estructura de madera de reforestación: pino, eucalipto y placas MDF',
            '🔹 Tratamiento contra moho, termitas y microorganismos',
            '🔹 Espuma de alta densidad: D20 (estructura) y D14 (adornos)',
            '🔹 Revestimientos variados: colores, texturas y estampados modernos',
            '🔹 Detalles en MDP de 15 mm',
            '🔹 Respaldo en tela Kami',
            '🔹 Sapatas plásticas: protegen el piso y facilitan el desplazamiento',
            '🔹 Altura: 138 cm',
            '🔹 Profundidad: 9 cm',
            '🔹 Anchos disponibles:',
            '   - 162 cm (cama de 1,40 m)',
            '   - 182 cm (cama de 1,60 m)',
            '   - 217 cm (cama de 1,95 m)'
        ]
    },
    {
        id: 'Cabeceira Cairo', // Coincide con data-id en HTML
        name: 'Cabeceira Cairo', // Nombre completo
        images: ['imagenes/Cabeceira Cairo.png'], // Array de rutas
        description_full: 'La Cabeceira Cairo (Código 21464) combina calidad, diseño y confort para tu dormitorio. Fabricada con madera de reforestación como pino, eucalipto y MDF, su estructura está tratada para resistir moho, termitas y otros microorganismos, garantizando durabilidad y sustentabilidad.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Cairo',
             '🔹 Código: 21464',
             '🔹 Estructura de madera de reforestación (pino, eucalipto, MDF)',
             '🔹 Tratamiento contra moho, termitas y microorganismos',
             '🔹 Espuma D20 (estructura) y D14 (adornos)',
             '🔹 Revestimientos modernos: colores, texturas y estampados variados',
             '🔹 Acabados: costas en tela Kami o tejido',
             '🔹 Sapatas plásticas para protección del piso y fácil desplazamiento',
             '🔹 Dimensiones para cama de 1,40 m: 1,95 x 1,10 x 0,42 m',
             '🔹 Dimensiones para cama de 1,60 m: 2,19 x 1,10 x 0,42 m',
             '🔹 Dimensiones para cama de 1,95 m: 2,50 x 1,10 x 0,42 m'
        ]
    },
    {
        id: 'Cabeceira Viena', // Coincide con data-id en HTML
        name: 'Cabeceira Viena', // Nombre completo
        images: ['imagenes/Cabeceira Viena.png'], // Array de rutas
        description_full: 'La Cabecera Viena (Código 21471) se destaca por su diseño sofisticado y lujoso, con botones de cristal y tachuelas decorativas que añaden un estilo glam a tu dormitorio. Es perfecta para quienes buscan funcionalidad sin renunciar al buen gusto.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabecera Viena',
             '🔹 Código: 21471',
             '🔹 Diseño elegante con botones de cristal y tachuelas decorativas',
             '🔹 Estructura robusta que garantiza durabilidad',
             '🔹 Fácil instalación con sistema de fijación por marco',
             '🔹 Pies plásticos para mayor estabilidad y estilo moderno',
             '🔹 Anchos disponibles: 1,40 m / 1,60 m / 1,95 m',
             '🔹 Largos: 1,48 m / 1,68 m / 2,03 m (según cama)',
             '🔹 Altura: 1,48 m',
             '🔹 Profundidad: 0,10 m'
        ]
    },
    {
        id: 'Cabeceira Monaco', // Coincide con data-id en HTML
        name: 'Cabeceira Monaco', // Nombre completo
        images: ['imagenes/Cabeceira Monaco.png'], // Array de rutas
        description_full: 'La Cabeceira Mónaco (Código 21467) es sinónimo de elegancia y sofisticación. Su diseño tapizado con botones de cristal y tachuelas decorativas convierte cualquier dormitorio en un espacio lujoso y moderno. Construida con materiales resistentes, su estructura robusta garantiza una larga vida útil. Incluye un práctico sistema de fijación con marco, que permite una instalación rápida y segura.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Mónaco',
             '🔹 Código: 21467',
             '🔹 Diseño elegante con botones de cristal y tachuelas decorativas',
             '🔹 Estructura robusta para mayor durabilidad',
             '🔹 Sistema de fijación con marco para fácil instalación',
             '🔹 Pies plásticos que brindan estabilidad y estilo moderno',
             '🔹 Anchos: 1,40 m / 1,60 m / 1,95 m',
             '🔹 Largos: 1,60 m / 1,80 m / 2,15 m',
             '🔹 Altura: 1,50 m',
             '🔹 Profundidad: 0,33 m'
        ]
    },
    {
        id: 'Cabeceira Napole', // Coincide con data-id en HTML
        name: 'Cabeceira Napole', // Nombre completo
        images: ['imagenes/Cabeceira Napole.png'], // Array de rutas
        description_full: 'La Cabeceira Napole (Código 21469) combina estilo y resistencia en una sola pieza. Con un diseño tapizado en botones de cristal y tachuelas decorativas, ofrece un toque de elegancia y sofisticación ideal para cualquier tipo de dormitorio.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Napole',
             '🔹 Código: 21469',
             '🔹 Diseño elegante con botones de cristal y tachuelas decorativas',
             '🔹 Estructura robusta para mayor durabilidad',
             '🔹 Sistema de fijación con marco para instalación segura',
             '🔹 Pies metalizados con acabado moderno',
             '🔹 Anchos disponibles: 0,90 m / 0,98 m / 1,40 m / 1,60 m / 1,95 m',
             '🔹 Altura: 1,28 m',
             '🔹 Profundidad: 0,10 m'
        ]
    },
    {
        id: 'Colchon F.A A.Suporte D45 160KG.97X203X32', // Coincide con data-id en HTML
        name: 'Colchon F.A A.Suporte D45 160KG.97X203X32', // Nombre completo
        images: ['imagenes/Colchon F.A A.Suporte D45 160KG.97X203X32.png'], // Array de rutas
        description_full: 'El Colchón F.A A. Suporte D45 está diseñado para quienes buscan firmeza, resistencia y comodidad en un solo producto. Con espuma D45 certificada en ambas caras, garantiza un soporte ideal para personas de hasta 160 kg, manteniendo su forma y firmeza con el tiempo.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Colchón F.A A.Suporte D45',
             '🔹 Código: 20179',
             '🔹 Medidas: 97 x 203 x 32 cm',
             '🔹 Espuma D45 certificada en ambas caras',
             '🔹 Tapa en malla con fibra Active Protection',
             '🔹 Protección contra bacterias y ácaros',
             '🔹 Sistema de resortes ensacados individualmente (PHP)',
             '🔹 Tecnología suiza: independencia de movimiento',
             '🔹 Soporta hasta 160 kg por persona',
             '🔹 Estructura lateral Poly Board de alta densidad',
             '🔹 Fieltros resinados aislantes',
             '🔹 Bordes con doble estructura de acero y espuma',
             '🔹 Firmeza media con alta resistencia y durabilidad'
        ]
    },
    {
        id: 'Sommier F.A Dakota D40 150KG.158X198X32', // Coincide con data-id en HTML
        name: 'Sommier F.A Dakota D40 150KG.158X198X32', // Nombre completo
        images: ['imagenes/Sommier F.A Dakota D40 150KG.158X198X32.png','imagenes/Sommier F.A Dakota D40 150KG.158X198X322.png'], // Array de rutas
        description_full: 'El Sommier F.A Dakota D40 forma parte de la exclusiva Línea Premium y está diseñado para brindar un descanso ergonómico, fresco y duradero. Con una altura de 32 cm, combina lo mejor en espumas viscoelásticas, visco gel y resortes suizos, para ofrecer una experiencia de sueño excepcional.', // Descripción detallada
        characteristics: [
              '🔹 Producto: Sommier F.A Dakota D40',
              '🔹 Código: 20183',
              '🔹 Medidas: 158 x 198 x 32 cm',
              '🔹 Línea Premium de alta gama',
              '🔹 Tapa en tejido de malla con fibra Active Protection',
              '🔹 Acción antibacterial, frescura y suavidad al tacto',
              '🔹 Sistema de doble pillow para confort lujoso',
              '🔹 Capas de Visco Gel Sense + espuma viscoelástica NASA',
              '🔹 Termorregulación y adaptación al cuerpo',
              '🔹 Espuma D40 certificada – firmeza controlada',
              '🔹 Sistema de resortes Indispring (tecnología suiza)',
              '🔹 Independencia de movimiento y soporte individualizado',
              '🔹 Fieltros resinados y estructura lateral Poly Board',
              '🔹 Bordes reforzados con acero y espuma',
              '🔹 Soporta hasta 150 kg por persona'
        ]},
        // --- EJEMPLO: Muebles Y Roperos ---
    {
        id: 'Ropero Aurora 3.3', // Coincide con data-id en HTML
        name: 'Ropero Aurora 3.3 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Aurora 3.3 de Santos Andirá.png', 'imagenes/Ropero Aurora 3.3 de Santos Andirá2.jpg','imagenes/Ropero Aurora 3.3 de Santos Andirá3.jpg','imagenes/Ropero Aurora 3.3 de Santos Andirá4.png'], // Array de rutas
        description_full: 'El Ropero Aurora 3.3 combina elegancia, funcionalidad y gran capacidad de almacenamiento, ideal para quienes buscan un placar moderno y práctico. Sus puertas con detalles ripados en MDF y tiradores revestidos le otorgan un diseño contemporáneo que se adapta a distintos estilos de dormitorio.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Cabeceira Casal Bourbon',
             '🔹 Marca: Santos Andirá',
             '🔹 Código: 20841',
             '🔹 Acabado disponible:',
             '   - Jatobá: 230644',
             '   - Jatobá/Areia: 230634',
             '🔹 Altura: 1150 mm',
             '🔹 Ancho: 2456 mm',
             '🔹 Profundidad: 460 mm',
             '🔹 Diseño moderno y funcional',
             '🔹 Ideal para camas de dos plazas',
             '🔹 Excelente calidad de fabricación'
        ]
    },
    {
        id: 'Ropero Buriti de 6 Puertas', // Coincide con data-id en HTML
        name: 'Ropero Buriti de 6 Puertas', // Nombre completo
        images: ['imagenes/Ropero Buriti de 6 Puertas.png', 'imagenes/Ropero Buriti de 6 Puertas2.png','imagenes/Ropero Buriti de 6 Puertas3.png','imagenes/Ropero Buriti de 6 Puertas4.png'], // Array de rutas
        description_full: 'El Ropero Buriti 6 Puertas de Santos Andirá ofrece un diseño moderno y robusto, combinando puertas centrales ripadas en MDF y tiradores elegantes. Tiene un gran espacio interno, con 4 cajones, 7 estantes, 3 tubos colgadores, cofre de seguridad y un maleiro superior ideal para maletas u objetos grandes.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Buriti de 6 Puertas',
             '🔹 Código: 20859',
             '🔹 Diseño moderno con puertas centrales ripadas en MDF',
             '🔹 Tiradores en ABS y MDF revestido',
             '🔹 4 cajones con correderas telescópicas',
             '🔹 7 estantes amplios',
             '🔹 3 tubos colgadores de aluminio',
             '🔹 Maleiro superior para objetos grandes',
             '🔹 Cofre embutido para objetos de valor',
             '🔹 Estructura en MDP y MDF (15 mm / 12 mm)',
             '🔹 Fondo HDF de 2,5 mm',
             '🔹 Bisagras metálicas y sistema minifix',
             '🔹 Pintura UV con acabado fosco',
             '🔹 Colores disponibles: Jatobá, Jatobá/Areia, Jatobá/Grafite',
             '🔹 Altura: 219 cm',
             '🔹 Ancho: 232 cm',
             '🔹 Profundidad: 46,3 cm'
        ]
    },
    {
        id: 'Ropero Democrata de 3 Puertas Corredizas', // Coincide con data-id en HTML
        name: 'Ropero Democrata de 3 Puertas Corredizas', // Nombre completo
        images: ['imagenes/Ropero Democrata de 3 Puertas Corredizas.png', 'imagenes/Ropero Democrata de 3 Puertas Corredizas2.png','imagenes/Ropero Democrata de 3 Puertas Corredizas3.jpg','imagenes/Ropero Democrata de 3 Puertas Corredizas4.png'], // Array de rutas
        description_full: 'El Ropero Demócrata 3 Puertas Corredizas es una excelente opción para quienes buscan elegancia, funcionalidad y gran capacidad. Sus puertas laterales con detalles ripados en MDF aportan un estilo moderno, mientras que la puerta central con 3 espejos amplía visualmente el ambiente.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Demócrata 3 Puertas Corredizas',
             '🔹 Código: 20849',
             '🔹 Puertas laterales con diseño ripado en MDF',
             '🔹 Puerta central con 3 espejos de 780x650 mm',
             '🔹 5 cajones con correderas telescópicas',
             '🔹 2 tubos colgadores de aluminio',
             '🔹 Estantes amplios y maleteros superiores',
             '🔹 Molduras de 25 mm',
             '🔹 Rieles de aluminio para puertas corredizas',
             '🔹 Acabado en Jatobá/Areia/Jatobá',
             '🔹 Pintura UV con terminación semi-brillante',
             '🔹 Alto: 237,5 cm',
             '🔹 Ancho: 252,8 cm',
             '🔹 Profundidad: 61,5 cm'
        ]
    },
    {
        id: 'Ropero Fit 3.2 de Santos Andirá', // Coincide con data-id en HTML
        name: 'Ropero Fit 3.2 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Fit 3.2 de Santos Andirá.png', 'imagenes/Ropero Fit 3.2 de Santos Andirá2.jpg','imagenes/Ropero Fit 3.2 de Santos Andirá3.jpg'], // Array de rutas
        description_full: 'El Ropero Fit 3.2 de Santos Andirá es una solución compacta y funcional para dormitorios que necesitan aprovechar el espacio sin perder estilo. Su estructura de paneles de 12 mm brinda resistencia y durabilidad, mientras que sus 3 puertas y 2 cajones permiten organizar eficientemente ropa y accesorios.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Fit 3.2 de Santos Andirá',
             '🔹 Código: 20877',
             '🔹 Estructura 100% en paneles de 12 mm',
             '🔹 3 puertas y 2 cajones',
             '🔹 Cabideiro de aluminio resistente',
             '🔹 Corrediças metálicas en los cajones',
             '🔹 Puxadores de PVC duraderos',
             '🔹 Pies de PVC para mayor estabilidad',
             '🔹 Acabado brillante en Blanco, Jequitibá y Jequitibá-Off',
             '🔹 Altura: 191 cm',
             '🔹 Ancho: 69,3 cm',
             '🔹 Profundidad: 42,2 cm'
        ]
    },
    {
        id: 'Ropero Fit 3.2 de Santos Andirá', // Coincide con data-id en HTML
        name: 'Ropero Fit 3.2 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Fit 3.2 de Santos Andirá.png', 'imagenes/Ropero Fit 3.2 de Santos Andirá2.jpg','imagenes/Ropero Fit 3.2 de Santos Andirá3.jpg'], // Array de rutas
        description_full: 'El Ropero Fit 3.2 de Santos Andirá es una solución compacta y funcional para dormitorios que necesitan aprovechar el espacio sin perder estilo. Su estructura de paneles de 12 mm brinda resistencia y durabilidad, mientras que sus 3 puertas y 2 cajones permiten organizar eficientemente ropa y accesorios.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Fit 3.2 de Santos Andirá',
             '🔹 Código: 20877',
             '🔹 Estructura 100% en paneles de 12 mm',
             '🔹 3 puertas y 2 cajones',
             '🔹 Cabideiro de aluminio resistente',
             '🔹 Corrediças metálicas en los cajones',
             '🔹 Puxadores de PVC duraderos',
             '🔹 Pies de PVC para mayor estabilidad',
             '🔹 Acabado brillante en Blanco, Jequitibá y Jequitibá-Off',
             '🔹 Altura: 191 cm',
             '🔹 Ancho: 69,3 cm',
             '🔹 Profundidad: 42,2 cm'
        ]
    },
    {
        id: 'Ropero Fit 4.2 de Santos Andirá', // Coincide con data-id en HTML
        name: 'Ropero Fit 4.2 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Fit 4.2 de Santos Andirá.jpg', 'imagenes/Ropero Fit 4.2 de Santos Andirá2.jpg','imagenes/Ropero Fit 4.2 de Santos Andirá3.jpg'], // Array de rutas
        description_full: 'El Ropero Fit 4.2 es una opción funcional y moderna para quienes buscan un ropero compacto pero con buena capacidad. Ofrece 4 puertas batientes con tiradores de PVC, 2 cajones internos, varias repisas, y un cabideiro de aluminio para prendas largas.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Fit 4.2 de Santos Andirá',
             '🔹 Código: 20875',
             '🔹 4 puertas batientes con tiradores en PVC',
             '🔹 2 cajones con correderas metálicas',
             '🔹 Amplias repisas internas',
             '🔹 Cabideiro en aluminio para ropa larga',
             '🔹 Estructura 100% en MDP de 12 mm',
             '🔹 Pies en PVC para mayor estabilidad',
             '🔹 Pintura UV con acabado brillante',
             '🔹 Colores disponibles: Blanco, Jequitibá, Jequitibá-Off',
             '🔹 Altura: 191 cm',
             '🔹 Ancho: 69,3 cm',
             '🔹 Profundidad: 42,2 cm'
        ]
    },
    {
        id: 'Ropero Fit 6.2 de Santos Andirá', // Coincide con data-id en HTML
        name: 'Ropero Fit 6.2 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Fit 6.2 de Santos Andirá.png', 'imagenes/Ropero Fit 6.2 de Santos Andirá2.jpg','imagenes/Ropero Fit 6.2 de Santos Andirá3.png'], // Array de rutas
        description_full: 'El Ropero Fit 6.2 es una opción funcional y moderna para quienes buscan un ropero compacto pero con buena capacidad. Ofrece 4 puertas batientes con tiradores de PVC, 2 cajones internos, varias repisas, y un cabideiro de aluminio para prendas largas.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Fit 6.2 de Santos Andirá',
             '🔹 Código: 20873',
             '🔹 6 puertas batientes con bisagras metálicas',
             '🔹 Tiradores en PVC de diseño moderno',
             '🔹 2 cajones con correderas metálicas',
             '🔹 Amplias repisas para ropa, accesorios y calzado',
             '🔹 Cabideiro de aluminio para ropa larga',
             '🔹 Estructura en MDP de 12 mm',
             '🔹 Pies en PVC para mejor estabilidad y limpieza',
             '🔹 Pintura UV con acabado brillante y resistente',
             '🔹 Colores: Blanco, Jequitibá y Jequitibá-Off',
             '🔹 Altura: 191 cm',
             '🔹 Ancho: 137,2 cm',
             '🔹 Profundidad: 42,2 cm'
        ]
    },
    {
        id: 'Ropero Nápoles 8.4 de Santos Andirá', // Coincide con data-id en HTML
        name: 'Ropero Nápoles 8.4 de Santos Andirá', // Nombre completo
        images: ['imagenes/Ropero Nápoles 8.4 de Santos Andirá.png', 'imagenes/Ropero Nápoles 8.4 de Santos Andirá2.jpg','imagenes/Ropero Nápoles 8.4 de Santos Andirá3.jpg'], // Array de rutas
        description_full: 'El Ropero Fit 6.2 es una opción funcional y moderna para quienes buscan un ropero compacto pero con buena capacidad. Ofrece 4 puertas batientes con tiradores de PVC, 2 cajones internos, varias repisas, y un cabideiro de aluminio para prendas largas.', // Descripción detallada
        characteristics: [
             '🔹 Producto: Ropero Nápoles 8.4 de Santos Andirá',
             '🔹 Código: 20865',
             '🔹 8 puertas batientes con bisagras metálicas',
             '🔹 Tiradores en ABS de diseño moderno',
             '🔹 11 estantes espaciosos',
             '🔹 4 cajones con correderas telescópicas',
             '🔹 3 tubos colgadores de aluminio para ropa larga',
             '🔹 Fabricado en MDP y MDF de alta calidad',
             '🔹 Acabado UV resistente y fácil de limpiar',
             '🔹 Colores disponibles: Jatobá, Blanco, Jatobá/Areia, Jatobá/Grafite',
             '🔹 Altura: 217,6 cm',
             '🔹 Ancho: 212 cm',
             '🔹 Profundidad: 46,3 cm'
        ]
    },
    
     
    // >>> COPIA AQUÍ LOS OBJETOS PARA TUS PRODUCTOS REALES DE MUEBLES.
    // !!! CADA OBJETO DEBE TENER id, name, images:[], description_full, characteristics:[] !!!
    // !!! ASEGÚRATE DE QUE EL id COINCIDA EXACTAMENTE CON EL data-id EN EL HTML !!!

    // >>> ¡AÑADE AQUÍ OBJETOS PARA CUALQUIER OTRA CATEGORÍA QUE TENGAS! <<<
    // !!! SIEMPRE CON id, name, images:[], description_full, characteristics:[] !!!    
];


// --- 2. Obtener referencias a elementos HTML ---
const modal = document.getElementById('product-modal'); // El modal de detalles del producto
const modalImage = document.getElementById('modal-product-image'); // La imagen principal DENTRO del modal de detalles
const modalName = document.getElementById('modal-product-name');
const modalDescription = document.getElementById('modal-product-description');
const modalCharacteristicsList = document.querySelector('#modal-product-characteristics ul');
const modalQuoteButton = document.getElementById('modal-quote-button'); // Referencia al botón de WhatsApp en el modal
const closeButton = document.querySelector('.close-button'); // Botón cerrar MODAL
const productItems = document.querySelectorAll('.product-item'); // Selecciona todos los elementos con la clase 'product-item'

// Referencias a los elementos de la galería DENTRO del modal de detalles
const prevButton = document.querySelector('.gallery-nav-button.prev');
const nextButton = document.querySelector('.gallery-nav-button.next');
const galleryIndicatorsContainer = document.querySelector('.gallery-indicators');
const amplifyButton = document.getElementById('amplify-button'); // Botón Ampliar DENTRO del modal de detalles


// Referencias a los elementos de la NUEVA capa de ampliación
const amplifyOverlay = document.getElementById('amplify-overlay'); // La capa oscura de pantalla completa
const amplifiedImage = document.getElementById('amplified-image'); // La imagen DENTRO de la capa de ampliación
const closeOverlayButton = document.querySelector('.close-overlay-button'); // Botón cerrar CAPA AMPLIACIÓN


// Variables para controlar la galería (Mismas que antes)
let currentProduct = null; // Para guardar los datos del producto actual
let currentImageIndex = 0; // Para rastrear qué imagen se está mostrando


// --- 3. Función para mostrar el modal de detalles ---
function openModal(productId) {
    console.log("Abriendo modal para producto:", productId); // Log para depuración
    const product = productsData.find(p => p.id === productId);

    if (product) {
        currentProduct = product; // Guarda el producto actual
        currentImageIndex = 0; // Siempre empieza con la primera imagen al abrir el modal

        // Mostrar la primera imagen y actualizar indicadores
        updateModalImage(currentImageIndex);
        updateGalleryIndicators();

        modalName.textContent = product.name;
        // Usa la descripción_completa para el modal. Asegúrate que existe en tus objetos de productsData.
        modalDescription.textContent = product.description_full || product.description || ''; // Si no hay full, usa 'description' o vacío

        // Limpiar y añadir características
        modalCharacteristicsList.innerHTML = '';
        const characteristicsSection = document.getElementById('modal-product-characteristics');
        if (product.characteristics && product.characteristics.length > 0) {
             characteristicsSection.style.display = 'block'; // Muestra la sección si hay
             product.characteristics.forEach(char => {
                 const li = document.createElement('li');
                 li.textContent = char;
                 modalCharacteristicsList.appendChild(li);
             });
        } else {
             characteristicsSection.style.display = 'none'; // Oculta la sección si no hay
        }

        // ACTUALIZAR EL ENLACE DEL BOTÓN DE WHATSAPP EN EL MODAL
        const yourPhoneNumber = '595985726913'; // <--- !!! TU NÚMERO REAL AQUÍ !!!
        const encodedProductName = encodeURIComponent(product.name);
        modalQuoteButton.href = `https://wa.me/${yourPhoneNumber}?text=Hola%2C%20quisiera%20solicitar%20presupuesto%20por%20el%20${encodedProductName}.`;


        // Mostrar el modal de detalles
        modal.classList.add('show-modal');

        // Mostrar/ocultar elementos de la galería si solo hay una imagen
        const hasMultipleImages = product.images && product.images.length > 1;
        prevButton.style.display = hasMultipleImages ? 'block' : 'none';
        nextButton.style.display = hasMultipleImages ? 'block' : 'none';
        galleryIndicatorsContainer.style.display = hasMultipleImages ? 'flex' : 'none'; // Usar flexbox para centrar puntitos si hay varios

        // Asegurarse de que el botón ampliar esté visible al abrir el modal si hay imágenes
        amplifyButton.style.display = (product.images && product.images.length > 0) ? 'block' : 'none';


    } else {
        console.error('Producto no encontrado con ID:', productId); // Log de error si el ID no existe en productsData
        // Opcional: Mostrar un mensaje de error al usuario o loggear el error
    }
}

// --- 4. Funciones para la galería de imágenes ---

// Muestra la imagen en el modal de detalles según el índice
function updateModalImage(index) {
    if (currentProduct && currentProduct.images && currentProduct.images[index]) {
         modalImage.src = currentProduct.images[index];
         modalImage.alt = currentProduct.name + ' - Imagen ' + (index + 1);
         console.log("Mostrando imagen:", modalImage.src); // Log de depuración
         // Puedes añadir una clase temporal para la transición visual si quieres
         // modalImage.classList.add('fading');
         // setTimeout(() => modalImage.classList.remove('fading'), 500); // Remover después de la transición
    } else {
        console.error("Error: No se pudo actualizar la imagen. Índice o producto inválido."); // Log de error
    }
}

// Crea y actualiza los indicadores (puntitos)
function updateGalleryIndicators() {
    galleryIndicatorsContainer.innerHTML = ''; // Limpiar indicadores anteriores
    if (currentProduct && currentProduct.images && currentProduct.images.length > 1) { // Solo si hay más de una imagen
        galleryIndicatorsContainer.style.display = 'flex'; // Usar flexbox para centrar
        galleryIndicatorsContainer.style.justifyContent = 'center'; // Centrar puntitos
        for (let i = 0; i < currentProduct.images.length; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('gallery-indicator');
            if (i === currentImageIndex) {
                indicator.classList.add('active'); // Marca el indicador activo
            }
            indicator.addEventListener('click', (function(index) { // Usamos un IIFE para capturar el valor de i
                return function() {
                    console.log("Indicador clicado. Ir a índice:", index); // Log de depuración
                    currentImageIndex = index; // Actualiza el índice actual al del indicador clicado
                    updateModalImage(currentImageIndex); // Muestra la nueva imagen
                    updateGalleryIndicators(); // Actualiza los indicadores para marcar el nuevo activo
                }
            })(i)); // Pasamos i al IIFE
            galleryIndicatorsContainer.appendChild(indicator); // Añade el indicador al contenedor
        }
    } else {
        galleryIndicatorsContainer.style.display = 'none'; // Ocultar si no hay varias imágenes
    }
}

// Navegar a la imagen siguiente
function showNextImage() {
    if (currentProduct && currentProduct.images && currentProduct.images.length > 1) {
        console.log("Clic en siguiente. Índice actual:", currentImageIndex); // Log de depuración
        currentImageIndex++; // Avanza al siguiente índice
        if (currentImageIndex >= currentProduct.images.length) {
            currentImageIndex = 0; // Vuelve al principio si llega al final
        }
        updateModalImage(currentImageIndex); // Muestra la nueva imagen
        updateGalleryIndicators(); // Actualiza los indicadores
    }
}

// Navegar a la imagen anterior
function showPrevImage() {
     if (currentProduct && currentProduct.images && currentProduct.images.length > 1) {
        console.log("Clic en anterior. Índice actual:", currentImageIndex); // Log de depuración
        currentImageIndex--; // Retrocede al índice anterior
        if (currentImageIndex < 0) {
            currentImageIndex = currentProduct.images.length - 1;
        }
        updateModalImage(currentImageIndex); // Muestra la nueva imagen
        updateGalleryIndicators(); // Actualiza los indicadores
     }
}

// --- Funciones para la Capa de Ampliación de Imagen (Funcional en Móviles) ---

// Función para mostrar la capa de ampliación con la imagen actual del modal de detalles
function openAmplifyOverlay() {
    console.log("Clic en ampliar. Abriendo overlay."); // Log de depuración
    // Obtiene la ruta de la imagen actualmente visible en el modal de detalles
    const imageUrl = modalImage.src;

    if (imageUrl) {
        // Establece la imagen en la capa de ampliación
        amplifiedImage.src = imageUrl;
        // Establece el alt texto para la imagen ampliada
        amplifiedImage.alt = modalImage.alt; // Reusa el texto alt del modal

        // Muestra la capa de ampliación
        amplifyOverlay.classList.add('show-overlay');
        console.log("Overlay mostrado."); // Log de depuración
    } else {
        console.error('No hay imagen visible para ampliar.'); // Log de error
    }
}

// Función para cerrar la capa de ampliación
function closeAmplifyOverlay() {
    console.log("Cerrando overlay."); // Log de depuración
    amplifyOverlay.classList.remove('show-overlay');
    // Opcional: Limpiar el src de la imagen ampliada al cerrar si quieres
    // amplifiedImage.src = '';
    // amplifiedImage.alt = '';
    console.log("Overlay cerrado."); // Log de depuración
}


// --- 5. Función para cerrar el modal de detalles ---
function closeModal() {
    console.log("closeModal function called."); // Log para depuración
    const modalElement = document.getElementById('product-modal'); // Asegurar que seleccionamos el modal

    if (modalElement) { // Verificar si el elemento modal existe
        modalElement.classList.remove('show-modal');
        console.log("show-modal class removed from modal."); // Log de depuración
    } else {
        console.error("Modal element not found in closeModal!"); // Log de error
    }

    currentProduct = null;
    currentImageIndex = 0;
     // Ocultar elementos de la galería al cerrar
     if (prevButton) prevButton.style.display = 'none';
     if (nextButton) nextButton.style.display = 'none';
     if (galleryIndicatorsContainer) galleryIndicatorsContainer.innerHTML = '';
     if (amplifyButton) amplifyButton.style.display = 'none'; // Ocultar el botón ampliar al cerrar
     if (galleryIndicatorsContainer) galleryIndicatorsContainer.style.display = 'none'; // Asegurar que el contenedor de indicadores esté oculto

     // También nos aseguramos de que la capa de ampliación esté cerrada
     closeAmplifyOverlay(); // Llama a la función para cerrar la capa de ampliación
     console.log("closeModal function finished."); // Log de depuración
}


// --- 6. Asignar Event Listeners (escuchadores de eventos) ---

// Asignar el evento 'click' a cada elemento de producto clickeable
if (productItems) { // Verificar si productItems fue seleccionado correctamente
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.dataset.id;
            openModal(productId);
        });
    });
    console.log("Event listeners asignados a productos."); // Log de depuración
} else {
    console.error("No se encontraron elementos con la clase 'product-item'."); // Log de error
}


// Asignar el evento 'click' a los botones de navegación de la galería
if (prevButton && nextButton) { // Verificar si los botones fueron seleccionados
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    console.log("Event listeners asignados a botones de navegación."); // Log de depuración
} else {
     console.warn("Botones de navegación (prev/next) no encontrados. Quizás solo hay 1 imagen de producto de ejemplo."); // Log de advertencia si no se encuentran (esperado con 1 imagen)
}


// Asignar el evento 'click' al botón Ampliar (LLAMA A openAmplifyOverlay)
if (amplifyButton) { // Verificar si el botón Ampliar fue seleccionado
    amplifyButton.addEventListener('click', openAmplifyOverlay);
    console.log("Event listener asignado a botón Ampliar."); // Log de depuración
} else {
    console.warn("Botón Ampliar no encontrado."); // Log de advertencia
}


// Asignar el evento 'click' al botón de cerrar MODAL
if (closeButton) { // Verificar si el botón de cerrar modal fue seleccionado
    closeButton.addEventListener('click', closeModal);
    console.log("Event listener asignado a botón de cerrar modal."); // Log de depuración
} else {
    console.error("Botón de cerrar modal no encontrado con selector '.close-button'."); // Log de error
}


// Asignar el evento 'click' al botón de cerrar CAPA AMPLIACIÓN
if (closeOverlayButton) { // Verificar si el botón de cerrar overlay fue seleccionado
    closeOverlayButton.addEventListener('click', closeAmplifyOverlay);
     console.log("Event listener asignado a botón de cerrar overlay."); // Log de depuración
} else {
    console.error("Botón de cerrar overlay no encontrado con selector '.close-overlay-button'."); // Log de error
}


// Cerrar la capa de ampliación haciendo clic en el fondo oscuro
if (amplifyOverlay) { // Verificar si el overlay fue seleccionado
    window.addEventListener('click', (event) => {
        if (event.target === amplifyOverlay) { // Si el clic fue directamente sobre el fondo de la capa de ampliación
            closeAmplifyOverlay();
        }
    });
    console.log("Event listener de click en overlay asignado."); // Log de depuración
} else {
     console.error("Capa de ampliación (amplify-overlay) no encontrada."); // Log de error
}


// Cerrar la capa de ampliación y/o modal con la tecla ESC
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (amplifyOverlay && amplifyOverlay.classList.contains('show-overlay')) {
            closeAmplifyOverlay();
            console.log("Cerrando overlay con ESC."); // Log de depuración
        } else if (modal && modal.classList.contains('show-modal')) {
             closeModal();
             console.log("Cerrando modal con ESC."); // Log de depuración
        }
    }
});
console.log("Event listener de tecla ESC asignado."); // Log de depuración

    