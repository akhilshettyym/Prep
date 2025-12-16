import { useEffect, useRef, useState } from "react";
export function useWebcam() {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let stream;
        async function startWebcam() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false,
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                setError("Camera access denied");
            }
        }
        startWebcam();
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);
    return { videoRef, error };
}