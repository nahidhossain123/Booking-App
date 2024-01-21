import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../Controller/roomController.js";
const router = express.Router();
router.post("/:id", createRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;
