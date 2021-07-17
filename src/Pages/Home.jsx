import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import { io } from "socket.io-client";

import { Header } from "../components/Header";

import "react-chat-widget/lib/styles.css";

const socket = io("http://localhost:4000");

export const Home = () => {
  useEffect(() => {
    addResponseMessage("Hola te damos la bienvenida a REACTCHAT");

    //Listen from server
    socket.on("receive-message", (message) => {
      //Api response
      addResponseMessage(message);
    });
  }, []);

  const handleNewUserMessage = (newMessage) => {
    //Send Message
    socket.emit("send-message", newMessage);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5 display-1">Home Page</h1>
        </div>
        <Widget
          title="REACTCHAT"
          subtitle="WELCOME"
          handleNewUserMessage={handleNewUserMessage}
        />
      </div>
    </>
  );
};
