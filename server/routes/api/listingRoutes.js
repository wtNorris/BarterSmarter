const router = require("express").Router();
const {
  getListings,
  getSingleListing,
  createListing,
  updateListing,
  deleteListing,
} = require("../../controllers/listingController");

//TODO: Possible changes to post to accomodate images
// /api/listing
router.route("/").get(getListings).post(createListing);

// /api/listing/:listingId
router
  .route("/:listingId")
  .get(getSingleListing)
  .put(updateListing)
  .delete(deleteListing);

module.exports = router;
