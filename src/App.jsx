import { Credits } from "./components/Credits"
import { Overview } from "./components/Overview"
import { Sidebar } from "./components/Sidebar"
import { Topbar } from "./components/Topbar"
import { Transactions } from "./components/Transactions"

function App() {

  return (
    <div className="bg-slate-100">
      <Sidebar credit={"220.10"} />
      <Topbar />
      <div className="m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <Transactions />
        <Credits />
      </div>
    </div>
  )
}

export default App
