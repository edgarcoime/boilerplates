import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["😀", "😳", "🙄", "okay bad emoji????", "okay maybe bad idea"]);
});

router.post(
  "/add",
  async (req, res) => {
    console.log(req.body.data);

    res.status(200).json({
      message: "Added emoji",
      result: [
        "😀", "😳", "🙄"
      ]
    })
  }
)

export default router;