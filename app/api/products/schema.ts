import { z } from "zod";

const schema = z.object({
  name: z.string(),
  price: z.number(),
});

export default schema;
