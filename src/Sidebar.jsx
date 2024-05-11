
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import UpgradeBox from "./UpgradeBox";

const Sidebar = () => {
  return (
    <div
      className="flex flex-col w-64 h-full bg-white"
      style={{ position: "fixed" }}
    >
      <div className="px-5 py-4 border-b border-zinc-200">
        <Logo />
      </div>
      <div className="flex flex-col py-4 space-y-1">
        <MenuItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18m-9 9V3m0 0L3 12m9-9l9 9"
              />
            </svg>
          }
          label="Home"
          link={
            "/"
          }
        />
        <MenuItem 
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18m-9 5h9"
              />
            </svg>
          }
          label="Products"
          link="/products"
        />
        <MenuItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14l6-6m-6 0l6 6"
              />
            </svg>
          }
          label="Orders"
          badge="6"
          link="/orders"
        />
        <MenuItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4-1.79-4-4S9.79 2 12 2s4 1.79 4 4-1.79 4-4 4zm0 2c-2.761 0-5 2.239-5 5v3h10v-3c0-2.761-2.239-5-5-5z"
              />
            </svg>
          }
          label="Customers"
          link="customers"
        />
        <MenuItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
              />
            </svg>
          }
          label="Analytics"
          link="/analytics"
        />
      </div>
      <div className="mt-auto px-4 py-2">
        <UpgradeBox />
      </div>
    </div>
  );
};

export default Sidebar;
