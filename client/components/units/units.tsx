import { useSelector } from 'react-redux';
import { INamedValue } from '../text/NamedValue';
import { selectOverview } from '../../features/project/project.slice';
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

/*
 TODO: write tests for this function to prove that it can actually produce values
 for a given set of named values
/**
 * @param data takes an array of INamedValue objects and 
 * breaks them up into area data for the panel section
 */
export function formatAreaData(data: INamedValue[]) {
  const overview = useSelector(selectOverview);
  const { units } = overview;
  // const areaUnitType = units.toString().toLowerCase() === 'metric' ? areaMeters : areaFeet;
  const areaUnitType = units?.toString().toLowerCase() === 'metric' ? 'sqm' : 'sqft';
  const factorPercentage = units?.toString().toLowerCase() === 'metric' || 'imperial' ? '%' : '';
  data.forEach((d, i) => {
    if(d.name.toLowerCase().includes('area')) {
      const { value } = data[i];
      const newVal = `${value} ${areaUnitType}`;
      data[i].value = newVal;
    }

    if(d.name.toLowerCase().includes('factor')) {
      const { value } = data[i];
      const newFactorVal = `${value} ${factorPercentage}`;
      data[i].value = newFactorVal;
    }
  });

  return data;
}
