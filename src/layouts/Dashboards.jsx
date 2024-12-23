import {
  FaCalendar,
  FaDollarSign,
  FaEnvelope,
  FaHamburger,
  FaHome,
  FaHouseUser,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboards = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <Link to="/">
          <div className="pl-4 pt-6 text-2xl font-bold tracking-wide">
            restaurant<span className="text-yellow-700">App</span>
          </div>
        </Link>
        <div className="divider"></div>
        <ul className="pl-8 mt-6 uppercase text-xl">
          <li className="pb-4">
            <NavLink
              to={"/dashboard/user"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <span className="flex items-center gap-2">
                <FaHouseUser /> User
              </span>
            </NavLink>
          </li>
          <li className="pb-4">
            <NavLink
              to={"/dashboard/reservation"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <span className="flex items-center gap-2">
                <FaCalendar /> Reservation
              </span>
            </NavLink>
          </li>
          <li className="pb-4">
            <NavLink
              to={"/dashboard/cart"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <span className="flex items-center gap-2">
                <FaShoppingCart /> cart ({cart.length})
              </span>
            </NavLink>
          </li>
          <li className="pb-4">
            <NavLink
              to={"/dashboard/payment"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <span className="flex items-center gap-2">
                <FaDollarSign /> payment
              </span>
            </NavLink>
          </li>
          <li className="pb-4">
            <NavLink
              to={"/dashboard/review"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <span className="flex items-center gap-2">
                <FaStar /> review
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="pl-8 uppercase text-xl font-semibold">
          <li className="pb-4">
            <Link to="/">
              <span className="flex items-center gap-2">
                <FaHome /> Home
              </span>
            </Link>
          </li>
          <li className="pb-4">
            <Link to="/menu">
              <span className="flex items-center gap-2">
                <FaHamburger /> Menu
              </span>
            </Link>
          </li>
          <li className="pb-4">
            <Link to="/order/offered">
              <span className="flex items-center gap-2">
                <FaShoppingBag /> Order
              </span>
            </Link>
          </li>
          <li className="pb-4">
            <Link to="/contact">
              <span className="flex items-center gap-2">
                <FaEnvelope /> Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboards;
