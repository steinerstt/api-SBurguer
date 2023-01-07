import { AppDataSource } from "./data-source";
import { app } from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
  })
  .catch((err) => console.error(err));
