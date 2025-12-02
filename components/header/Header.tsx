import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "p-5 w-full bg-transparent z-10 flex justify-center items-center",
        className
      )}
    >
      <div className="relative w-[150] h-[150px]">
        <Image
          fill
          src="/images/logo.png"
          alt="Logo de lluvias de gloria eterna"
          className="object-contain"
          loading="eager"
        />
      </div>
    </header>
  );
};
