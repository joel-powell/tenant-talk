const Property = require("../models/property");
const generateToken = require("../models/token_generator");

const getPropertyById = async (req, res) => {
  try {
    const { propertyId } = req.body;
    const property = await Property.findById(propertyId)
      .populate("reviews")
      .select("-__v");

    const token = generateToken(req.userId);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    return res.status(200).json({ property, token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getPropertyById };
