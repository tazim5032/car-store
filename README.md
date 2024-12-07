# Car Store Management System

An Express application built with TypeScript, integrating MongoDB with Mongoose to manage a Car Store. This project allows you to create, update, delete, and retrieve car details, place orders for cars, and calculate total revenue from orders.

## 🚀 Features

- **Create a Car**: Add a new car to the store.
- **Update Car Details**: Modify details of an existing car.
- **Delete a Car**: Remove a car from the store.
- **Find a Single Car**: Retrieve details of a specific car.
- **Find All Cars**: Get a list of all cars available in the store.
- **Order a Car**: Place an order for a car.
- **Calculate Total Revenue**: Compute the total revenue generated from orders.

## 🛠️ Technologies Used

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)
- **Hosting**: [Vercel](https://vercel.com)

## 🌐 Live Demo

Access the live version of the project: [Car Store](https://cars-pro.vercel.app/)

## 📁 Models

### 1. **Car Model**
Represents the cars available in the store.

### 2. **Order Model**
Tracks orders placed by customers.

## 🧑‍💻 Setting Up the Project Locally

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- Git

### Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/car-store.git
   cd car-store
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Build the Project (Optional for Production)**
   ```bash
   npm run build
   ```

6. **Run the Built Application**
   ```bash
   npm start
   ```

7. **Access the Application**

   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## 📜 API Endpoints

| Method | Endpoint              | Description                   |
|--------|-----------------------|-------------------------------|
| POST   | `/api/cars`           | Create a new car              |
| GET    | `/api/cars/:id`       | Find a single car by ID       |
| GET    | `/api/cars`           | Find all cars                 |
| PUT    | `/api/cars/:id`       | Update car details            |
| DELETE | `/api/cars/:id`       | Delete a car by ID            |
| POST   | `/api/orders`         | Order a car                   |
| GET    | `/api/revenue`        | Calculate total revenue       |

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

