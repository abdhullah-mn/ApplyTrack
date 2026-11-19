# ApplyTrack

ApplyTrack is a job application tracking project. The current milestone sets up a Spring Boot API and a React/Vite frontend.

## Prerequisites

- JDK 21 (the project targets Java 21)
- Maven 3.9 or the included Maven Wrapper
- Node.js 22 and npm
- PostgreSQL 18

## Backend

Create a PostgreSQL database named `applytrack_db`. Set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` in your terminal environment using the values for your local database. The same variable names are listed in `.env.example`; Spring Boot does not automatically load that file.

From the repository root, start the API:

```powershell
mvn -f backend/pom.xml spring-boot:run
```

The health check is available at `http://localhost:8080/api/health` and returns `{"status":"UP"}`. The current JPA starter expects PostgreSQL to be running when the application starts.

## Frontend

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the Vite URL (normally `http://localhost:5173`). The page reports whether the backend health check responds. To use another API URL, set `VITE_API_BASE_URL` in `frontend/.env.local`.

## Build

```powershell
mvn -f backend/pom.xml test
cd frontend
npm run build
```
