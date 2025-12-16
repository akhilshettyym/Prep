import { useEffect, useRef } from "react";
import "./ChromeButton.css";
import { initChromeShader } from "./chromeShader";
export default function ChromeButton({ label = "Continue as Guest" }) {
 const canvasRef = useRef(null);
 const videoRef = useRef(null);
 useEffect(() => {
   let stream;
   async function start() {
     stream = await navigator.mediaDevices.getUserMedia({
       video: { facingMode: "user" },
       audio: false,
     });
     videoRef.current.srcObject = stream;
     await videoRef.current.play();
     initChromeShader(canvasRef.current, videoRef.current);
   }
   start();
   return () => stream?.getTracks().forEach(t => t.stop());
 }, []);
 return (
<button className="chrome-btn">
<div className="chrome-rim">
<canvas ref={canvasRef} className="chrome-canvas" />
<span className="chrome-text">{label}</span>
</div>
<video   />
</button>
 );
}