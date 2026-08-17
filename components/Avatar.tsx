import Image from "next/image";

export default function Avatar({ size = 220 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full p-[3px]"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(140deg, var(--accent), var(--accent-2))",
      }}
    >
      <div className="h-full w-full rounded-full bg-bg-elevated overflow-hidden relative">
        <Image
          src="/alishba-photo.png"
          alt="Alishba Shahid"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </div>
      <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-accent-2 border-4 border-bg-elevated" />
    </div>
  );
}
