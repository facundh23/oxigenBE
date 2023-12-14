import { model, Schema, Document } from "mongoose";

export interface FavoriteInterface extends Document {
  value: number;
  result: string;
}

const favoriteSchema = new Schema({
  value: {
    type: Number,
  },
  result: {
    type: Number,
  },
});

export default model<FavoriteInterface>("Favorites", favoriteSchema);
