const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'src/public/img/' })

const adminController = require('../app/controllers/adminController');


router.get('/addProduct', adminController.addProduct);
router.post('/addProductDB', upload.single('image'), adminController.addProductDB);
router.get('/updateProduct/:slug', adminController.updateProduct);
router.post('/updateProductDB/:slug', upload.single('image'), adminController.updateProductDB);
router.get('/deleteProduct/:slug', adminController.deleteProduct);
router.get('/productDeleted', adminController.productDeleted);
router.get('/restoreproduct/:slug', adminController.restoreproduct);
router.get('/destroy/:slug', adminController.destroy);
router.get('/logout', adminController.logout);
router.get('/changePassword',adminController.changePassword);
router.post('/changePassAdPro',adminController.changePassAdPro);
router.get('/checkPassword',adminController.checkPassword);
router.get('/sortaz',adminController.sortaz);
router.get('/sortza',adminController.sortza);
router.get('/sortCostIncrease',adminController.sortCostIncrease);
router.get('/sortCostDecrease',adminController.sortCostDecrease);
router.get('/search',adminController.search);
router.get('/detailProduct/:slug',adminController.detailProduct);
router.get('/addStaff', adminController.addStaff);
router.post('/addStaffProcess', adminController.addStaffProcess);
router.get('/listStaff', adminController.listStaff);
router.get('/updateStaff/:user', adminController.updateStaff);
router.post('/updateStaffProcess/:user', adminController.updateStaffProcess);






router.get('/', adminController.home);

module.exports = router;
