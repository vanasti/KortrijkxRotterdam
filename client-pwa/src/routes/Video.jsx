import { Form, redirect } from "react-router-dom";
import Camera from "../components/elements/Camera";
import ControlButton from "../components/elements/ControlButton.Jsx";
import { useEffect, useRef, useState } from "react";
import { addAsset, submitSticker } from "../js/stickers";

export const action = async ({request}) => {
    const formData = await request.formData();
    const { video } = Object.fromEntries(formData);
    if (video == "false") {
        await submitSticker();
        localStorage.clear();
    } else if (video) {
        await addAsset(video);
        // await submitSticker();
        // localStorage.clear();
        console.log('asset added');
    }
    return redirect('/end');
}

let constraints = {
    acces: false,
    recording: false,
    stream: null,
    track: null,
}

const Video = () => {
    const [recordingState, setRecordingState] = useState(constraints);
    const [recordedVideo, setRecordedVideo] = useState(null);
    const videoRef = useRef(null);
    const chunksRef = useRef([]);
    const mediaRecorderRef = useRef(0);
    
    const getUserMedia = async () => {
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia(
                {
                    video: true,
                    audio: true
                },
            
            );
        } catch (err) {
            console.log(err);
        }
        return stream
    };

    const initAcces = async (stream) => {
        setRecordingState({
            ...recordingState,
            acces: true,
            stream: stream,
        })
    }

    const sourceUpdate = async (stream) => {
        let track = await recordingState.stream.getVideoTracks()[0];
        setRecordingState({
            ...recordingState,
            track: track
        });
    }    
    
    useEffect(() => {
        const contentUpdate = async () => {
            if (!recordingState.acces) {
                const stream = await getUserMedia();
                if (stream && stream.active) {
                    initAcces(stream);
                }
            } else {
                try {
                    videoRef.current.srcObject = recordingState.stream;
                } catch (err) {
                    console.log(err);
                }
                if (!recordingState.track) {
                    sourceUpdate(recordingState.stream);
                }
            }
        }   
        contentUpdate();      
    });

    const handleStartRecording = () => {
        console.log("recording");
        const stream = recordingState.stream;
        mediaRecorderRef.current = new MediaRecorder(stream);
        chunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
            chunksRef.current.push(event.data);
        };
        
        mediaRecorderRef.current.onstop = () => {
            const recordedBlob = new Blob(chunksRef.current, { type: 'video/webm' });
            setRecordedVideo(URL.createObjectURL(recordedBlob));
            setRecordingState({
                ...recordingState,
                recording: false
            })
        }

        mediaRecorderRef.current.start();
        setRecordingState({
            ...recordingState,
            recording: true,
        });

        setTimeout(handleStopRecording, 5000);
    }

    const handleStopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
    }
    return (
        <>
            
            {recordingState.acces && !recordedVideo ? (
                <>
                    <Camera
                        videoSource={videoRef}
                    />
                    {!recordingState.recording ? (
                        <ControlButton
                            onTouch={handleStartRecording}
                            type="start recording"
                        />
                    ) : (
                        <ControlButton
                            onTouch={handleStopRecording}
                            type="Stop Recording"
                        />
                    )}
                </>
            ) : (recordedVideo && recordingState.acces ? (
                    <>
                        <video autoPlay loop >
                            <source src={recordedVideo} type="video/webm" />
                        </video>
                    </>
            ) : <p>No camera detected, please connect one</p>)
            }
            {!recordedVideo ? (
                <Form method="post">
                    <input type="hidden" name="video" value="false"/>
                    <button type="submit">Ik wil toch geen video maken</button>
                </Form>
            ) : <Form method="post">
                    <input type="hidden" name="video" value={recordedVideo} />
                    <button type="submit">Video uploaden</button>
                </Form>}
            
        </>
    )
}

export default Video;