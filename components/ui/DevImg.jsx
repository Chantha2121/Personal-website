import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`} style={{ position: 'relative' }}>
      <Image src={imgSrc} fill priority alt='' />
    </div>
  );
}

export default DevImg;
