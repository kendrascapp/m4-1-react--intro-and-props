import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";

function ChatStream(props) {
  let isCurrentUser = user => {
    return props.currentUser.username === user.username;
  };

  return (
    <section className="chat-stream">
      {props.messages.map(message => {
        return (
          <ChatMessage
            key={Math.random() * 1000000000001}
            isCurrentUser={isCurrentUser(message.user)}
            message={message}
          />
        );
      })}
    </section>
  );
}

export default ChatStream;
