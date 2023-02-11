import express from "express";
import Hotel from "../models/Hotel.js";
import {updateUser,
        deleteUser,
        getUsers,
        getUser
        } from "../controllers/user.js";
import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js";
const router= express.Router();
// {
// router.get("/checkauthentication",verifyToken,(req,res,next) => {
//     res.send("Hello user , you are logged in");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next) => {
//     res.send("Hello user");
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next) => {
//     res.send("Hello admin");
// })}
//UPDATE
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/",verifyAdmin,getUsers);

export default router;