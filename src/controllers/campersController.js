import Campers from '../models/campers.js';
import { TRUCK_FORMS, TRUCK_FEATURES } from '../constants/truck.js';

//Get all campers with filtering and pagination
export async function campersController(req, res) {
  const { location, features, form, page = 1, limit = 4 } = req.query;

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  //Check and build query object
  const query = {};
  if (location) {
    query.location = location;
  }

  if (features) {
    const featureList = features.split(',');

    for (const feature of featureList) {
      if (feature === 'automatic') {
        query.transmission = 'automatic';
        continue;
      }

      if (!TRUCK_FEATURES.includes(feature)) {
        return res.status(400).json({ message: `Invalid feature: ${feature}` });
      }

      query[feature] = true;
    }
  }

  if (form && TRUCK_FORMS.includes(form)) {
    query.form = form;
  } else {
    return res.status(400).json({ message: 'Invalid truck form type' });
  }

  //Search campers with pagination
  const [campers, total] = await Promise.all([
    Campers.find(query).skip(skip).limit(limitNumber),
    Campers.countDocuments(query),
  ]);


  res.status(200).json({
    page: pageNumber,
    totalPages: Math.ceil(total / limitNumber),
    totalItems: total,
    campers,
  });
}

//Get camper by ID
export async function campersByIdController(req, res) {
  const { id } = req.params;
  const camper = await Campers.findOne({ _id: id });

  if (!camper) {
    return res.status(404).json({ message: 'truck not found' });
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved truck entry!',
    data: camper,
  });
}
