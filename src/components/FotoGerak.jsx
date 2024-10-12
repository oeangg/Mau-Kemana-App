import React from "react";
// import Image from "next/image";
// import Foto from "../../public/borobudur.jpg"

const FotoGerak = () => {
  return (
    <>
      <section className="text-gray-600 body-font" suppressHydrationWarning={true}>
        {/* <span className="container px-10 py-24 mx-auto"> */}
          {/* <span className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Mau Kemana Niii?
            </h1> */}

        <div className="container mx-auto flex px-10 py-5 items-center justify-center flex-col"></div>
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 mb-4">
          MauKemana?
        </h1>

            {/* <main className="flex flex-col md:flex-row gap-10 mt-5 justify-center items-center">
              <Image
                className="w-[250-px] md:w-[500px] h-auto"
                src={Foto}
                alt="Borobudur"
                width={400}
                height={200}
                priority
                suppressHydrationWarning={true}
              />
            </main> */}
          {/* </span> */}
        {/* </span> */}
      </section>
    </>
  );
};

export default FotoGerak;

// import styles from "./page.module.css";

// export default function FotoGerak() {
//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 <h1>mau kemana</h1>
//                 <div className={styles.buttons}>
//                     <button>Register</button>
//                     <button>Login</button>
//                 </div>
//             </div>
//             <video
//                 src={require("../../public/video.mp4")}
//                 autoPlay
//                 muted
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }