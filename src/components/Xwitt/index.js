import React, { useState } from "react";
import { dbService, storageService } from "fbManager";
import {
  XwitterButton,
  XwitterEditForm,
  XwitterIcon,
  XwitterTopBar,
  XwitterImg,
  XwitterImgWrap,
  XwitterText,
  XwitterWrap,
  XwitterIconWrap,
  XwitterEditText,
  XwitterEditWrap,
  XwitterEditButtonWrap,
  XwitterEditButton,
} from "./styled";

const Xwitt = ({ xwittObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newXwitt, setNewXwitt] = useState(xwittObj.text);
  const onDelete = async () => {
    const ok = window.confirm("Are you sure you want to delete this xwitt?");
    if (ok) {
      await dbService.doc(`xwitts/${xwittObj.id}`).delete();
      await storageService.refFromURL(xwittObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onEditingSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`xwitts/${xwittObj.id}`).update({
      text: newXwitt,
    });
    setEditing(false);
  };

  const onEditing = (e) => {
    const { value } = e.target;
    setNewXwitt(value);
  };
  console.log(xwittObj);
  return (
    <XwitterWrap>
      <XwitterTopBar />
      {editing ? (
        <XwitterEditWrap>
          {isOwner && (
            <>
              <XwitterEditForm onSubmit={onEditingSubmit}>
                <XwitterEditText
                  type="text"
                  placeholder="Edit your Xwitt"
                  onChange={onEditing}
                  value={newXwitt}
                  required
                />
                <XwitterEditButtonWrap>
                  <XwitterEditButton
                    onClick={toggleEditing}
                    value="Cancel"
                    cancel
                  />
                  <XwitterEditButton type="submit" value="Update" />
                </XwitterEditButtonWrap>
              </XwitterEditForm>
            </>
          )}
        </XwitterEditWrap>
      ) : (
        <>
          <XwitterIconWrap>
            {isOwner && (
              <>
                <XwitterButton onClick={onDelete} title="Delete">
                  <XwitterIcon delete></XwitterIcon>
                </XwitterButton>
                <XwitterButton onClick={toggleEditing} title="Edit">
                  <XwitterIcon></XwitterIcon>
                </XwitterButton>
              </>
            )}
          </XwitterIconWrap>

          <XwitterText>
            {xwittObj.text}
            {xwittObj.attachmentUrl && (
              <XwitterImgWrap>
                <XwitterImg src={xwittObj.attachmentUrl} alt="img" />
              </XwitterImgWrap>
            )}
          </XwitterText>
        </>
      )}
    </XwitterWrap>
  );
};

export default Xwitt;
