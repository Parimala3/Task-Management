const router = require("express").Router();
const auth = require("../middleware/auth");
const { createTask, getTasks, deleteTask } = require("../controllers/task.controller");

router.use(auth);
router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);

module.exports = router;
