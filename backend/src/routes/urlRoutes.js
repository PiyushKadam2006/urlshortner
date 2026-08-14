const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

router.post("/shorten", async (req, res) => {
  try {
    const { original_url } = req.body;

    if (!original_url) {
      return res.status(400).json({ error: "Original url is required" });
    }

    const short_id = nanoid(8);
    const newUrl = new Url({
      original_url: original_url,
      short_id: short_id,
    });
    await newUrl.save();

    res.status(201).json({
      message: "Short URL created successfully",
      short_id: short_id,
      original_url: original_url,
    });
  } catch (error) {
    console.error("error creating short url ", error);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlRecord = await Url.findOneAndUpdate({ short_id: shortId }, {$inc:{clicks :1}},{
        new : true
    });

    if (urlRecord) {
      return res.redirect(urlRecord.original_url);
    } else {
      return res.status(404).json({ error: "No url found" });
    }
  } catch (error) {
    console.error("error creating short url ", error);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/analytics/:shortId", async (req, res) => {
  try {
    const urlRecord = await Url.findOne({ short_id: req.params.shortId });
    if (urlRecord) {
      res.json({ totalClicks: urlRecord.clicks });
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    // console.error('error in redirect : ',error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
