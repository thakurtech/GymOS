// MenuItem.jsx

import { Link } from "react-router-dom";

// i am passing link only with home button
export default function MenuItem({icon, label, badge, link}) {
    return (
        <Link to={link} className="flex items-center px-4 py-2 text-zinc-700 hover:bg-zinc-100">
            {icon}
            {label}
            {badge && <span className="ml-auto bg-red-500 text-white px-2 py-1 text-xs rounded-full">{badge}</span>}
        </Link>
    );
}