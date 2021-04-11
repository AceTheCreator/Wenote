import React, {useState, Suspense, lazy} from 'react';
import {useSpring} from "react-spring";
import { AuthButton } from '../navbar/navbar.style';
import {
  LandingBg, Landing, LandingContent, Heading, TextSummary, Colored, Line
} from './landing.style';
import img from '../../static/bg.png';
import Footer from "../footer/footer";

const Modal = lazy(() => import("../modal/modal"));
const Signup = lazy(() => import("../auth/signup"));

export default function landing() {
  const [show, setShow] = useState(false);
  const spring = useSpring({
    from: {
      marginTop: "100px"
    },
    to: {
      marginTop: "0px"
    }
  })
  const ModalComponent = Modal;
  return (
    <div>
      <Landing>
        <Suspense fallback={<div></div>}>
            <ModalComponent show={show} onHide={() => setShow(false)}>
              <Suspense fallback={<div>loading</div>}>
                <Signup />
              </Suspense>
              </ModalComponent>
          </Suspense>
        <LandingContent>
          <Heading>
            Say No More To Scattered Ideas, All Your Ideas <Line> <svg id="underline" class="underline" xmlns="http://www.w3.org/2000/svg" width="170" height="35" viewBox="0 0 137 23"><path fill="none" fill-rule="evenodd" stroke="#FFAD0D" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.842 9.327C51.628.37 93.864-.375 134.548 7.094 71.485 6.547 26.976 2.864 2 20.745c18.198-5.87 67.32-23.752 131.677-3.208"></path></svg> In One Place</Line>
          </Heading>
          <TextSummary>Chromenote gives you the ability to
            bring your creative mind to action by allowing you
             to take note the simple way for free.</TextSummary>
             <AuthButton onClick={() => setShow(true)} style={{ width: '200px', borderRadius: '5px', padding: '15px' }}>Click here to get started</AuthButton>
        </LandingContent>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <LandingBg style={spring} bg={img} />
          </div>
      </Landing>
      <Footer />
    </div>
  );
}
