import React, {useState, Suspense, lazy} from 'react';
import { AuthButton } from '../navbar/navbar.style';
import {
  LandingBg, Landing, LandingContent, Heading, TextSummary, Colored
} from './landing.style';
import img from '../../static/bg.jpg';

const Modal = lazy(() => import("../modal/modal"));
const Signup = lazy(() => import("../auth/signup"));

export default function landing() {
  const [show, setShow] = useState(false);
  const ModalComponent = Modal;
  return (
      <Landing>
        <Suspense fallback={<div>loaing</div>}>
            <ModalComponent show={show} onHide={() => setShow(false)}>
              <Suspense fallback={<div>loading</div>}>
                <Signup />
              </Suspense>
              </ModalComponent>
          </Suspense>
        <LandingContent>
          <Heading>
            Collect Your Thoughts And <Colored>Breath Life</Colored> Into Them
          </Heading>
          <TextSummary>Wenote gives you the ability to
            bring your creative mind to action by allowing you
             to take note the simple way for free.</TextSummary>
             <AuthButton onClick={() => setShow(true)} style={{ width: '200px', borderRadius: '5px', padding: '15px' }}>Click here to get started</AuthButton>
        </LandingContent>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <LandingBg bg={img} />
          </div>
      </Landing>
  );
}
