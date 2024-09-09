import express from "express";
import http from "http"; // Required for socket.io integration with Express
import { Server } from "socket.io"; // Import Socket.IO server
import db_conn from "./database/conn";
import userRoutes from "./routes/allRoutes";
import Admin from "./database/models/admin";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
db_conn();

// Adding an admin (also catering for the case where the admin already exists)
Admin.findOne({ role: "admin" })
  .then((admin) => {
    if (admin) {
      console.log("Admin found:", admin);
    } else {
      const newAdmin = new Admin({
        role: "admin",
        password: 123,
      });
      newAdmin
        .save()
        .then(() => {
          console.log("Admin created");
        })
        .catch(() => {
          console.log("Error creating admin");
        });
    }
  })
  .catch((error) => {
    console.log("Error retrieving admin:", error);
  });

// Define a basic route
app.use(userRoutes);

// Port to listen on
const PORT = 3001;

// Socket.IO
// Create an HTTP server and integrate with Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// Listen for socket.io connections
io.on("connection", (socket) => {
  console.log("New user detected with ID: " + socket.id);

  // You can emit a message to the client when they connect
  socket.emit("welcome", "Welcome to the server!");

  // Optionally, handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  // Handle room joining
  socket.on("joinRoom", (roomName) => {
    let roomSize = io.sockets.adapter.rooms.get(roomName)?.size || 0;
    console.log(`Room ${roomName} has ${roomSize} players`);
    if (roomSize < 4) {
      socket.join(roomName);
      console.log(`User ${socket.id} joined room ${roomName}`);
      io.emit("roomJoinStatus", true, roomSize + 1);
    } else {
      socket.emit("roomJoinStatus", false, roomSize + 1);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
