import connectDB from "./configs/user.db.js";
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import router from "./routes/user.routes.js";
import blogRouters from "./routes/blog.routes.js";
import commentRouters from "./routes/comment.routes.js";
import exRouters from "./routes/experience.routes.js";
import dashRouters from "./routes/dash.routes.js";

app.use("/auth", router);
app.use("/experience", exRouters);
app.use("/blog", blogRouters);
app.use("/comment", commentRouters);
app.use("/dash", dashRouters);

const port = process.env.PORT;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
