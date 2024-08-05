import { Payouts, Refunds } from "./TransactionButton"
import { TransactionTable } from "./TransactionTable"

export const Transactions = ()=>{
    return (
        <div className="grid gap-6">
            <div className="font-medium text-xl">Transactions | This Month</div>
            <div className="flex gap-3 text-sm">
                <Payouts number={"22"}/>
                <Refunds number={"6"}/>
            </div>
            <TransactionTable />
        </div>
    )
}