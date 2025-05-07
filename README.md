# 🛒 New Marketplace

Un marketplace desarrollado con **Next.js 14**, diseñado para conectar vendedores y compradores de productos únicos como libros, arte digital y comida casera.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Testing:** Vitest + Testing Library
- **Arquitectura:** Clean Architecture
- **CI/CD:** GitHub Actions
- **Prácticas:** TDD + Contract First

---

## 📁 Estructura del proyecto

src/
- app/ # Routing y vistas públicas
- modules/ # Módulos de dominio (Products, Orders, etc.)
- contracts/ # Schemas compartidos (Contract First)
- shared/ # Utilidades, componentes comunes
tests/ # Unit y integration tests

---

## 🧪 Comandos útiles

# Ejecutar en desarrollo
npm run dev

# Lint + Prettier
npm run lint

# Ejecutar pruebas
npm run test