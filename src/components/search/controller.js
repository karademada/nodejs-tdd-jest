import Sourates from "../../models/Sourates.js";

const searchController = async (req, res, next) => {
  try {
    const data = await Sourates.find({});
    if (data) res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const sourateByIdController = (req, res, next) => {
  const { params: { id } } = req;
  Sourates
    .find({ SuraID: id })
    .exec((err, Sourate) => {
      if (!Sourate) {
        return res
          .status(404)
          .json({
            message: "Sourate not found",
          });
      } if (err) {
        return res
          .status(404)
          .json(err);
      }
      res
        .status(200)
        .json(Sourate);
    });

  /* try {
    Sourates.find({}).limit(1).then((data) => {
      console.log(data);
      if (data) return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  } */
};

export { searchController, sourateByIdController };
