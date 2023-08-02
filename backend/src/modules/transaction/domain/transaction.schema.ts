import { z } from "zod";
import { genericSchema } from "../../../shared/infrastructure/validations/generic-schema";

export const transactionSchema = z
	.object({
	})
	.merge(genericSchema.partial());

export const partialTransactionSchema = transactionSchema.partial();
