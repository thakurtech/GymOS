// Logo.jsx
export default function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.518a2 2 0 011.572 0l.15.058a2 2 0 01.85.85l.058.15a2 2 0 010 1.572l-.058.15a2 2 0 01-.85.85l-.15.058a2 2 0 01-1.572 0l-.15-.058a2 2 0 01-.85-.85l-.058-.15a2 2 0 010-1.572l.058-.15a2 2 0 01.85-.85l.15-.058zM12 14a2 2 0 100-4 2 2 0 000 4zm-7.428 1.518a2 2 0 00-1.572 0l-.15.058a2 2 0 00-.85.85l-.058.15a2 2 0 000 1.572l.058.15a2 2 0 00.85.85l.15.058a2 2 0 001.572 0l.15-.058a2 2 0 00.85-.85l.058-.15a2 2 0 000-1.572l-.058-.15a2 2 0 00-.85-.85l-.15-.058z" />
            </svg>
            <span className="text-xl font-semibold text-zinc-900">GymOS</span>
        </div>
    );
}