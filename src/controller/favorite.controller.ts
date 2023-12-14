import { Request, Response } from "express";
import Favorites from "../models/favorite";

export const createFavorite = async (req: Request, res: Response) => {
  const { value, result } = req.body;

  try {
    const newFavorite = Favorites.create({
      value,
      result,
    });
    return res.status(200).send(newFavorite);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteFavoriteById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { favoriteId } = req.params;
  try {
    return res.status(200).send({ msg: "Favorites deleted", data: favoriteId });
  } catch (error) {
    return res.status(500).send(error);
  }
};
