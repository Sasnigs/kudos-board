import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/boards", async (req, res) => {
  try {
    const boards = await prisma.board.findMany({
      include: { cards: true },
    });
    res.json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get boards" });
  }
});

app.post("/boards", async (req, res) => {
  const { title, category, author } = req.body;
  if (!title || !category) {
    return res.status(500).json({ error: "title and category required" });
  }
  try {
    const newBoard = await prisma.board.create({
      data: {
        title,
        category,
        author,
      },
    });
    res.status(201).json(newBoard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get boards" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
