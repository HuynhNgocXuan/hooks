import music_china from './videos/nhac_trung.mp4'
import { useRef, forwardRef, useImperativeHandle } from 'react'

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => (
        {
            play() {
                videoRef.current.play()
            },
            pause() {
                videoRef.current.pause()
            }
        }
    ))
    return (
        <video
            ref={videoRef}
            src={music_china}
            width={250}
        />
    )
}

export default forwardRef(Video)