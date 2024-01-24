import express from "express";
import Hotel from "../Model/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../Controller/hotelController.js";
import upload from "../middlewares/uploadFile.js";

const router = express.Router();
router.post("/", upload.array("images"), createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
