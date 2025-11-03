const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "mySecretKey123";

const users = [
  {
    id: 1,
    email: "user@example.com",
    password:  "$2b$10$QmhkUVCktWxdJNFFyvSN0es4a5ZTscmr3wB.jXW.VQGvWufJ6p.Zy"
  }
];

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully", user: newUser });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ message: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});
function verifyToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.listen(5000, () => console.log("Server running on port 5000"));
