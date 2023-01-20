import { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import StyledDiv from './styles';
import { videoConstraints } from './constants';
import images from '@assets';

function WebCamera({ setImageSelected, useCamera }) {
  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    const pictureSource = webcamRef.current?.getScreenshot();
    setImageSelected(pictureSource);
  }, [webcamRef]);

  return (
    <StyledDiv>
      {useCamera ? (
        <div>
          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                capture();
              }}
              className='capture-button'
            >
              <div className='webcam-container'>
                <Webcam
                  audio={false}
                  height={350}
                  width={350}
                  ref={webcamRef}
                  screenshotFormat='image/jpeg'
                  videoConstraints={videoConstraints}
                />
                <img className='capture-button-logo' src={images.cameraLogo} alt={'camera logo'} />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </StyledDiv>
  );
}

export default WebCamera;
