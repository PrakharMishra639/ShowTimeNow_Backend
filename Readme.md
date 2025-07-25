# ShowTimeNow – Backend

This is the backend server for the ShowTimeNow Movie Booking Application. It provides RESTful APIs for movie scheduling, theatre management, user bookings, and admin functionalities.

## 🔗 Related Repositories

- **Frontend (User App):** [ShowTimeNow](https://github.com/PrakharMishra639/ShowTimeNow)
- **Admin Panel:** [ShowTimeNow_AdminPanel](https://github.com/PrakharMishra639/ShowTimeNow_AdminPanel)

---

## 🚀 Features

- Admin & user authentication with JWT
- Manage movies, theatres, cities, showtimes
- Image upload to Cloudinary (movie banners, cast photos)
- Book seats in real-time
- API rate limiting and error handling
- MongoDB-based data storage
- Role-based access control

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **File Uploads:** Multer, Cloudinary
- **Utilities:** dotenv, express-async-handler, morgan, cors

---

## 📁 Folder Structure

```
ShowTimeNow_Backend/
├── Models/
├── Routes/
├── Middleware/
├── utils/
├── node_modules
├── index.js
└── package.json

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PrakharMishra639/ShowTimeNow_Backend.git
cd ShowTimeNow_Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a \`.env.local\` file in the project root:

```env
Include all the .env details
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## Routes & Endpoints

**Auth**  
`POST /api/auth/register `– Register a new user

`POST /api/auth/login` – Login user/admin

**Movie Routes**
`POST /api/movies` – Add a new movie (admin)

`GET /api/movies` – Get all movies

`GET /api/movies/:id` – Get a movie by ID

**Theatre Routes**
`POST /api/theatres` – Add a theatre

`GET /api/theatres` – Get all theatres

**City Routes**
`GET /api/cities` – List of supported cities

**Booking Routes**
`POST /api/bookings` – Book tickets

`GET /api/bookings/:userId` – View user’s bookings

**Upload Routes**
`POST /api/upload` – Upload movie images or posters to Cloudinary

## 👨‍💻 Author

**Prakhar Mishra**

- GitHub: [@PrakharMishra639](https://github.com/PrakharMishra639)
- Email: mprakhar713@gmail.com

---
