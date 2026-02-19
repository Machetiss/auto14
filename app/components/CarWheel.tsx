export default function CarWheel({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Metallic gradient for the rim */}
                <radialGradient id="rimMetal" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="60%" stopColor="#bfbfbf" />
                    <stop offset="85%" stopColor="#8c8c8c" />
                    <stop offset="100%" stopColor="#404040" />
                </radialGradient>

                {/* Shiny chrome effect for spokes */}
                <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="20%" stopColor="#d9d9d9" />
                    <stop offset="50%" stopColor="#8c8c8c" />
                    <stop offset="80%" stopColor="#d9d9d9" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                {/* Tire rubber gradient */}
                <radialGradient id="tireRubber" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="75%" stopColor="#1a1a1a" />
                    <stop offset="95%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#1a1a1a" />
                </radialGradient>

                {/* Brake Disc Pattern */}
                <pattern id="brakeDisc" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="#333" />
                </pattern>

                {/* Drop shadow */}
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.5" />
                </filter>
            </defs>

            {/* --- TIRE --- */}
            {/* Main Tire Body */}
            <circle cx="100" cy="100" r="98" fill="url(#tireRubber)" />
            {/* Tire Grooves (Simplified) */}
            <circle cx="100" cy="100" r="90" fill="none" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="#222" strokeWidth="1" />

            {/* --- BRAKES (Behind Rim) --- */}
            {/* Brake Disc */}
            <circle cx="100" cy="100" r="70" fill="#777" stroke="#555" strokeWidth="1" />
            <circle cx="100" cy="100" r="69" fill="url(#brakeDisc)" opacity="0.2" />

            {/* Red Brake Caliper */}
            <path d="M 140 100 Q 150 70 120 50 L 110 60 Q 130 80 130 100 Z" fill="#D32F2F" filter="url(#shadow)" transform="rotate(-45 100 100)" />

            {/* --- RIM --- */}
            {/* Outer Lip */}
            <circle cx="100" cy="100" r="75" fill="none" stroke="url(#chromeGradient)" strokeWidth="4" />

            {/* Inner Barrel (Darker) */}
            <circle cx="100" cy="100" r="72" fill="#222" />

            {/* SPOKES (5-Star Split Design) */}
            <g filter="url(#shadow)">
                {[0, 72, 144, 216, 288].map((angle) => (
                    <g key={angle} transform={`rotate(${angle} 100 100)`}>
                        {/* Main Spoke Shape */}
                        <path
                            d="M 92 100 L 85 35 L 94 30 L 100 35 L 106 30 L 115 35 L 108 100 Z"
                            fill="url(#chromeGradient)"
                        />
                        {/* Spoke Detail/cutout */}
                        <path
                            d="M 98 90 L 96 45 L 104 45 L 102 90 Z"
                            fill="#333"
                        />
                    </g>
                ))}
            </g>

            {/* --- CENTER CAP --- */}
            <circle cx="100" cy="100" r="18" fill="#111" stroke="#555" strokeWidth="2" />
            <circle cx="100" cy="100" r="12" fill="none" stroke="#FFF500" strokeWidth="2" />
            <circle cx="100" cy="100" r="4" fill="#FFF500" />

            {/* Lug Nuts */}
            {[36, 108, 180, 252, 324].map((angle) => (
                <circle
                    key={angle}
                    cx={100 + 24 * Math.cos((angle * Math.PI) / 180)}
                    cy={100 + 24 * Math.sin((angle * Math.PI) / 180)}
                    r="4"
                    fill="#silver"
                    stroke="#555"
                />
            ))}
        </svg>
    );
}
