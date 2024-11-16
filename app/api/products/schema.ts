import { z } from "zod";

const schema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export default schema;
