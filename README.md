# 🎮 Plataforma de Videojuegos

Este proyecto consiste en el desarrollo de una plataforma web tipo "Steam", donde los usuarios pueden registrarse, iniciar sesión, visualizar y comprar videojuegos. Incluye un **dashboard visual protegido**, conectado con **consultas SQL avanzadas** y una **base de datos remota en Supabase**.

---

## 1️⃣ Descripción del Proyecto

El objetivo principal es crear una plataforma segura y funcional para la gestión de videojuegos, incluyendo:

- Registro e inicio de sesión de usuarios.
- Visualización de métricas relevantes mediante gráficos.
- Base de datos completa en Supabase con lógica avanzada (vistas, funciones, triggers, procedimientos).
- Interfaz moderna, responsive y con notificaciones amigables.

---

## 2️⃣ Tecnologías Utilizadas

- 🔐 **Supabase**: Backend, base de datos PostgreSQL y autenticación.
- 🧠 **PostgreSQL SQL**: Para lógica compleja (consultas, funciones, vistas, triggers).
- 🧰 **HTML5, CSS3, JavaScript**
- 📊 **Chart.js**: Visualización de métricas en el dashboard.
- ✅ **Toastr.js**: Notificaciones visuales.
- 🛠️ **VSCode**: Entorno de desarrollo.

---

## 3️⃣ Módulo de Autenticación

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
