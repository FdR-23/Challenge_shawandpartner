const express = require('express');
const router = express.Router();

const { allUser, detailUser, repoUser } = require('../controllers/index.js')

router.get("/api/users", allUser)
router.get("/api/users/:username/details", detailUser)
router.get("/api/users/:username/repos", repoUser)

module.exports = router;