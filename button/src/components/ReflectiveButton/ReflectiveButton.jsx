// import React from "react";
// import { useWebcam } from "../../hooks/useWebcam";
// import "./ReflectiveButton.css";
// export default function ReflectiveButton({
//   label = "Continue",
//   onClick,
// }) {
//   const { videoRef, error } = useWebcam();
//   return (
//     <button className="reflective-btn" onClick={onClick}>
//       {!error && (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           muted
//           className="reflective-video"
//         />
//       )}
//       <div className="glass-overlay" />
//       <span className="btn-text">{label}</span>
//     </button>
//   );
// }


import React, { useState } from "react";
import { useWebcam } from "../../hooks/useWebcam";
import "./ReflectiveButton.css";
export default function ReflectiveButton({ label, onClick }) {
 const { videoRef } = useWebcam();
 const [dents, setDents] = useState([]);
 const handleClick = (e) => {
   const rect = e.currentTarget.getBoundingClientRect();
   const x = ((e.clientX - rect.left) / rect.width) * 100;
   const y = ((e.clientY - rect.top) / rect.height) * 100;
   const id = Date.now();
   setDents((prev) => [...prev, { id, x, y }]);
   setTimeout(() => {
     setDents((prev) => prev.filter((d) => d.id !== id));
   }, 3000);
   onClick?.();
 };
 return (
<button className="reflective-btn" onClick={handleClick}>
<video
       ref={videoRef}
       autoPlay
       muted
       playsInline
       className="reflective-video"
     />
<div className="chromatic-layer" />
     {dents.map(({ id, x, y }) => (
<span
         key={id}
         className="dent-effect"
         style={{
           "--x": `${x}%`,
           "--y": `${y}%`,
         }}
       />
     ))}
<div className="gloss-layer" />
<span className="btn-text">{label}</span>
</button>
 );
}