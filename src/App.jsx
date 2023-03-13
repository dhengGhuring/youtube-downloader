import React, { useState } from "react";
export const App = () => {
  const iframeStyle = {
    border: "none",
  };
  const [link, setLink] = useState("");
  const [currentLink, setCurrentLink] = useState("");
  const handleChangeInput = (e) => {
    setLink(e.target.value);
  };
  const handleSubmit = () => {
    setCurrentLink(link);
  };
  return (
    <div className="flex w-full flex-col my-3">
      <h1 className="text-center text-5xl font-bold">
        Video Downloader Tercepat
      </h1>
      <div className="my-5 mx-3 flex flex-row gap-1 justify-center">
        <input
          type="text"
          className="border-solid border-2 border-sky-500 w-96 rounded-xl p-2"
          placeholder="Paste linknya disini"
          onChange={handleChangeInput}
        />
        <button
          className="bg-sky-500 rounded-xl p-2 text-black"
          onClick={handleSubmit}
        >
          Convert!
        </button>
      </div>
      <div className="flex flex-col h-full">
        <iframe
          id="widgetApi"
          src={`https://convert2mp3s.com/api/widget?url=${currentLink}`}
          width="100%"
          height="600px"
          allowtransparency="true"
          style={iframeStyle}
        ></iframe>
        <p className="text-center">Made with ❤️ by DhengGhuring</p>
      </div>
    </div>
  );
};
