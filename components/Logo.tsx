import Image from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <Image src='/fcd.gif' id={"gif"} alt='' width={80} height={"50%"}/>
  );
}



