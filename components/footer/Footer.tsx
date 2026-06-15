import FacebookImage from "@/public/assets/FB.png";
import InstagramImage from "@/public/assets/IG.png";
import TikTokImage from "@/public/assets/TK.png";
import YoutubeImage from "@/public/assets/YT.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:left-72 md:right-4 md:bottom-4 md:px-0">
      <div className="mx-auto max-w-5xl rounded-3xl border border-brand-border/70 bg-brand-background/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-base font-bold text-brand-foreground sm:text-lg">
              Síguenos en
            </h3>
            <p className="text-xs text-brand-muted sm:text-sm">
              Comunidad, contenido y momentos que comparten la fe.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/somoslluvias?igsh=eDdrdnR4bmh6Zjdl"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
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
          className="transition-transform hover:scale-110"
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
          className="transition-transform hover:scale-110"
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
          className="transition-transform hover:scale-110"
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
        </div>
      </div>
    </footer>
  );
};
