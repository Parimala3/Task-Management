const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/tasks", require("./routes/task.routes"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
