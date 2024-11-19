const router = require('express').Router()
const PersonController = require('../controllers/personController')

router.get('/health', (req, res) => {
  res.status(200).json({message: 'OK!'})
})

router.get("/person", PersonController.getAllPersons);
router.get("/person/:id", PersonController.getPersonsById);
router.post('/person', PersonController.postCreatePersons)
router.put("/person/:id", PersonController.putUpdatePersons);
router.delete("/person/:id", PersonController.deletePersons);


module.exports = router