import { useMemo } from "react";
import { PawPrint } from "lucide-react";

/** Decorative floating paw prints. Purely visual. */
export function PawParticles({ count = 12 }: { count?: number }) {
  const paws = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 97) % 100}%`,
        size: 14 + ((i * 13) % 26),
        duration: 18 + ((i * 7) % 16),
        delay: -((i * 5) % 20),
        rotate: (i * 37) % 360,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {paws.map((p, i) => (
        <PawPrint
          key={i}
          className="animate-paw absolute bottom-[-12vh] text-primary/20"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            rotate: `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}
