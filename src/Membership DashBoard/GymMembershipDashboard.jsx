import React from 'react';
import DashboardHeader from './DashboardHeader';
import MembersTable from './MembersTable';
import MemberRow from './MemberRow';

export default function GymMembershipDashboard() {
    let members = [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            subscriptionEnd: 'June 30, 2024',
            daysRemaining: 365,
            color: 'green'
        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            subscriptionEnd: 'September 15, 2023',
            daysRemaining: 120,
            color: 'yellow'
        },
        {
            name: 'Michael Johnson',
            email: 'michaeljohnson@example.com',
            subscriptionEnd: 'November 1, 2023',
            daysRemaining: 45,
            color: 'red'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md h-full">
            <h1 className="text-2xl font-bold mb-6">Gym Membership Dashboard</h1>
            <DashboardHeader />
            <MembersTable members={members} />
        </div>
    );
}