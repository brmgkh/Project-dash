const express = require("express");
const connectDB = require("./config/ConnectDB");
const server = express();
const port = 9800;
const cors = require("cors");
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: false, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
const AgentRoute = require("./routes/Agent");
const TaskRoute = require("./routes/Task");
const MutationRoute = require("./routes/Mutation");
const DetachementRoute = require("./routes/Detachement");
const DepartRoute = require("./routes/Depart");
const CongeRoute = require("./routes/Conge");
const userRoutes = require("./routes/User");

server.use(express.json());
server.use("/api/agent", AgentRoute);
server.use("/api/task", TaskRoute);
server.use("/api/mutation", MutationRoute);
server.use("/api/detachement", DetachementRoute);
server.use("/api/depart", DepartRoute);
server.use("/api/conge", CongeRoute);
server.use("/api/user", userRoutes);

server.listen(port, (req, res) => {
  console.log(`app dashbordrh is running on port ${port}`);
});

connectDB();
