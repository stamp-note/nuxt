import React, { useState } from "react";
import { dbService, storageService } from "fbManager";
import { v4 as uuidv4 } from "uuid";
import {
  AttachmentInput,
  AttachmentLabel,
  AttachmentPreview,
  XwitterFatoryForm,
  XwitterTextInput,
  AttachmentPreviewClear,
  XwitterSave,
  FormBottomWrap,
  CountText,
  XwitterTextInputWrap,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const XwitterFatory = ({ userObj }) => {
  const [xwitt, setXwitt] = useState("");
  const [attachment, setAttachment] = useState("");
  const [numberText, setNumberText] = useState(0);

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
    setNumberText(0);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setNumberText(value.length);
    setXwitt(value);
  };

  const onFileChange = (e) => {
    // console.log(e.target.files);
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
    console.log(e);
  };

  const onClearAttachment = () => setAttachment(null);

  const textMaxLength = 120;

  return (
    <XwitterFatoryForm onSubmit={onSubmit}>
      <XwitterTextInputWrap>
        <XwitterTextInput
          onChange={onChange}
          value={xwitt}
          type="text"
          placeholder="Tell me. What's on your mind?"
          maxLength={textMaxLength}
        />

        {attachment && (
          <AttachmentPreview>
            <img src={attachment} alt="img" />
            <AttachmentPreviewClear onClick={onClearAttachment}>
              <FontAwesomeIcon icon={faTimes} />
            </AttachmentPreviewClear>
          </AttachmentPreview>
        )}

        <CountText>
          {numberText}/{textMaxLength}
        </CountText>
      </XwitterTextInputWrap>

      <FormBottomWrap>
        <AttachmentLabel for="add-photo">
          <FontAwesomeIcon icon={faImage} />
        </AttachmentLabel>
        <AttachmentInput
          id="add-photo"
          onChange={onFileChange}
          type="file"
          accept="image/*"
        />
        <XwitterSave type="submit" value="Save" />
      </FormBottomWrap>
    </XwitterFatoryForm>
  );
};

export default XwitterFatory;
