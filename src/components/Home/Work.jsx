import React, { useEffect, useState } from "react";
// import Experience from "./Child/Experience";
import Api from "../../utils/Api";
import Swipers from "../Swipers";

function Work() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        Api()
          .get("repos")
          .then((res) => {
            setList(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setList]);

  console.log(list);
  return (
    <div className="p-12" id="work">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl text-center">
        My open source works
      </h2>
      <div class="flex items-center justify-center mt-20">
        <Swipers/>
      </div>
      <div>
     
      </div>
    </div>
  );
}

export default Work;
