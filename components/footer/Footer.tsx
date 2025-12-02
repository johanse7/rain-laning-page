import InstargramIcon from "@/public/assets/instagram.svg";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import TicktokIcon from "@/public/assets/tiktok-icon.svg";
import YoutubeIcon from "@/public/assets/youtube-icon.svg";

export const Footer = () => {
  return (
    <article className="fixed bottom-0 p-6 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/somoslluvias?igsh=eDdrdnR4bmh6Zjdl"
          target="_blank"
        >
          <InstargramIcon width={40} height={40} />
        </a>
        <a
          href="https://www.facebook.com/share/17fkxYPx37/?mibextid=wwXIfr"
          target="_blank"
        >
          <FacebookIcon width={50} height={50} />
        </a>
        <a
          href="https://www.tiktok.com/@somoslluviass?_r=1&_t=ZS-91tEaOQTxh6"
          target="_blank"
        >
          <TicktokIcon width={50} height={50} />
        </a>

        <a
          href="https://youtube.com/@somoslluvias?si=W-aFYaUQc85CLUtj"
          target="_blank"
        >
          <YoutubeIcon width={50} height={50} />
        </a>
      </div>
    </article>
  );
};
