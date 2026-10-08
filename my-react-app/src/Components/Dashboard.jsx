import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="dashboard-links">

                <NavLink to="profile">
                    Profile
                </NavLink>

                <NavLink to="settings">
                    Settings
                </NavLink>

                <NavLink to="orders">
                    Orders
                </NavLink>

            </div>

            <div className="dashboard-content">

                <Outlet />

            </div>

        </div>
    );
}

export default Dashboard;