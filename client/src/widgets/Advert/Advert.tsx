import type { IAdvert } from "@/interfaces/IAdvert";
import styles from "./Advert.module.scss";
import { checkAdvertTime } from "@/features/checkAdvertTime";

interface IAdvertProps {
  advert: IAdvert;
}

const Advert = ({ advert }: IAdvertProps) => {
  return (
    <div
      className={`${styles.advert} ${checkAdvertTime(advert.endTime, styles)}`}
    >
      <img src={advert.image} className={styles.img} />
    </div>
  );
};

export default Advert;
