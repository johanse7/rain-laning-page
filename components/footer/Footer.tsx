import FacebookImage from "@/public/assets/FB.png";
import InstargramImage from "@/public/assets/IG.png";
import TicktokImage from "@/public/assets/TK.png";
import YoutubeImage from "@/public/assets/YT.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="px-4 py-3 fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-brand-secondary/70 shadow-md">
      <h3 className="text-xl text-foreground font-bold text-center mb-3">
        Síguenos en:
      </h3>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.instagram.com/somoslluvias?igsh=eDdrdnR4bmh6Zjdl"
          target="_blank"
        >
          <Image
            src={InstargramImage}
            width={35}
            height={35}
            alt="instagram image"
            className="object-cover"
          />
        </a>
        <a
          href="https://www.facebook.com/share/17fkxYPx37/?mibextid=wwXIfr"
          target="_blank"
        >
          <Image
            src={FacebookImage}
            width={35}
            height={35}
            alt="facebook image"
            className="object-cover"
          />
        </a>
        <a
          href="https://www.tiktok.com/@somoslluviass?_r=1&_t=ZS-91tEaOQTxh6"
          target="_blank"
        >
          <Image
            src={TicktokImage}
            width={35}
            height={35}
            alt="facebook image"
            className="object-cover"
          />
        </a>

        <a
          href="https://youtube.com/@somoslluvias?si=W-aFYaUQc85CLUtj"
          target="_blank"
        >
          <Image
            src={YoutubeImage}
            width={30}
            height={30}
            alt="youtube image"
            className="object-cover"
          />
        </a>
      </div>
    </footer>
  );
};
