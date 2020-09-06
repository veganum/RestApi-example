const { Router } = require("express");
const router = Router();

//--Nuestras rutas--
router.get("/", (req, res) => {
  res.json({ Titulo: "Hello Word" });
});

router.get("/test", (req, res) => {
  const data = {
    name: "pipim",
    especie: "ratilla",
  };

  res.json(data);
});

module.exports = router;
