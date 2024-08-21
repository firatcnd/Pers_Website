import Image from 'next/image';
import { useState } from 'react';
export default function Logo({ ...rest }) {

    const [ logoSrc, setLogoSrc] = useState("/fcd_black.gif")

  return (
    <Image src={logoSrc} id={"gif"} alt='' width={80} height={"80%"}/>
  );
}




