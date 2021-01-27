import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbManager";
import Xwitt from "components/Xwitt";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
  const [xwitt, setXwitt] = useState("");
  const [xwitts, setXwitts] = useState([]);
  const [attachment, setAttachment] = useState("");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = null;
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
      // putString 호출하면 UploadTask를 리턴해줌
      // uuid 사진명
    }

    const xwittObj = {
      text: xwitt,
      createAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("xwitts").add(xwittObj);
    setXwitt("");
    setAttachment("");
  };

  const onChange = (e) => {
    const { value } = e.target;
    setXwitt(value);
  };

  const onFileChange = (e) => {
    console.log(e.target.files);
    const {
      target: { files },
    } = e;
    const theFile = files[0]; // 하나만
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      // 파일 로딩 또는 읽는 것이 끝날때 finishedEvent 갖게 됨
      console.log(finishedEvent);
      // currentTarget.result
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
    // img를 문자열로 변환해줌
  };

  const onClearAttachment = () => setAttachment(null);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={xwitt}
          type="text"
          placeholder="What's on your mind"
          maxLength={120}
        />
        <input onChange={onFileChange} type="file" accept="image/*" />
        <input type="submit" value="Xwitt" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
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
