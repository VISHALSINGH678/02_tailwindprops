import React from "react";

// export default function Card({props}){
//     console.log("That is props:", props.username)

export default function Card({username, btnText}) {
     console.log("That is props:", username)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">This is text, that is created by me and is randomly pick according to the time.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{btnText}</span>
      </div>
    </div>
  );
}