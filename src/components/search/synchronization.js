import mongoosastic from "mongoosastic";
import { SourateSchema } from "../../models/Sourates";

SourateSchema.plugin(mongoosastic, {
  host: "localhost",
  port: 9200,
});
