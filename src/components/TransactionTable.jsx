import { TransactionRow } from "./TransactionRow"

export const TransactionTable = ()=>{
    return (
        <div className="px-3 pt-3 pb-2 rounded-lg grid gap-4">
            <div className="flex justify-between items-center">
                <div className="w-96 h-10 rounded border border-black-100 flex items-center">
                    <div className="pl-4 pr-4"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"></path></svg></div>
                    <form className="w-full">
                        <input type="text" placeholder="Order ID or transaction ID"  className="w-full bg-inherit focus:outline-none"/>
                    </form>
                </div>
                <div className="flex gap-4">
                    <div className="grid grid-flow-col gap-2 h-10 px-3.5 rounded border border-black-100 flex items-center">
                        <div>Sort</div>
                        <div>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z" fill="#4D4D4D"></path></svg>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-2 h-10 px-3.5 rounded border border-black-100 flex items-center">
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="uppercase text-black-400">
                        <th className="px-6 py-3 font-medium">Order ID</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium">Transaction ID</th>
                        <th className="px-6 py-3 font-medium">Refund date</th>
                        <th className="px-6 py-3 font-medium text-right">Order Amount</th>
                    </thead>
                    <tbody>
                        <TransactionRow id={"281209"} status={"success"} tid={"131634495747"} date={"Today, 08:45 PM"} amount={"₹1,125.00"}/>
                        <TransactionRow id={"281208"} status={"pending"} tid={"171632495746"} date={"Yesterday, 8:45 PM"} amount={"₹2,125.00"}/>
                        <TransactionRow id={"281207"} tid={"131634495747"} date={"12 Jul 2023, 3:00 PM"} amount={"₹1,125.00"}/>
                        <TransactionRow id={"281208"} status={"pending"} tid={"171632495746"} date={"11 Jul 2023, 3:00 PM"} amount={"₹2,125.00"}/>
                        <TransactionRow id={"281208"} status={"success"} tid={"171632495746"} date={"10 Jul 2023, 3:00 PM"} amount={"₹2,125.00"}/>
                        <TransactionRow id={"281208"} tid={"171632495746"} date={"9 Jul 2023, 9:00 PM"} amount={"₹2,125.00"}/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}