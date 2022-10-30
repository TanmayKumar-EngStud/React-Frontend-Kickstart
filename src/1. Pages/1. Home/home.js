// major imports
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
// file imports (Components first and then the stylings)
import "./home.css";
// Functional component
const Home = () => {
 let [tempData, setTempData] = useState("Home Page");
 let data1 = useSelector((state) => state.data1.value);
 let dispatch = useDispatch();
 return (
  <>
   <motion.div
    className="homePage"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
   >
    {tempData}
   </motion.div>
  </>
 );
};
export default Home;
