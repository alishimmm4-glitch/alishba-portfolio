type Variant = "lifeline" | "alnoor-umrah" | "keystone-shop" | "salary-calendar" | "code-explainer";

function Chrome({ accentBadge }: { accentBadge?: string }) {
  return (
    <>
      <rect width="480" height="300" fill="var(--bg-elevated-2)" />
      <rect x="0" y="0" width="480" height="46" fill="var(--bg-elevated)" />
      <circle cx="22" cy="23" r="5" fill="var(--accent)" />
      <circle cx="40" cy="23" r="5" fill="var(--accent-2)" />
      <rect x="60" y="16" width="120" height="14" rx="7" fill="var(--border-strong)" />
      {accentBadge && (
        <rect x="360" y="14" width="90" height="18" rx="9" fill="var(--accent)" opacity="0.85" />
      )}
    </>
  );
}

export default function ProjectMockup({ variant }: { variant: Variant }) {
  if (variant === "lifeline") {
    return (
      <svg viewBox="0 0 480 300" className="h-full w-full">
        <Chrome accentBadge="badge" />
        <rect x="24" y="70" width="200" height="90" rx="12" fill="var(--bg-elevated)" />
        <path
          d="M40,120 L70,120 L82,105 L96,145 L108,120 L124,120 L134,108 L144,120 L208,120"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="40" y="135" width="60" height="8" rx="4" fill="var(--border-strong)" />
        <rect x="40" y="150" width="90" height="8" rx="4" fill="var(--border)" />

        <rect x="240" y="70" width="216" height="90" rx="12" fill="var(--bg-elevated)" />
        <rect x="256" y="86" width="90" height="10" rx="5" fill="var(--border-strong)" />
        <rect x="256" y="104" width="184" height="8" rx="4" fill="var(--border)" />
        <rect x="256" y="120" width="184" height="8" rx="4" fill="var(--border)" />
        <rect x="256" y="138" width="70" height="16" rx="8" fill="var(--accent-2)" opacity="0.85" />

        <rect x="24" y="176" width="432" height="100" rx="12" fill="var(--bg-elevated)" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={40 + i * 106} y="192" width="90" height="66" rx="10" fill="var(--bg-elevated-2)" />
            <circle cx={85 + i * 106} cy="216" r="12" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
            <rect x={55 + i * 106} y="236" width="60" height="7" rx="3.5" fill="var(--border-strong)" />
            <rect x={55 + i * 106} y="248" width="40" height="6" rx="3" fill="var(--border)" />
          </g>
        ))}
      </svg>
    );
  }

  if (variant === "keystone-shop") {
    return (
      <svg viewBox="0 0 480 300" className="h-full w-full">
        <Chrome accentBadge="badge" />
        {[0, 1, 2].map((col) => (
          <g key={col}>
            <rect x={24 + col * 150} y="66" width="138" height="98" rx="12" fill="var(--bg-elevated)" />
            <rect x={36 + col * 150} y="78" width="114" height="56" rx="8" fill="var(--bg-elevated-2)" />
            {[0, 1, 2].map((k) => (
              <rect
                key={k}
                x={44 + col * 150 + k * 34}
                y="98"
                width="26"
                height="16"
                rx="3"
                fill="var(--accent-soft)"
                stroke="var(--accent)"
                strokeWidth="1"
              />
            ))}
            <rect x={36 + col * 150} y="142" width="80" height="8" rx="4" fill="var(--border-strong)" />
            <rect x={36 + col * 150} y="154" width="46" height="8" rx="4" fill="var(--accent-2)" opacity="0.8" />
          </g>
        ))}
        <rect x="24" y="180" width="432" height="96" rx="12" fill="var(--bg-elevated)" />
        <rect x="40" y="196" width="120" height="10" rx="5" fill="var(--border-strong)" />
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x="40" y={218 + i * 26} width="300" height="8" rx="4" fill="var(--border)" />
            <rect x="380" y={216 + i * 26} width="56" height="12" rx="6" fill="var(--accent-2-soft)" />
          </g>
        ))}
        <rect x="330" y="252" width="106" height="18" rx="9" fill="var(--accent)" opacity="0.85" />
      </svg>
    );
  }

  if (variant === "salary-calendar") {
    return (
      <svg viewBox="0 0 480 300" className="h-full w-full">
        <Chrome accentBadge="badge" />
        <rect x="24" y="66" width="288" height="210" rx="12" fill="var(--bg-elevated)" />
        <rect x="40" y="82" width="140" height="12" rx="6" fill="var(--border-strong)" />
        {Array.from({ length: 28 }).map((_, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const marked = [2, 5, 9, 14, 20].includes(i);
          return (
            <rect
              key={i}
              x={40 + col * 34}
              y={106 + row * 34}
              width="28"
              height="28"
              rx="6"
              fill={marked ? "var(--accent-2-soft)" : "var(--bg-elevated-2)"}
              stroke={marked ? "var(--accent-2)" : "var(--border)"}
              strokeWidth="1"
            />
          );
        })}
        <rect x="330" y="66" width="126" height="210" rx="12" fill="var(--bg-elevated)" />
        <rect x="346" y="84" width="94" height="10" rx="5" fill="var(--border-strong)" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="346" y={108 + i * 30} width="94" height="8" rx="4" fill="var(--border)" />
            <rect x="346" y={122 + i * 30} width="60" height="6" rx="3" fill="var(--accent-soft)" />
          </g>
        ))}
        <rect x="346" y="228" width="94" height="30" rx="8" fill="var(--accent)" opacity="0.85" />
      </svg>
    );
  }

  if (variant === "code-explainer") {
    return (
      <svg viewBox="0 0 480 300" className="h-full w-full">
        <Chrome accentBadge="badge" />
        <rect x="24" y="66" width="216" height="210" rx="12" fill="var(--bg-elevated)" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={40 + (i % 3) * 6}
            y={84 + i * 24}
            width={i % 2 === 0 ? 170 : 130}
            height="8"
            rx="4"
            fill={i % 3 === 0 ? "var(--accent-2)" : "var(--border-strong)"}
            opacity={i % 3 === 0 ? 0.8 : 1}
          />
        ))}
        <rect x="256" y="66" width="200" height="210" rx="12" fill="var(--bg-elevated)" />
        <circle cx="290" cy="94" r="14" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
        <rect x="314" y="88" width="120" height="12" rx="6" fill="var(--border-strong)" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="272"
            y={124 + i * 26}
            width={168 - i * 14}
            height="8"
            rx="4"
            fill="var(--border)"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full">
      <Chrome accentBadge="badge" />
      <rect x="24" y="70" width="432" height="60" rx="12" fill="var(--bg-elevated)" />
      <rect x="42" y="86" width="220" height="12" rx="6" fill="var(--border-strong)" />
      <rect x="42" y="106" width="300" height="8" rx="4" fill="var(--border)" />
      <rect x="370" y="88" width="66" height="24" rx="12" fill="var(--accent)" opacity="0.85" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="24" y={146 + i * 46} width="432" height="38" rx="10" fill="var(--bg-elevated)" />
          <circle cx="46" cy={165 + i * 46} r="10" fill="var(--accent-2-soft)" stroke="var(--accent-2)" strokeWidth="1.5" />
          <rect x="66" y={159 + i * 46} width={220 - i * 20} height="8" rx="4" fill="var(--border-strong)" />
          <rect x="380" y={158 + i * 46} width="56" height="14" rx="7" fill="var(--border)" />
        </g>
      ))}
    </svg>
  );
}
