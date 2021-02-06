import React from 'react';
import { AuthButton } from '../navbar/navbar.style';
import {
  LandingBg, Landing, LandingContent, Heading, TextSummary, Colored
} from './landing.style';
import img from '../../static/bg.jpg';

export default function landing() {
  return (
      <Landing>
        <LandingContent>
          <Heading>
            Collect Your Thoughts And <Colored>Breath Life</Colored> Into Them
          </Heading>
          <TextSummary>Wenote gives you the ability to
            bring your creative mind to action by allowing you
             to take note the simple way for free.</TextSummary>
             <AuthButton style={{ width: '200px', borderRadius: '5px', padding: '15px' }}>Click here to get started</AuthButton>
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
