# ⚙️ Node.js + Express API

### 🏛️ PUP-Biñan Campus Portfolio Builder (Backend)
> This is the **back-end repository** for the PUP-Biñan Campus Portfolio Builder. 
> 
> This API serves as the secure engine that processes, validates, and permanently stores student portfolio submissions into a cloud database.

---

### 🛠️ Technical Stack

* **Runtime Environment:** `Node.js` 🟩
* **Web Framework:** `Express.js` for fast and robust RESTful routing.
* **Database:** `MongoDB Atlas` (Cloud) accessed via the `Mongoose` ODM. 🍃
* **Middleware:** * `cors` configured strictly to accept requests only from the official Vercel front-end.
    * `express.json()` for seamless JSON payload parsing.
* **Deployment:** Hosted securely on `Render` web services. ☁️

---

### 📋 Key Features
* **Early Data Validation:** Instantly rejects incomplete submissions to preserve database integrity and prevent dead data.
* **Automated Data Cleansing:** Utilizes Mongoose schema rules to automatically trim hidden whitespace and generate precise timestamps for every student entry.
* **Graceful Error Handling:** Implements `try/catch` architecture to prevent server crashes and return human-readable status codes (200 OK, 400 Bad Request, 500 Server Error) to the client.
* **Cloud-Ready Architecture:** Configured with dynamic port assignment and environment variable readiness for seamless deployment.
