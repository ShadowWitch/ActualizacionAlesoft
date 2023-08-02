import * as z from "zod";
import { genericSchema } from "./generic";

export const cashRegisterSchema = z
	.object({
		opening_amount: z.number().min(1).nonnegative(),
		closing_amount: z.number().min(1).nonnegative(),
		closing_date: z.date().optional(),
		total_sales: z.number().min(1).nonnegative(),
		note: z.string().optional(),
		created_by: z.string().uuid(),
		// terminal_id: z.string().uuid().optional(),
	})
	.merge(genericSchema.partial());

export type CashRegister = z.infer<typeof cashRegisterSchema>;
