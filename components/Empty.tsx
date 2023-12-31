import Image from "next/image";
import React, { FC } from "react";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground tex-tsm text-center">{label}</p>
    </div>
  );
};

export default Empty;
