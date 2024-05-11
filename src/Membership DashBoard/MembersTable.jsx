import MemberRow from "./MemberRow";

export default function MembersTable({ members }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full h-full text-left">
                <thead>
                    <tr className="text-zinc-700">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Subscription End</th>
                        <th className="px-4 py-2">Days Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => <MemberRow key={index} {...member} />)}
                </tbody>
            </table>
        </div>
    );
}