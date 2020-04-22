import React from "react";

import "./ChatMessage.css";

function ChatMessage(props) {
  let setMessageClassname = isCurrentUser => {
    if (isCurrentUser) {
      return "current-user-message";
    } else {
      return "other-user-message";
    }
  };

  return (
    <div className={`chat-message ${setMessageClassname(props.isCurrentUser)}`}>
      <img
        alt={props.message.user.username + "s avatar"}
        className="avatar"
        src={props.message.user.avatar}
      ></img>
      <div>
        <span>{props.message.user.username}</span>
        <div className="bubble">{props.message.body}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
