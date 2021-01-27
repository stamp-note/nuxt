import React, { useEffect, useState } from "react";
import { dbService } from "fbManager";
import Xwitt from "components/Xwitt";
import XwittFactory from "components/XwittFactory";

const Home = ({ userObj }) => {
  const [xwitts, setXwitts] = useState([]);

  useEffect(() => {
    dbService.collection("xwitts").onSnapshot((snapshot) => {
      // console.log(snapshot.docs); // read, deldte, update
      const xwittArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setXwitts(xwittArray);
    }); // 더 적게 리렌더 되서 더 빠르게 실행됨
  }, []);

  return (
    <>
      <XwittFactory userObj={userObj} />
      <div>
        {xwitts.map((xwitt) => (
          <Xwitt
            key={xwitt.id}
            xwittObj={xwitt}
            isOwner={xwitt.createId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
