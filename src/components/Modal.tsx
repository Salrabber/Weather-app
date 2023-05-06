import "../styles/Modal.scss";
import leftArrow from "../images/right-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

interface ModalProps {
  children: React.ReactNode;
  extreme: string;
  onClose: () => void;
  switchLeft: () => void;
  switchRight: () => void;
}

export function Modal({ children, onClose, switchLeft, switchRight, extreme }: ModalProps) {
  return (
    <div className="modall__wrapper">
      <div className="modall" onClick={onClose} />
      
      <div className="modall__body">
      {extreme !== 'both' && <div className="arrows">
      {extreme !== 'left' && <img
          onClick={switchLeft}
          className="modall__arrow modall__arrow--left"
          src={leftArrow}
          alt="left-arrow"
        />}
        {extreme !== 'right' && <img
          onClick={switchRight}
          className="modall__arrow modall__arrow--right"
          src={rightArrow}
          alt="left-arrow"
        />}
        </div>}
       

        <svg
          onClick={onClose}
          className="modall__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="red"
            d="M19.4 4.1l.1.1c.4.4.4 1 0 1.4L5.5 19.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l13.9-13.9c.4-.4 1-.4 1.4 0z"
          />
          <path
            fill="red"
            d="M4.6,4.1c-0.4,0.4-0.4,1,0,1.4l13.9,13.9c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L6,4.1C5.6,3.7,5,3.7,4.6,4.1z"
          />
          <path fill="none" d="M0,0h24v24H0V0z" />
        </svg>
        {children}
      </div>
    </div>
  );
}
