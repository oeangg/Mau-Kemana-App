"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

export function ShareButton({ name, city }) {
  // 'https://maukemana.vercel.app/'

  const urlShare = `http://localhost:3000/share/?name=${name}&city=${city}`;
  const titleShare = `Halo gais ada destinasi bagus nih di ${city}, yuk kesini ${name} `;
  const hasTag = ["maukemana", `${city}`, `${name}`];

  return (
    <div className="absolute right-0 top-0 mr-4 mt-14 flex gap-2">
      <FacebookShareButton
        url={urlShare}
        title={titleShare}
        hashtags={hasTag.map((tag) => tag)}
      >
        {" "}
        <FacebookIcon size={32} round />{" "}
      </FacebookShareButton>
      <TwitterShareButton
        url={urlShare}
        title={titleShare}
        hashtags={hasTag.map((tag) => tag)}
      >
        {" "}
        <TwitterIcon size={32} round />{" "}
      </TwitterShareButton>
      <WhatsappShareButton
        url={urlShare}
        title={titleShare}
        hashtags={hasTag.map((tag) => tag)}
      >
        {" "}
        <WhatsappIcon size={32} round />{" "}
      </WhatsappShareButton>
      <LinkedinShareButton
        url={urlShare}
        title={titleShare}
        hashtags={hasTag.map((tag) => tag)}
      >
        {" "}
        <LinkedinIcon size={32} round />{" "}
      </LinkedinShareButton>
    </div>
  );
}
