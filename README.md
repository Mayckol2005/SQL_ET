# 🎮 Plataforma de Videojuegos

Este proyecto consiste en el desarrollo de una plataforma web tipo "Steam", donde los usuarios pueden registrarse, iniciar sesión, visualizar y comprar videojuegos. Incluye un **dashboard visual protegido**, conectado con **consultas SQL avanzadas** y una **base de datos remota en Supabase**.

---

## Descripción del Proyecto

El objetivo principal es crear una plataforma segura y funcional para la gestión de videojuegos, incluyendo:

- Registro e inicio de sesión de usuarios.
- Visualización de métricas relevantes mediante gráficos.
- Base de datos completa en Supabase con lógica avanzada (vistas, funciones, triggers, procedimientos).
- Interfaz moderna, responsive y con notificaciones amigables.

---

## Tecnologías Utilizadas

- **Supabase**: Backend, base de datos PostgreSQL y autenticación.
- **PostgreSQL SQL**: Para lógica compleja (consultas, funciones, vistas, triggers).
- **HTML5, CSS3, JavaScript**
- **Chart.js**: Visualización de métricas en el dashboard.
- **Toastr.js**: Notificaciones visuales.
- **VSCode**: Entorno de desarrollo.

---

## Módulo de Autenticación

### ✔️ Características:

- Registro y login conectados a Supabase Auth.
- Contraseñas hasheadas automáticamente por Supabase.
- Validación de acceso con `fetch()` y `supabase-js`.
- Notificaciones con Toastr (en lugar de SweetAlert).

### 📁 Archivos involucrados:

```plaintext
/plataforma-juegos/
├── index.html              ← Login y registro
├── dashboard.html          ← Dashboard protegido
├── js/auth.js              ← Lógica de autenticación
├── supabaseClient.js       ← Conexión Supabase
├── libs/toastr.min.js      ← Librería de notificaciones
```

---

## Base de Datos en Supabase

Este modelo cuenta con un total de 4 tablas en relacion a videdojuegos, la cuales serian:

- usuarios: Almacena credenciales de acceso.
- videojuegos: Contiene información de títulos y precios.
- compras: Esto contiene la fecha de la compra y el precio de esta.
- valoraciones: Contiene la puntuacion y comentarios del videojuego.

---

## Consultas SQL Avanzada

- JOIN: Para combinar datos de compras, usuarios y videojuegos
- CASE: Clasificación condicional de videojuegos por precio
- HAVING: Filtrado de agregados
- Vista (VIEW): vw_compras_mensuales
- Función almacenada (FUNCTION)
- Trigger

---

## Frontend y Visualización

- Login / Registro
  - Interfaz moderna y responsiva con HTML5, CSS personalizado y notificaciones con Toastr.js.
  - Validación de credenciales mediante Supabase Auth.
  - Contraseñas protegidas con hash (bcrypt).
 
- Dashboard: Gráficos implementados
  - Gráfico de barras: Total de compras por videojuego.
  - Gráfico de dona: Distribución de videojuegos por género.
  - Gráfico de líneas: Ventas mensuales acumuladas.
  - Gráfico de radar: Promedio de valoraciones por juego.

---

## Instalación y Uso

- Clonar repositorio: 
- Abrir index.html en tu navegador para acceder al login.
- Ingresa credenciales válidas (registradas previamente en Supabase).

---

## Información del Proyecto

- Desarrollado por:
  - Mayckol Mardones
  - Benjamin Garcia
  - Martin Baza
- Asignatura: SQL Server Aplicado 001D
- Fecha de entrega: 
