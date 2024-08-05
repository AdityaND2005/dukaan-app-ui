export const Payouts = ({number})=>{
    return (
        <div className="rounded-full bg-slate-200 text-slate-500 px-4 py-1.5">Payouts ({number})</div>
    )
}

export const Refunds = ({number})=>{
    return (
        <div className="rounded-full bg-blue-700 text-white px-4 py-1.5">Refunds ({number})</div>
    )
}