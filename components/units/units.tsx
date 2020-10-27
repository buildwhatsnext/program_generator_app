import { useSelector } from 'react-redux';
import { INamedValue } from '../NamedValue';
import { selectInfo } from '../../features/info/info.slice';
import styles from './units.module.scss';

const areaMeters = (
  <span className={styles.unit}>
    m<span className={styles.unit__super}>2</span> 
  </span>
)

const areaFeet = (
  <span className={styles.unit}>
    m<span className={styles.unit__super}>2</span> 
  </span>
)

export function formatAreaData(data: INamedValue[]) {
  const overview = useSelector(selectInfo);
  const { units } = overview;
  // const areaUnitType = units.toString().toLowerCase() === 'metric' ? areaMeters : areaFeet;
  const areaUnitType = units.toString().toLowerCase() === 'metric' ? 'sqm' : 'sqft';
  data.forEach((d, i) => {
    if(d.name.toLowerCase().includes('area')) {
      const { value } = data[i];
      const newVal = `${value} ${areaUnitType}`;
      data[i].value = newVal;
    }
  });

  return data;
}
