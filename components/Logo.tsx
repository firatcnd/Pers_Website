import Image from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <Image src='/fcd_logo_new.png' alt='' width={80} height={"50%"}/>
  );
}
