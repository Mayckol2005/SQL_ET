🎮 GameStore - Documentación del Proyecto

📌 Descripción
Sistema de administración para una tienda de videojuegos. Incluye autenticación segura, un dashboard interactivo y operaciones CRUD completas para la gestión de juegos, ventas, usuarios y valoraciones.

---

🛠 Tecnologías Utilizadas
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Backend: Supabase (PostgreSQL + Autenticación)
- Librerías:
  - Supabase JS v2
  - Chart.js (gráficos)
  - Bootstrap 5 (diseño responsive)
  - Font Awesome (íconos)

---

🗂 Estructura de Archivos
gamestore-admin/
├── public/
│   ├── index.html          # Página de login
│   ├── dashboard.html      # Panel de administración
│   └── assets/
│       ├── css/
│       │   └── styles.css  # Estilos personalizados
│       └── js/
│           ├── supabase.js # Configuración de Supabase
│           ├── auth.js     # Lógica de autenticación
│           ├── dashboard.js# Lógica del panel principal
│           ├── games.js    # CRUD videojuegos
│           ├── sales.js    # Gestión de ventas
│           ├── reviews.js  # Gestión de valoraciones
│           └── users.js    # Gestión de usuarios
└── supabase/
    └── migrations/
        └── 000_init.sql   # Esquema SQL inicial

---

🔐 Configuración de Autenticación
En assets/js/supabase.js, define las variables:

const SUPABASE_URL = 'https://tudominio.supabase.co';
const SUPABASE_KEY = 'tu-clave-publica';

Configuración recomendada en Supabase:
- Habilitar el proveedor Email/Password
- Configurar los Redirect URLs:
  - http://localhost:5500/index.html
  - http://localhost:5500/dashboard.html

---

🚀 Instalación y Uso

1. Clonar el repositorio:
git clone https://github.com/tuusuario/gamestore-admin.git
cd gamestore-admin

2. Instalar dependencias (opcional):
npm install @supabase/supabase-js chart.js bootstrap

3. Iniciar servidor de desarrollo:
npx live-server public/

4. Credenciales de prueba:
- Admin: admin@juegos.com / admin123
- Empleado: empleado@juegos.com / empleado123

---

🧩 Funcionalidades Clave

🔐 Autenticación
- Login con validación de roles (admin / empleado)
- Protección de rutas
- Manejo de sesiones

📊 Dashboard
- Estadísticas en tiempo real
- Gráficos de ventas mensuales
- Top 5 juegos más vendidos

🧮 CRUDs
- Videojuegos: Crear, editar y eliminar
- Ventas: Registro y seguimiento
- Usuarios: Gestión y asignación de roles
- Valoraciones: Moderación de comentarios

---

⚙️ Configuración de la Base de Datos
Ejecutar el script: supabase/migrations/000_init.sql, que contiene:
- 4 tablas relacionales
- 7 funciones almacenadas
- 4 triggers
- 2 vistas
- Datos iniciales de prueba

---

🐛 Solución de Problemas Comunes

❌ Error de credenciales
- Verifica que el usuario exista en auth.users
- Asegúrate que tenga relación en la tabla usuarios

🌐 Problemas de CORS
- Agrega tus URLs en la opción Site URL de Supabase
- Revisa que los Redirect URLs estén correctamente definidos

⚠️ Errores de inicialización
// Verifica la sesión
supabase.auth.getSession()
  .then(console.log)
  .catch(console.error);

---

📄 Licencia
MIT License — Libre uso, modificación y distribución.

---

## Información del Proyecto

- Desarrollado por:
  - Mayckol Mardones
  - Benjamin Garcia
  - Martin Baza
- Asignatura: SQL Server Aplicado 001D
- Fecha de entrega: 
