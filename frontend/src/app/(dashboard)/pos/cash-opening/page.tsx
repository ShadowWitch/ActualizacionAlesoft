"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useGetSeveralCashRegisters } from "@/hooks/cash-register/use-get-several-cash-registers";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { formatCurrency } from "@/lib/utils";
import { Icons } from "@/components/icons";

export default function CashRegisterPage() {
	const router = useRouter();
	const severalCashRegistersQuery = useGetSeveralCashRegisters();
	const cashRegisterList = severalCashRegistersQuery.data?.data?.data || [];

	return (
		<>
			<div className="flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Apertura de Caja</h2>
				</div>
			</div>
			<div>
				<div className="flex justify-center items-center">
					<Button
						variant="outline"
						size="lg"
						onClick={() => {
							router.push("/pos/cash-register/new");
						}}
					>
						<Plus className="mr-2 h-4 w-4" />
						Registar Apertura
					</Button>
				</div>
				<div className="mt-4">
					
				</div>
			</div>
		</>
	);
}
