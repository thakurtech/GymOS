import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Dashboard() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div >
            <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
            <Sidebar sidebarCollapsed={sidebarCollapsed} />
        </div>
    );
}

export default Dashboard;
