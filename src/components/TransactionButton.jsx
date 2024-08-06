export const Payouts = ({number})=>{
    return (
        <button className="rounded-full bg-slate-200 text-slate-500 px-4 py-1.5 active:bg-slate-300">Payouts ({number})</button>
    )
}

export const Refunds = ({number})=>{
    return (
        <button className="rounded-full bg-blue-700 text-white px-4 py-1.5 active:bg-blue-650">Refunds ({number})</button>
    )
}