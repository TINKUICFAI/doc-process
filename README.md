

# 📄 Document Processing Backend (NestJS + PostgreSQL)

This project is a **NestJS-based backend service** for user authentication, document management, and ingestion workflow management.

---

## 🚀 Features

* ✅ **JWT Authentication** (Register/Login)
* ✅ **Role-Based Access Control** (Admin, Editor, Viewer)
* ✅ **User Management** (Admin-only role updates & soft-delete)
* ✅ **Document Management** (CRUD + Ownership)
* ✅ **Ingestion Trigger API** (Integration with Python service)
* ✅ **PostgreSQL + TypeORM** for persistence
* ✅ **Scalable, Microservice-Ready Architecture**

---

## 📌 API Flow

### 🔐 Authentication APIs

* `POST /auth/register` → Register user with email/password
* `POST /auth/login` → Login and receive JWT token

### 👤 User Management

* `GET /users` → List all users (**Admin protected**)
* `GET /users/:id` → Get user details
* `PATCH /users/:id/role` → Update user role (**Admin protected**)
* `DELETE /users/:id` → Soft delete user (**Admin protected**)

### 📂 Document Management

* `POST /documents` → Create a new document (requires `title`, `filePath`)
* `GET /documents` → List all documents
* `GET /documents/:id` → Get document details
* `PATCH /documents/:id` → Update document metadata
* `DELETE /documents/:id` → Soft delete a document

### ⚙️ Ingestion APIs

* `POST /ingestion/trigger` → Trigger ingestion for a document
* `GET /ingestion/status/:id` → Get ingestion process status

---

## 📬 Postman Collection

👉 [Postman API Workspace](https://www.postman.com/solar-meteor-326216/workspace/rag-assigment/collection/25991862-c5a7c04a-1253-4870-948d-a6fa692299b9?action=share&source=copy-link&creator=25991862)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repo & Install

```bash
git clone <repo-url>
cd nest-backend
npm install
```

### 2️⃣ Configure Environment

Create `.env` file:

```env
APP_PORT=9003
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=rag_assignment
DATABASE_USER=postgres
DATABASE_PASS=1234
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Run Server

```bash
npm run start:dev
```

App runs at: [http://localhost:9003](http://localhost:9003)

---

## 🧪 Testing

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e
```

---

## 📜 License

MIT License

---

Do you want me to **include example request/response payloads** for each API (like JSON body + sample response) inside the README so Postman is not required to understand the flow?
