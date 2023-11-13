import Image from "next/image";

interface StarProps {
  rate: number;
}

const getAccurateRate = (rate: number) => {
  const roundedRate = Math.max(0, Math.floor(rate * 2) / 2);
  return Math.min(5, roundedRate);
};

export default function Star({ rate }: StarProps) {
  const rates = getAccurateRate(rate);

  return (
    <div className="relative">
      <div className="flex">
        {new Array(5).fill(0).map((_, i) => (
          <Image
            key={i.toString()}
            src="/empty_star.svg"
            alt=""
            width={30}
            height={29}
          />
        ))}
      </div>
      <div
        style={{
          width: `calc(calc(100% * ${rates}) / 5)`,
        }}
        className="flex absolute top-0 left-0 overflow-y-hidden"
      >
        {new Array(5).fill(0).map((_, i) => (
          <Image
            key={i.toString()}
            src="/full_star.svg"
            alt=""
            width={30}
            height={29}
          />
        ))}
      </div>
    </div>
  );
}
