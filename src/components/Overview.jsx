import { ColoredRevenueCard } from "./ColoredRevenueCard"
import { Dropdown } from "./Dropdown"
import { RevenueCard } from "./RevenueCard"

export const Overview = ()=>{
    return (
        <div className="grid gap-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium">Overview</div>
            <Dropdown title={"This Month"} />
          </div>
          <div className="items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ColoredRevenueCard title={"Next payout"} amount={"₹ 2,312.23"} orderCount={"23"} time={"Today, 04:00 PM"}/>
            <RevenueCard title={"Amount Pending"} amount={"₹ 92,312.20"} orderCount={"13"}/>
            <RevenueCard title={"Amount Processed"} amount={"₹ 23,92,312.19"}/>
          </div>
        </div>
    )
}