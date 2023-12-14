import { Router } from "express";
import {
  createFavorite,
  deleteFavoriteById,
} from "../controller/favorite.controller";

const mainRouter = Router();

mainRouter
  //   .get("/", getAllFavorites)
  .post("/conversions/", createFavorite)
  .delete("/conversions/:conversionId", deleteFavoriteById);

export default mainRouter;
