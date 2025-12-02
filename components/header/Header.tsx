import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("p-5 w-full bg-transparent z-10", className)}>
      <Image
        width={120}
        height={120}
        src="/images/logo.png"
        alt="Logo de lluvias de gloria enterna"
        className="object-cover"
        loading="eager"
      />
    </header>
  );
};
