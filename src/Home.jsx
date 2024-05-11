import React from "react";
import WidgetCard from "./WidgetCard";
import MyResponsiveLine from "./MyResponsiveLine";
import MyResponsivePie from "./PieChart";
import Modal from "./Modal";

const Home = ({ MemberGrowth, Expences, data }) => {
  return (
    <div className="bg-gray-200 p-8 ">
      <div className="grid grid-cols-1 ml-64 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <WidgetCard
          title="Member Growth"
          description="Number of gym members over time"
        >
          <div style={{ height: "400px", width: "400px" }}>
            <MyResponsiveLine
              data={MemberGrowth}
              layers={[
                "grid",
                "axes",
                "lines",
                "points",
                "slices",
                "crosshair",
              ]}
              curve="linear"
              enableGridX={true}
              enableGridY={true}
            />
          </div>
        </WidgetCard>
        <WidgetCard
          title="Revenue"
          description="Previous month's revenue"
          value="$45,678"
        />
        <WidgetCard
          title="Expenses"
          description="Total expenses"
          value="$23,456"
        >
          <div style={{ height: "400px", width: "400px" }}>
            <MyResponsiveLine
              data={Expences}
              layers={[
                "grid",
                "axes",
                "lines",
                "points",
                "slices",
                "crosshair",
              ]}
              curve="linear"
              enableGridX={true}
              enableGridY={true}
            />
          </div>
        </WidgetCard>
        <WidgetCard
          title="Expiring Memberships"
          description="Percentage of members with expiring subscriptions"
          modalId="expiringModal"
        >
          <div style={{ height: "300px", width: "300px" }}>
            <MyResponsivePie data={data} />
          </div>
        </WidgetCard>
        <WidgetCard
          title="Reward Members"
          description="Manage member rewards"
          buttonTitle="Reward Members"
          modalId="rewardModal"
        />
      </div>
      <Modal
        id="expiringModal"
        title="Expiring Memberships Details"
        description="Number of members whose subscription is about to expire: 32"
      />
      <Modal
        id="rewardModal"
        title="Reward Members"
        description="Enter details to reward a member."
      />
    </div>
  );
};

export default Home;
