import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import OutsideClickHandler from 'react-outside-click-handler';
import { ModalContent, ModalWrapper } from './modal.style';

export default function modal({ children, show, onHide }) {
  const spring = useSpring({
    from: {
      marginTop: '-100px'
    },
    to: {
      marginTop: '50px'
    }
  });

  useEffect(() => {
  }, [show]);

  useEffect(() => {

  }, []);
  if (show) {
    return (<ModalWrapper>
    <OutsideClickHandler
  onOutsideClick={() => {
    onHide(false);
  }}
>
        <ModalContent style={spring}>
            {children}
        </ModalContent>
        </OutsideClickHandler>
    </ModalWrapper>);
  }
  return (
      <div></div>
  );
}
