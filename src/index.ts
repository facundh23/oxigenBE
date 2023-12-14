import app from "./server";

const PORT: string | number = 3000;

app.listen(PORT, (): void => {
  console.log(`Server Running on port ${PORT}`);
});
