import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  )
}

export default Root;