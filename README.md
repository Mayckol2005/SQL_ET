# README - Examen Transversal

## 🎮 GameStore - Documentación del Proyecto

📌 Descripción
Sistema de administración para una tienda de videojuegos. Incluye autenticación segura, un dashboard interactivo y operaciones CRUD completas para la gestión de juegos, ventas, usuarios y valoraciones.

---

## 🛠 Tecnologías Utilizadas
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Backend: Supabase (PostgreSQL + Autenticación)
- Librerías:
  - Supabase JS v2
  - Chart.js (gráficos)
  - Bootstrap 5 (diseño responsive)
  - Font Awesome (íconos)

---

## 🗂 Estructura de Archivos
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

## 🔐 Configuración de Autenticación
En assets/js/supabase.js, define las variables:

const SUPABASE_URL = '[https://tudominio.supabase.co](https://joscmwfvdczalrzgnnfu.supabase.co)';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impvc2Ntd2Z2ZGN6YWxyemdubmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwODY5NDIsImV4cCI6MjA2NTY2Mjk0Mn0.oKGw6MShW9azVj4jwtnZkmhAsvIzFxXKAcheVUMtQVQ';

Configuración recomendada en Supabase:
- Habilitar el proveedor Email/Password
- Configurar los Redirect URLs:
  - http://localhost:5500/index.html
  - http://localhost:5500/dashboard.html

---

## Consultas SQL Avanzada
- JOIN: Para combinar datos de compras, usuarios y videojuegos.
- CASE: Clasificación condicional de videojuegos por precio.
- HAVING: Filtrado de agregados.
- EXISTS: Usado para verificar.
- Vista (VIEW): vw_compras_mensuales.
- Función almacenada (FUNCTION).
- Trigger.

---

## 🧩 Funcionalidades Clave

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

## ⚙️ Configuración de la Base de Datos
Ejecutar el script: supabase/migrations/000_init.sql, que contiene:
- 4 tablas relacionales
- 7 funciones almacenadas
- 4 triggers
- 2 vistas
- Datos iniciales de prueba

---

## 🐛 Solución de Problemas Comunes

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

## Información del Proyecto

- Desarrollado por:
  - Mayckol Mardones
  - Benjamin Garcia
  - Martin Baza
- Asignatura: SQL Server Aplicado 001D
- Fecha de entrega: 17 Julio 2025 
