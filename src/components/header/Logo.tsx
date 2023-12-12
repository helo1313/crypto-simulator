import Image from "next/image";

import classes from "./header.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={classes.header}>
      <Image
        src="/Images/Dollar.png"
        alt="Dollar image"
        width={64}
        height={64}
      />
      <div className={classes.nameContainer}>
        <p>Crypto</p>
        <p>Simulator</p>
      </div>
    </div>
  );
};

export default Logo;
