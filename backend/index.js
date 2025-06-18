import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET ALL BOARDS
app.get("/get-boards", async (req, res) => {
  const { query } = req.query;
  try {
    let whereClause = {};
    if (query) {
      whereClause = {
        title: { contains: query, mode: "insensitive" },
      };
    }
    const boards = await prisma.boards.findMany({
      include: { cards: true },
      where: whereClause,
    });
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: "Failed to get boards" });
  }
});
//  GET A SPECIFIC BOARD
app.get("/get-boards/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const board = await prisma.boards.findUnique({
      where: { id },
      include: { cards: true },
    });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: "Failed to get boards" });
  }
});
// CREATE A NEW BOARD
app.post("/create-board", async (req, res) => {
  const { title, category, author } = req.body;
  if (!title || !category) {
    return res.status(400).json({ error: "title and category required" });
  }
  try {
    const newBoard = await prisma.boards.create({
      data: {
        title,
        category,
        author,
      },
    });
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ message: "Failed to get boards" });
  }
});

// DELETE A SPECIFIC BOARD
app.delete("/delete-boards/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBoard = await prisma.boards.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ id: deletedBoard.id, message: "Board deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete boards" });
  }
});

// CREATE A CARD IN A SPECIFIC BOARD

app.post("/cards", async (req, res) => {
  const { title, message, gif, boardId } = req.body;
  if (!title || !message || !gif || !boardId) {
    return res.status(400).json({ error: "All field paramater required" });
  }
  try {
    const newCard = await prisma.cards.create({
      data: {
        title,
        message,
        gif,
        boardId,
      },
    });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: "Failed to create crard" });
  }
});

// DELETES A SPECIFIC CARD

app.delete("/cards/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCard = await prisma.cards.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ id: deletedCard.id, message: "card deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete card" });
  }
});
//UPDATES UPVOTE COUNT FOR A SPECIFIC CARD
app.patch("/cards/:id/upvote", async (req, res) => {
  const { id } = req.params;
  // TODO: HANDLE IF ID NOT FOUND/ DOESN'T EXIST
  try {
    const card = await prisma.cards.findUnique({ where: { id } });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    const updateVote = await prisma.cards.update({
      where: { id },
      data: {
        upvotes: {
          increment: 1,
        },
      },
    });
    res.status(201).json({ success: true, data: updateVote });
  } catch (error) {
    res.status(500).json({ message: "failed to upvote" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
