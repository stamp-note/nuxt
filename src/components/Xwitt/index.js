import { dbService, storageService } from "fbManager";
import React, { useState } from "react";
import { XwitterEditForm, XwitterWrap } from "./styled";

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

  return (
    <XwitterWrap>
      {editing ? (
        <>
          {isOwner && (
            <>
              <XwitterEditForm onSubmit={onEditingSubmit}>
                <input
                  type="text"
                  placeholder="Edit your Xwitt"
                  onChange={onEditing}
                  value={newXwitt}
                  required
                />
                <input type="submit" value="Update" />
              </XwitterEditForm>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <p>{xwittObj.text}</p>
          {xwittObj.attachmentUrl && (
            <img
              src={xwittObj.attachmentUrl}
              width="50px"
              height="50px"
              alt="img"
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </XwitterWrap>
  );
};

export default Xwitt;
