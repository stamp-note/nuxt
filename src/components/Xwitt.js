import { dbService, storageService } from "fbManager";
import React, { useState } from "react";

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
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onEditingSubmit}>
                <input
                  type="text"
                  placeholder="Edit your Xwitt"
                  onChange={onEditing}
                  value={newXwitt}
                  required
                />
                <input type="submit" value="Update" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <p>{xwittObj.text}</p>
          {xwittObj.attachmentUrl && (
            <img src={xwittObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Xwitt;
