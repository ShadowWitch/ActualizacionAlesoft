import { z } from "zod";
import { genericSchema } from "../../../shared/infrastructure/validations/generic-schema";

export const cashRegisterSchema = z
	.object({
		opening_amount: z.number().min(1).nonnegative(),
		closing_amount: z.number().min(1).nonnegative(),
		closing_date: z.date().optional(),
		total_sales: z.number().min(1).nonnegative(),
		created_by: z.string().uuid(),
		note: z.string().optional(),
		// terminal_id: z.string().uuid().optional(),
	})
	.merge(genericSchema.partial());

export const partialCashRegisterSchema = cashRegisterSchema.partial();
