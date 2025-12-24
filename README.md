# Recipify AI 🍲

Recipify AI is a full-stack project that generates cooking recipes based on ingredients using AI.

Recipify AI är ett fullstack-projekt som genererar matrecept baserat på ingredienser med hjälp av AI.

⚠️ **Note:** This project is currently run **locally only** and is **not deployed**.

⚠️ **Obs:** Projektet körs **endast lokalt** och är **inte deployat**.

---

## 📂 Project Structure / Projektstruktur


recipify-ai/

├── backend/ # Spring Boot backend

├── Frontend/ # Frontend (HTML / JavaScript or Next.js)

└── README.md



---

## ⚙️ Backend (Spring Boot)

### Description / Beskrivning
The backend is a REST API built with Spring Boot.  
It communicates with the OpenAI API to generate recipes.

Backenden är ett REST-API byggt med Spring Boot.  
Den kommunicerar med OpenAI API för att generera recept.

### Tech Stack
- Java 17
- Spring Boot
- Maven
- WebClient
- OpenAI API

### Run Backend Locally / Köra backend lokalt

1. Open the `backend/` folder in IntelliJ  
   Öppna `backend/`-mappen i IntelliJ

2. Set environment variable / Sätt environment variable:
OPENAI_API_KEY=sk-xxxx

markdown
Copy code

3. Make sure `application.properties` contains / Kontrollera att:
ai.openai.api-key=${OPENAI_API_KEY}


4. Run the application  
   Kör applikationen

Backend runs on / Backend körs på:
http://localhost:8080



---

## 🌐 Frontend

### Description / Beskrivning
The frontend provides a simple user interface where users can enter ingredients and receive AI-generated recipes.

Frontend-delen erbjuder ett enkelt gränssnitt där användaren skriver in ingredienser och får AI-genererade recept.

### Technologies / Tekniker
- HTML
- CSS
- JavaScript  
(or / eller Next.js)

### Run Frontend / Köra frontend

**If HTML:**
- Open `index.html` in a browser  
  Öppna `index.html` i webbläsaren

**If Next.js:**

npm install
npm run dev

Frontend runs locally and communicates with the backend via localhost.<br>
Frontend körs lokalt och kommunicerar med backend via localhost.

## 🔐 Security / Säkerhet

API keys are NOT stored in the repository

Secrets are handled using environment variables

API-nycklar lagras INTE i repositoryt

Känslig information hanteras via environment variables

## 🚫 Deployment / Distribution

The project is not deployed

No cloud hosting is used

The application is intended for local development and educational purposes

Projektet är inte deployat

Ingen molnplattform används

Applikationen är avsedd för lokal utveckling och utbildningssyfte

## 🚀 Future Improvements / Framtida förbättringar
Improved UI

Save and share recipes with QR

User accounts

Deployment

Förbättrat gränssnitt

Spara och dela recept

Användarkonton

Deployment




