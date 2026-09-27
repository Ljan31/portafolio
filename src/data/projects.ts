import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'sigeb',
    title: 'SIGEB — Sistema Web para la Gestión y Seguimiento Bibliográfico',
    shortDescription:
      'Sistema web full-stack para la gestión bibliográfica y administración de bibliotecas, con usuarios, préstamos, reservas, inventario y reportes.',
    description:
      'Sistema web orientado a la gestión y administración de bibliotecas. Permite gestionar usuarios, libros, ejemplares, inventario, préstamos, devoluciones, reservas, certificados y reportes, con diferentes funcionalidades según el rol del usuario. La aplicación cuenta con un frontend desarrollado en Vue 3 y TypeScript, un backend en Spring Boot, autenticación mediante JWT y persistencia de datos en PostgreSQL.',
    myRole:
      'Desarrollo full-stack del sistema, incluyendo el diseño de la arquitectura general, implementación completa del frontend con Vue 3 y TypeScript y desarrollo del backend con Spring Boot. También participé en el diseño de la base de datos, implementación de la autenticación y desarrollo de los diferentes módulos de gestión.',
    technologies: [
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
      'Spring Boot',
      'PostgreSQL',
      'JWT',
      'Docker',
      'REST API',
    ],
    category: 'personal',
    image: '/images/projects/sigeb/inicio.png',
    screenshots: [
      '/images/projects/sigeb/inicio.png',
      '/images/projects/sigeb/Catalogo.png',
      '/images/projects/sigeb/crearEstudiante.png',
      '/images/projects/sigeb/bibliotecarioDashboard.png',
      '/images/projects/sigeb/bibliotecarioInventario.png',
      '/images/projects/sigeb/RegistrarLibro.png',
      '/images/projects/sigeb/gestionPrestamos.png',
      '/images/projects/sigeb/gestionPrestamosRegistro.png',
      '/images/projects/sigeb/gestionPrestamosConfirmarPrestamo.png',
      '/images/projects/sigeb/gestionPrestamosTicketPrestamo.png',
      '/images/projects/sigeb/gestionPrestamosHistorial.png',
      '/images/projects/sigeb/gestionDevolucion.png',
      '/images/projects/sigeb/gestionDevolucionConSancion.png',
      '/images/projects/sigeb/gestionDevolucionSinSancion.png',
      '/images/projects/sigeb/gestionReservas.png',
      '/images/projects/sigeb/gestionCertificadosNoDeuda.png',
      '/images/projects/sigeb/generarCertificado.png',
      '/images/projects/sigeb/certificadoGenerado.png',
      '/images/projects/sigeb/validarCertificados.png',
      '/images/projects/sigeb/historialCertificados.png',
      '/images/projects/sigeb/gestionNotificaciones.png',
      '/images/projects/sigeb/reportes.png',
      '/images/projects/sigeb/adminGestionUsuarios.png',
      '/images/projects/sigeb/adminGestionUsuariosFormulario.png',
      '/images/projects/sigeb/adminGestionUsuariosDetallesUsuario.png',
      '/images/projects/sigeb/adminGestionBibliotecas.png',
      '/images/projects/sigeb/adminGestionCarreras.png',
    ],
    github: undefined,
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/Ljan31/prou-library-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Ljan31/proy-library',
      },
    ],
    demo: undefined,
    video: undefined,
    features: [
      'Autenticación y autorización mediante JWT',
      'Roles y permisos para administradores, bibliotecarios y estudiantes',
      'Gestión de usuarios y perfiles',
      'Gestión de bibliotecas y carreras',
      'Catálogo de libros y registro de nuevos títulos',
      'Gestión de ejemplares e inventario',
      'Registro y gestión de préstamos',
      'Generación de tickets e historial de préstamos',
      'Gestión de devoluciones y sanciones',
      'Sistema de reservas',
      'Generación y validación de certificados de no adeudo',
      'Sistema de notificaciones',
      'Generación de reportes',
      'Dashboard para bibliotecarios',
    ],
    challenges: [
      {
        problem:
          'Gestionar diferentes funcionalidades y permisos según el tipo de usuario dentro del sistema.',
        approach:
          'Implementé un sistema de autenticación y autorización basado en JWT, definiendo roles y permisos para controlar el acceso a las diferentes funcionalidades de la aplicación.',
      },
      {
        problem:
          'Coordinar el flujo completo de préstamos, devoluciones, reservas y sanciones manteniendo la información consistente.',
        approach:
          'Desarrollé la lógica de negocio en Spring Boot para controlar los diferentes estados de los préstamos y devoluciones, así como las reglas asociadas a reservas y sanciones.',
      },
      {
        problem:
          'Separar el frontend y backend manteniendo una comunicación clara y estructurada.',
        approach:
          'Diseñé una arquitectura desacoplada en la que el frontend desarrollado con Vue 3 consume los servicios del backend mediante una API REST construida con Spring Boot.',
      },
      {
        problem:
          'Gestionar una aplicación con múltiples módulos y funcionalidades sin perder mantenibilidad.',
        approach:
          'Organicé el proyecto por responsabilidades y módulos, separando la lógica de presentación, comunicación con la API y lógica de negocio para facilitar su mantenimiento y evolución.',
      },
    ],
    architectureNote:
      'Arquitectura desacoplada compuesta por una SPA desarrollada con Vue 3 y TypeScript, un backend REST desarrollado con Spring Boot y PostgreSQL como base de datos. La autenticación utiliza JWT y Docker se utiliza para facilitar la configuración y ejecución del entorno de desarrollo.',
    featured: true,
    status: 'local',
    statusLabel: 'Proyecto en desarrollo · Demo local',
  },
  {
    id: 'ecommerce-artesanias',
    title: 'E-commerce de Artesanías',
    shortDescription:
      'Marketplace de productos artesanales con múltiples roles, seguimiento de pedidos en tiempo real y notificaciones push.',
    description:
      'Plataforma de comercio electrónico desarrollada en colaboración para la comercialización de productos artesanales. Cuenta con roles diferenciados para clientes, vendedores, repartidores y administradores, además de catálogo de productos, carrito de compras, checkout, coordinación y seguimiento de entregas mediante mapas en tiempo real y notificaciones push. Incluye paneles específicos para la gestión de productos, pedidos, usuarios, vendedores, repartidores, empresas de delivery, almacenes y comunidades.',
    myRole:
      'Responsable principal del desarrollo frontend con React y TypeScript, incluyendo la construcción de interfaces, flujos de compra, gestión de roles y paneles según el tipo de usuario. También participé en tareas de desarrollo e integración del backend con Node.js.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Cloudinary',
      'Mapbox',
      'Firebase',
    ],
    category: 'collaborative',
    image: '/images/projects/ecommerce-artesanias/inicio.png',
    screenshots: [
      '/images/projects/ecommerce-artesanias/inicio.png',
      '/images/projects/ecommerce-artesanias/productos.png',
      '/images/projects/ecommerce-artesanias/carritocompras.png',
      '/images/projects/ecommerce-artesanias/clienteCompraCarrito.png',
      '/images/projects/ecommerce-artesanias/clienteCompraDetalles.png',
      '/images/projects/ecommerce-artesanias/clienteCompraFormulario.png',
      '/images/projects/ecommerce-artesanias/clienteCompraFormularioCoordinarEntrega.png',
      '/images/projects/ecommerce-artesanias/clienteCompraFormularioPago.png',
      '/images/projects/ecommerce-artesanias/detallerPedido1.png',
      '/images/projects/ecommerce-artesanias/detallerPedido2.png',
      '/images/projects/ecommerce-artesanias/detallesPedidoMapa.png',
      '/images/projects/ecommerce-artesanias/deliveryVista.png',
      '/images/projects/ecommerce-artesanias/deliveryPedidos.png',
      '/images/projects/ecommerce-artesanias/VendedorProductos.png',
      '/images/projects/ecommerce-artesanias/VendedorFormularioProducto.png',
      '/images/projects/ecommerce-artesanias/AdminUsuarios.png',
      '/images/projects/ecommerce-artesanias/AdminUserVendedores.png',
      '/images/projects/ecommerce-artesanias/AdminUserDeliverys.png',
      '/images/projects/ecommerce-artesanias/AdminUserDeliverysFormulario.png',
      '/images/projects/ecommerce-artesanias/AdminEmpresaDelivery.png',
      '/images/projects/ecommerce-artesanias/AdminAlmacenes.png',
      '/images/projects/ecommerce-artesanias/AdminComunidades.png',
    ],
    github: undefined,
    demo: 'https://qhathuruna.netlify.app/inicio',
    video: undefined,
    features: [
      'Catálogo de productos con imágenes almacenadas en Cloudinary',
      'Carrito de compras',
      'Proceso de checkout con formulario de compra y pago',
      'Coordinación de entrega desde el proceso de compra',
      'Seguimiento del pedido en tiempo real mediante Mapbox',
      'Notificaciones push mediante Firebase',
      'Gestión de productos para vendedores',
      'Gestión de pedidos y entregas para repartidores',
      'Panel de administración con gestión de usuarios y roles',
      'Administración de empresas de delivery',
      'Administración de almacenes',
      'Administración de comunidades',
    ],
    challenges: [
      {
        problem:
          'Gestionar diferentes flujos y permisos según el tipo de usuario dentro de una misma plataforma.',
        approach:
          'Implementé interfaces y flujos diferenciados para clientes, vendedores, repartidores y administradores, adaptando las funcionalidades disponibles según el rol.',
      },
      {
        problem:
          'Permitir al cliente conocer el estado y ubicación de su pedido durante la entrega.',
        approach:
          'Integré Mapbox para representar la ubicación y el seguimiento del pedido sobre un mapa en tiempo real.',
      },
      {
        problem:
          'Mantener informados al cliente y al repartidor sobre cambios relacionados con los pedidos.',
        approach:
          'Integré Firebase para implementar el envío de notificaciones push durante diferentes etapas del proceso de entrega.',
      },
      {
        problem:
          'Construir un flujo de compra que contemplara productos, carrito, pago y coordinación de entrega.',
        approach:
          'Desarrollé los diferentes pasos del proceso de compra en React y TypeScript, conectándolos con los servicios del backend.',
      },
    ],
    architectureNote:
      'Arquitectura web con frontend desarrollado en React y TypeScript, backend en Node.js y PostgreSQL como base de datos. Cloudinary se utiliza para el almacenamiento de imágenes, Mapbox para la visualización y seguimiento geográfico, y Firebase para las notificaciones push.',
    featured: true,
    status: 'active',
    statusLabel: 'Demo disponible',
  },
  {
    id: 'cinemapedia',
    title: 'Cinemapedia',
    shortDescription:
      'Aplicación móvil en Flutter para descubrir películas, buscar títulos, consultar detalles, reproducir tráileres y guardar favoritos.',
    description:
      'Aplicación móvil desarrollada con Flutter para explorar un catálogo de películas. Permite consultar películas populares, buscar títulos, visualizar información detallada, reproducir tráileres de YouTube y guardar películas como favoritas con persistencia local en el dispositivo.',
    myRole:
      'Desarrollo completo de la aplicación como proyecto personal, incluyendo arquitectura, diseño de la interfaz, integración con API externa, manejo de estado, navegación y persistencia local.',
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'go_router',
      'Isar',
      'Dio',
      'YouTube Player Flutter',
    ],
    category: 'personal',
    image: '/images/projects/cinemapedia/inicioCinemapedia.png',
    screenshots: [
      '/images/projects/cinemapedia/inicio.jpg',
      '/images/projects/cinemapedia/populares.jpg',
      '/images/projects/cinemapedia/busqueda.jpg',
      '/images/projects/cinemapedia/detallesPelicula.jpg',
      '/images/projects/cinemapedia/detallesPelicula2.jpg',
      '/images/projects/cinemapedia/favoritos.jpg',
    ],
    github: 'https://gitlab.com/flutter3995647/cinemapedia',
    demo: undefined,
    video: undefined,
    features: [
      'Listado de películas populares',
      'Búsqueda de películas por título',
      'Visualización de información detallada de cada película',
      'Reproducción de tráileres mediante YouTube',
      'Sistema de favoritos con persistencia local',
      'Navegación entre pantallas mediante go_router',
      'Manejo de estado con Riverpod',
    ],
    challenges: [
      {
        problem:
          'Integrar y gestionar la información obtenida desde una API externa de películas.',
        approach:
          'Implementé el consumo de la API mediante Dio, organizando las peticiones y modelos necesarios para mostrar la información de las películas dentro de la aplicación.',
      },
      {
        problem:
          'Mantener un manejo de estado organizado a medida que aumentaban las funcionalidades de la aplicación.',
        approach:
          'Utilicé Riverpod para gestionar el estado de las diferentes pantallas y funcionalidades, facilitando la separación de responsabilidades y el mantenimiento del código.',
      },
      {
        problem:
          'Permitir que los usuarios conservaran sus películas favoritas incluso después de cerrar la aplicación.',
        approach:
          'Implementé persistencia local mediante Isar para almacenar los favoritos directamente en el dispositivo y recuperarlos al volver a utilizar la aplicación.',
      },
      {
        problem:
          'Organizar la navegación entre las diferentes pantallas de la aplicación.',
        approach:
          'Utilicé go_router para estructurar las rutas y facilitar la navegación entre el listado, búsqueda, detalles y favoritos.',
      },
    ],
    architectureNote:
      'Aplicación móvil desarrollada con Flutter que consume una API externa de películas mediante Dio. El estado se gestiona con Riverpod, la navegación con go_router y los favoritos se almacenan localmente mediante Isar. La clave de la API se gestiona mediante variables de entorno.',
    featured: true,
    status: 'active',
    statusLabel: 'Proyecto personal · App móvil',
  },
  {
    id: 'blackjack',
    title: 'Blackjack',
    shortDescription:
      'Aplicación web de Blackjack donde el usuario juega una partida contra la computadora.',
    description:
      'Aplicación web que implementa el juego de Blackjack directamente en el navegador. El usuario puede iniciar una partida, recibir cartas y tomar decisiones durante el juego mientras la computadora ejecuta su propia lógica de juego.',
    myRole:
      'Desarrollo completo del proyecto, incluyendo la lógica del juego, manejo de estados, interacción con el usuario y construcción de la interfaz.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'personal',
    image: '/images/projects/blackjack/inicio.png',
    screenshots: [],
    github: 'https://github.com/Ljan31/blackjack-21-js',
    demo: 'https://viteapp-01.netlify.app/',
    video: undefined,
    features: [
      'Partidas de Blackjack contra la computadora',
      'Generación y manejo de cartas',
      'Cálculo del valor de las cartas',
      'Interfaz interactiva para las acciones del jugador',
      'Determinación del resultado de cada partida',
    ],
    challenges: [
      {
        problem:
          'Implementar la lógica del Blackjack y controlar correctamente las diferentes situaciones de una partida.',
        approach:
          'Desarrollé la lógica del juego en JavaScript, gestionando las cartas, sus valores, los turnos del jugador y la computadora, y las condiciones de finalización de la partida.',
      },
      {
        problem:
          'Mantener la interfaz sincronizada con el estado actual de la partida.',
        approach:
          'Utilicé JavaScript para actualizar dinámicamente la interfaz según las acciones del jugador y los cambios producidos durante el juego.',
      },
    ],
    architectureNote:
      'Aplicación web frontend desarrollada con JavaScript, HTML5 y CSS3, con la lógica del juego ejecutándose directamente en el navegador.',
    featured: false,
    status: 'active',
    statusLabel: 'Demo disponible',
  },
  {
    id: 'music',
    title: 'Proyecto de Música',
    shortDescription:
      'Aplicación web de música con una interfaz intuitiva y responsive para explorar y visualizar contenido musical.',
    description:
      'Aplicación web de música desarrollada para explorar y visualizar contenido musical mediante una interfaz sencilla, intuitiva y adaptable a diferentes dispositivos.',
    myRole:
      'Desarrollo integral del proyecto, incluyendo la estructura de la aplicación, diseño de la interfaz, implementación de funcionalidades, estilos y adaptación responsive.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    category: 'personal',
    image: '/images/projects/music/MusicInicio.png',
    screenshots: [],
    github: undefined,
    demo: 'https://misitio21-03.netlify.app/',
    video: undefined,
    features: [
      'Interfaz responsive y adaptable a diferentes dispositivos',
      'Navegación intuitiva entre las diferentes secciones',
      'Visualización de contenido musical',
      'Diseño de interfaz utilizando Bootstrap',
    ],
    challenges: [
      {
        problem:
          'Crear una interfaz sencilla e intuitiva que permitiera al usuario navegar fácilmente por el contenido musical.',
        approach:
          'Diseñé una estructura clara de navegación y utilicé componentes y estilos de Bootstrap para mantener una interfaz consistente y responsive.',
      },
      {
        problem:
          'Adaptar la aplicación a diferentes tamaños de pantalla.',
        approach:
          'Implementé un diseño responsive utilizando CSS y las herramientas de Bootstrap para lograr una correcta visualización en dispositivos móviles y de escritorio.',
      },
    ],
    architectureNote:
      'Proyecto desarrollado como una aplicación web frontend utilizando JavaScript, HTML5, CSS3 y Bootstrap.',
    featured: false,
    status: 'active',
    statusLabel: 'Demo disponible',
  },

]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}