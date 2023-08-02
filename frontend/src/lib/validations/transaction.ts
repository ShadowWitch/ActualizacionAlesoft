import * as z from "zod";
import { genericSchema } from "./generic";

export const transactionSchema = z
	.object({

	})
	.merge(genericSchema.partial());

export type Transaction = z.infer<typeof transactionSchema>;
