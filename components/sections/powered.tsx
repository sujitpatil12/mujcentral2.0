import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Redis from "@/public/_static/avatars/Redis_Mark_Red_RGB.png"
import Supabase from "@/public/_static/avatars/supabase-logo-wordmark--light.svg"
import Image from "next/image";

const logos = [
  {
    title: "Next.js 15",
    href: "https://nextjs.org/",
    icon: (
      <svg
        className="h-[22px] w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="512px"
        height="104px"
        viewBox="0 0 512 104"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M429.54331,0.0429770721 L429.54331,16.5035533 L394.165929,16.5035533 L394.165929,103.100426 L376.475939,103.100426 L376.475939,16.5035533 L340.361746,16.5035533 L340.361746,0.0429770721 L429.54331,0.0429770721 Z M433.519756,93.2825015 C434.76597,93.2825015 435.856244,93.7313462 436.778883,94.6289056 C437.714518,95.526465 438.181036,96.6012751 438.19403,97.8532061 C438.181036,98.703464 437.96532,99.4828995 437.533888,100.179687 C437.090761,100.88843 436.528081,101.443574 435.819858,101.845117 C435.124629,102.258485 434.357929,102.470952 433.519756,102.470952 C432.224162,102.470952 431.122193,102.022238 430.199553,101.124678 C429.276914,100.227119 428.820792,99.1404832 428.832487,97.8532061 C428.820792,96.6012751 429.276914,95.526465 430.199553,94.6289056 C431.122193,93.7313462 432.224162,93.2825015 433.519756,93.2825015 Z M82.9163208,103.100426 L17.6888203,22.0284751 L17.6888203,103.057413 L0,103.057413 L0,0 L22.1109929,0 L104.516873,102.328528 L104.518173,16.5035533 L104.510765,0.0429770721 L193.691939,0.0429770721 L193.691939,16.5035533 L122.206993,16.5035533 L122.206993,42.9835695 L179.695107,42.9835695 L179.695107,59.4441096 L122.206993,59.4441096 L122.206993,86.6398863 L193.691939,86.6398863 L193.691939,103.100426 L82.9163208,103.100426 Z M250.384893,59.2866112 L261.977665,73.7004508 L238.222944,103.222059 L215.007513,103.222059 L250.384893,59.2866112 Z M238.222944,0.085959602 L268.152853,37.2560569 L297.989198,0.200360934 L321.139655,0.164585909 L279.743025,51.6501442 L321.205929,103.14344 L297.989198,103.14344 L215.073787,0.085959602 L238.222944,0.085959602 Z M463.710863,59.0558213 L471.549401,59.0558213 L471.549401,89.2551147 C471.537706,92.0305706 470.93734,94.4044832 469.763898,96.4005036 C468.577462,98.3963939 466.934904,99.9197888 464.825827,100.994599 C462.728447,102.057454 460.271107,102.600902 457.478497,102.600902 C454.924995,102.600902 452.636589,102.140231 450.598985,101.242672 C448.561381,100.345113 446.943513,98.9987086 445.757076,97.2271107 C444.557645,95.4555127 443.970274,93.2470254 443.970274,90.6015188 L451.821807,90.6015188 C451.833503,91.7589766 452.097299,92.7627046 452.600203,93.601267 C453.103107,94.4398294 453.798335,95.0774904 454.685888,95.526335 C455.583838,95.9751797 456.615635,96.199602 457.777381,96.199602 C459.036589,96.199602 460.115168,95.9397036 460.989726,95.4082112 C461.864284,94.8885442 462.536122,94.1091086 463.003939,93.0697746 C463.458761,92.0423959 463.699168,90.7668142 463.710863,89.2551147 L463.710863,59.0558213 Z M503.801503,70.8662579 C503.610477,69.0356629 502.771005,67.6066112 501.309076,66.5909279 C499.834152,65.5634193 497.929096,65.0555777 495.59131,65.0555777 C493.950051,65.0555777 492.536203,65.3036508 491.361462,65.7878416 C490.186721,66.2838579 489.275777,66.9451695 488.65202,67.783732 C488.029563,68.6222944 487.717685,69.5789807 487.692995,70.6537909 C487.692995,71.5513503 487.908711,72.3307858 488.328447,72.980402 C488.748183,73.6417137 489.310863,74.1968569 490.042477,74.6457015 C490.761096,75.1062416 491.564183,75.484134 492.440041,75.7912041 C493.326294,76.0982741 494.213848,76.3581726 495.100102,76.5707695 L499.187005,77.5746274 C500.829563,77.9525198 502.424041,78.4604914 503.945746,79.1099777 C505.467452,79.7477685 506.846213,80.5626802 508.056041,81.5428873 C509.267168,82.5232244 510.226193,83.704203 510.933117,85.0860832 C511.640041,86.4678335 512,88.0858315 512,89.9519025 C512,92.4674599 511.352853,94.6760772 510.045563,96.5893198 C508.739574,98.4907371 506.857909,99.9789157 504.388873,101.053726 C501.931533,102.116711 498.959594,102.659898 495.460061,102.659898 C492.080081,102.659898 489.131533,102.140361 486.650802,101.101027 C484.158376,100.073519 482.215635,98.5616893 480.813482,96.5774944 C479.41133,94.5934294 478.656325,92.1722152 478.548467,89.3259371 L486.315533,89.3259371 C486.423391,90.8139858 486.902904,92.0542213 487.717685,93.0580792 C488.544162,94.0501117 489.622741,94.7823756 490.941726,95.2783919 C492.272406,95.7625827 493.757726,96.0106558 495.400284,96.0106558 C497.114315,96.0106558 498.624325,95.7507574 499.930315,95.2429157 C501.224609,94.7350741 502.243411,94.0265909 502.975025,93.1053807 C503.718335,92.195866 504.08999,91.1211858 504.101685,89.8929056 C504.08999,88.7709239 503.753421,87.8377584 503.106274,87.1054944 C502.447431,86.3733604 501.536487,85.7592203 500.373442,85.2632041 C499.2,84.7671878 497.832934,84.3183431 496.274843,83.9286254 L491.313381,82.6766944 C487.729381,81.7673096 484.88869,80.3855594 482.814701,78.5313137 C480.730315,76.677068 479.698518,74.2205076 479.698518,71.1379817 C479.698518,68.610599 480.393746,66.3902863 481.797198,64.4887391 C483.186355,62.5873218 485.092711,61.1109685 487.50197,60.0598091 C489.922924,58.9969543 492.655756,58.4771574 495.699168,58.4771574 C498.791959,58.4771574 501.500102,58.9969543 503.837888,60.0598091 C506.174376,61.1109685 508.009259,62.5754964 509.33864,64.4414376 C510.66932,66.3075086 511.364548,68.4451736 511.400934,70.8662579 L503.801503,70.8662579 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: (
      <svg
        className="h-7 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 284 65"
      >
        <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
      </svg>
    ),
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io/",
    icon: (
      <svg
        width="90"
        height="28"
        viewBox="0 0 90 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.209637 19.0073C-0.0659575 18.5726 -0.070121 18.0189 0.198904 17.58L10.3282 1.05707C10.8916 0.138071 12.252 0.218426 12.7033 1.19735L21.9569 21.2706C22.3002 22.0154 21.905 22.8917 21.1194 23.1274L6.72474 27.4458C6.14558 27.6195 5.52155 27.3867 5.19781 26.876L0.209637 19.0073ZM11.4969 5.88824C11.5945 5.40217 12.2605 5.33208 12.4572 5.78717L18.8402 20.5571C18.9603 20.8352 18.8108 21.1559 18.5205 21.2425L8.57492 24.2114C8.20935 24.3205 7.85916 24.0011 7.93428 23.627L11.4969 5.88824ZM48.4948 21.1371H51.3226V10.772H48.4948V21.1371ZM48.3744 8.09277C48.3744 7.17221 48.8878 6.7116 49.9137 6.7116C50.9394 6.7116 51.4527 7.17221 51.4527 8.09277C51.4527 8.53176 51.3244 8.87321 51.068 9.11743C50.8114 9.36165 50.4267 9.48343 49.9137 9.48343C48.8878 9.48343 48.3744 9.01987 48.3744 8.09277ZM87.1709 16.335L86.0768 16.372C85.2548 16.3969 84.6429 16.5455 84.2412 16.8172C83.8392 17.0893 83.6386 17.5031 83.6386 18.0596C83.6386 18.8567 84.0959 19.2555 85.0106 19.2555C85.6656 19.2555 86.1897 19.0672 86.5819 18.6898C86.9744 18.313 87.1709 17.8124 87.1709 17.1878V16.335ZM88.0053 21.1375L87.4583 19.7282H87.384C86.908 20.3279 86.4182 20.7437 85.9144 20.9755C85.4109 21.2072 84.7542 21.3228 83.9446 21.3228C82.9491 21.3228 82.1661 21.0386 81.5941 20.47C81.0226 19.9017 80.7368 19.0918 80.7368 18.0409C80.7368 16.941 81.1214 16.1298 81.8907 15.6073C82.6607 15.0851 83.8209 14.7961 85.3723 14.7404L87.1709 14.6848V14.2304C87.1709 13.1799 86.633 12.6544 85.5576 12.6544C84.7293 12.6544 83.7558 12.9045 82.6371 13.4054L81.7009 11.4955C82.8938 10.8716 84.2167 10.559 85.6689 10.559C87.0596 10.559 88.1258 10.8621 88.8676 11.4677C89.6091 12.0734 89.98 12.9946 89.98 14.2304V21.1375H88.0053ZM72.4802 21.1375H69.6524V15.0834C69.6524 14.3357 69.527 13.775 69.2772 13.4008C69.0265 13.0269 68.6326 12.8397 68.0948 12.8397C67.3719 12.8397 66.8465 13.1058 66.5188 13.6371C66.1911 14.1688 66.0275 15.0435 66.0275 16.261V21.1375H63.1996V10.7723H65.3599L65.74 12.0982H65.8978C66.1757 11.6225 66.5778 11.25 67.1029 10.9812C67.6283 10.7121 68.231 10.5776 68.9109 10.5776C70.4623 10.5776 71.5128 11.0846 72.0631 12.0982H72.3132C72.5915 11.616 73.001 11.2421 73.5419 10.9763C74.0827 10.7105 74.6929 10.5776 75.3728 10.5776C76.5471 10.5776 77.4359 10.8791 78.0382 11.4817C78.6409 12.0844 78.9421 13.0502 78.9421 14.3786V21.1375H76.1051V15.0834C76.1051 14.3357 75.9798 13.775 75.73 13.4008C75.4792 13.0269 75.0854 12.8397 74.5475 12.8397C73.8555 12.8397 73.3379 13.0872 72.9945 13.5815C72.6517 14.0761 72.4802 14.8608 72.4802 15.9362V21.1375ZM60.17 20.4885C60.9088 19.9323 61.2781 19.1227 61.2781 18.0594C61.2781 17.5468 61.1887 17.1045 61.0093 16.7336C60.8299 16.3627 60.5517 16.0353 60.1749 15.7508C59.7981 15.4667 59.2046 15.1609 58.3946 14.8332C57.4862 14.4685 56.8976 14.1932 56.6285 14.0079C56.3601 13.8226 56.2252 13.6033 56.2252 13.3496C56.2252 12.8985 56.6426 12.6729 57.477 12.6729C57.9465 12.6729 58.4071 12.7443 58.8582 12.886C59.3093 13.0284 59.7948 13.2104 60.314 13.4331L61.1668 11.3936C59.9863 10.8498 58.7718 10.5778 57.5232 10.5778C56.2127 10.5778 55.2009 10.8295 54.4872 11.3333C53.7729 11.8371 53.416 12.5495 53.416 13.4701C53.416 14.0079 53.5012 14.461 53.6714 14.8286C53.841 15.1963 54.113 15.5223 54.4872 15.8065C54.8607 16.091 55.4467 16.4 56.2438 16.7336C56.8 16.9686 57.2453 17.1742 57.5788 17.3503C57.9128 17.5265 58.1475 17.6843 58.2837 17.8231C58.4195 17.9622 58.4876 18.1429 58.4876 18.3655C58.4876 18.9587 57.9743 19.2553 56.9483 19.2553C56.4478 19.2553 55.8684 19.1718 55.2103 19.0052C54.5517 18.8382 53.9601 18.6313 53.4347 18.3838V20.7203C53.8983 20.918 54.3959 21.0679 54.9275 21.1701C55.4591 21.2719 56.1014 21.3229 56.8557 21.3229C58.3266 21.3229 59.4314 21.0447 60.17 20.4885ZM46.9948 10.661C46.7414 10.6054 46.4232 10.5776 46.0398 10.5776C45.3969 10.5776 44.8021 10.7553 44.2554 11.1108C43.708 11.4664 43.2739 11.9345 42.9524 12.5152H42.8136L42.3962 10.7723H40.2546V21.1375H43.0824V15.8622C43.0824 15.0278 43.3341 14.3786 43.8376 13.9151C44.3418 13.4515 45.0446 13.2197 45.9472 13.2197C46.2749 13.2197 46.5528 13.2508 46.7817 13.3124L46.9948 10.661ZM31.9317 13.9614H32.8774C33.7613 13.9614 34.4223 13.7869 34.8613 13.4376C35.3003 13.0886 35.5196 12.5799 35.5196 11.9124C35.5196 11.239 35.3356 10.7414 34.968 10.4199C34.6 10.0984 34.0239 9.93766 33.2388 9.93766H31.9317V13.9614ZM38.4214 11.8106C38.4214 13.2694 37.9657 14.385 37.0537 15.1573C36.1423 15.9302 34.8459 16.3162 33.1649 16.3162H31.9317V21.1373H29.0577V7.58296H33.3872C35.0315 7.58296 36.2814 7.93684 37.1375 8.64461C37.9936 9.35238 38.4214 10.4079 38.4214 11.8106Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: (
      <div className="flex items-center gap-x-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="size-[38px]"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
          ></line>
        </svg>
        <span className="font-geist text-[23px] font-bold">shadcn/ui</span>
      </div>
    ),
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: (
      <Image src={Redis} alt="Redis Logo" className="h-8 w-auto " />
    ),
  },
  {
    title: "Supabase",
    href: "https://supabase.io/",
    icon: (
      <Image src={Supabase} alt="Supabase Logo" className="h-8 w-auto" />
    ),
  },
];

export default function Powered() {
  return (
    <section className="py-10 text-muted-foreground">
      <MaxWidthWrapper>
        <h2 className="text-center text-sm font-semibold uppercase">
          Powered by
        </h2>

        <div className="mt-10 grid grid-cols-2 place-items-center gap-8 md:grid-cols-6">
          {logos.slice(0, 6).map((logo) => (
            <Link
              target="_blank"
              key={logo.title}
              href={logo.href}
              aria-label={logo.title}
              className="duration-250 text-foreground backdrop-grayscale-0 transition"
            >
              {logo.icon}
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
