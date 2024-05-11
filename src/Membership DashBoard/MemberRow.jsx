export default function MemberRow({ name, email, subscriptionEnd, daysRemaining, color }) {
    return (
        <tr className="border-t">
            <td className="px-4 py-3">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-300 mr-3"></div>
                    <div>
                        <div>{name}</div>
                        <div className="text-sm text-zinc-600">{email}</div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3">{subscriptionEnd}</td>
            <td className="px-4 py-3" style={{ color }}>{daysRemaining} days</td>
        </tr>
    );
}