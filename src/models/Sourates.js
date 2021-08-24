// import mongoosastic from "mongoosastic";
import mongoose from "mongoose";

const { Schema } = mongoose;

const SourateSchema = new Schema({
  AyahText: String,
  NomSouratAr: String,
  NomSouratFr: String,
  NomSouratTraduction: String,
  DatabaseID: Number,
  SuraID: Number,
  VerseID: Number,
  AyahTextHarakat: String,
});

// SourateSchema.plugin(mongoosastic, {
//   host: "localhost",
//   port: 9200,
// });

const Sourates = mongoose.model("Sourates", SourateSchema);

// Sourates.synchronize()
//   .on("error", (err) => {
//     console.log(`Error while synchronizing${err}`);
//   });

// Sourates
//   .createMapping((err, mapping) => {
//     if (err) {
//       console.log(`Error while synchronizing${err}`);
//     }
//     console.log(`mapping created : ${mapping}`);
//   });

export default Sourates;
