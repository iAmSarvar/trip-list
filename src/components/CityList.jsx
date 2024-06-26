import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map!" />
    );
  }
  return (
    <div className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </div>
  );
};

export default CityList;
