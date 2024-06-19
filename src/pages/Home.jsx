import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Home = () => {
  return (
    <div>
      <PageNav />
      <h1>Trip List</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  );
};
export default Home;
