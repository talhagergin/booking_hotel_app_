import express from "express";
import Room from "../models/Room.js";
import {createRoom, 
        updateRoom,
        deleteRoom,
        getRooms,
        getRoom
        } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router= express.Router();

router.get("/",(req,res) => {
    res.send("Hello , this is auth endpoint");
});
//CREATE
router.post("/:hotelid",verifyAdmin, createRoom);
//UPDATE
router.put("/:id",verifyAdmin,updateRoom);
//DELETE
router.delete("/:id",verifyAdmin,deleteRoom);
//GET
router.get("/:id",getRoom);
//GET ALL
router.get("/",getRooms);
export default router;