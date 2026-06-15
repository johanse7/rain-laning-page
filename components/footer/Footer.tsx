import FacebookImage from "@/public/assets/FB.png";
import InstagramImage from "@/public/assets/IG.png";
import TikTokImage from "@/public/assets/TK.png";
import YoutubeImage from "@/public/assets/YT.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full px-4 py-3 bg-brand-secondary/70 shadow-md">
      <h3 className="text-xl text-foreground font-bold text-center mb-3">
        Síguenos en:
      </h3>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.instagram.com/somoslluvias?igsh=eDdrdnR4bmh6Zjdl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={InstagramImage}
            width={35}
            height={35}
            alt="Instagram"
            className="object-cover"
          />
        </a>
        <a
          href="https://www.facebook.com/share/17fkxYPx37/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FacebookImage}
            width={35}
            height={35}
            alt="Facebook"
            className="object-cover"
          />
        </a>
        <a
          href="https://www.tiktok.com/@somoslluviass?_r=1&_t=ZS-91tEaOQTxh6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={TikTokImage}
            width={35}
            height={35}
            alt="TikTok"
            className="object-cover"
          />
        </a>

        <a
          href="https://youtube.com/@somoslluvias?si=W-aFYaUQc85CLUtj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={YoutubeImage}
            width={30}
            height={30}
            alt="YouTube"
            className="object-cover"
          />
        </a>
      </div>
    </footer>
  );
};
