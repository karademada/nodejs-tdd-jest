import mongoose from "mongoose";
import { sourateModel } from "../../models/Sourates";

const collection = mongoose.connection.collections;
const findAll = async (req, res, next) => {
  try {
    sourateModel.find({}).exec().then((sourates) => {
      console.log(sourates);
      return res.status(200).json(sourates);
    });
  } catch (error) {
    next(error);
  }
};

const findSourateBySuraID = (req, res, next) => {
  const { params: { id } } = req;
  try {
    sourateModel
      .find({ SuraID: id })
      .sort({ VerseID: 1 })
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
  } catch (error) {
    next(error);
  }
};

const findAyatByID = (req, res, next) => {
  const { params: { id } } = req;
  try {
    sourateModel
      .findById(id)
      .exec((err, Ayat) => {
        if (!Ayat) {
          return res
            .status(404)
            .json({
              message: "Ayat not found",
            });
        } if (err) {
          return res
            .status(404)
            .json(err);
        }
        res
          .status(200)
          .json(Ayat);
      });
  } catch (error) {
    next(error);
  }
};

const searchSourateByText = async (req, res, next) => {
  const { text } = req.query;
  const payload = [
    {
      $search: {
        index: "default",
        text: {
          query: text,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ];
  try {
    const souratesFromSearch = await sourateModel.aggregate(payload).exec();
    return res.status(200).json(souratesFromSearch);
  } catch (error) {
    next(error);
  }
};

export {
  findAll, findSourateBySuraID, findAyatByID, searchSourateByText,
};
