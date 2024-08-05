export const TransactionRow = ({id,status,tid,date,amount})=>{
    return(
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-blue-700">#{id}</td>
            <td className="px-6 py-4 flex items-center gap-2">
                {
                    status === "success" ?(
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    ):status === "pending" ?(
                        <div class="h-2.5 w-2.5 rounded-full bg-gray-400"></div>
                    ):(<div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>)
                }
                {
                    status === "success" ?(
                        <div>Successful</div>
                    ):status === "pending" ?(
                        <div>Processing</div>
                    ):(<div>Failed</div>)
                }
            </td>
            <td className="px-6 py-4">{tid}</td>
            <td className="px-6 py-4">{date}</td>
            <td className="px-6 py-4 text-right">{amount}</td>
        </tr>
    )
}