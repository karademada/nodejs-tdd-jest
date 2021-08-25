import mongoosastic from "mongoosastic";
import mongoose from "mongoose";

const { Schema } = mongoose;

const sourateSchema = new Schema({
  AyahText: String,
  NomSouratAr: String,
  NomSouratFr: String,
  NomSouratTraduction: String,
  DatabaseID: Number,
  SuraID: Number,
  VerseID: Number,
  AyahTextHarakat: String,
});

// sourateSchema.plugin(mongoosastic, {
//   host: "localhost",
//   port: 9200,
// });

const sourateModel = mongoose.model("sourate", sourateSchema);

// sourateModel.synchronize()
//   .on("error", (err) => {
//     console.log(`Error while synchronizing${err}`);
//   });

// sourateModel
//   .createMapping((err, mapping) => {
//     if (err) {
//       console.log(`Error while synchronizing${err}`);
//     }
//     console.log(`mapping created : ${mapping}`);
//   });

export { sourateModel };
