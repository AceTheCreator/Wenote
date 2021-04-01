import React from 'react';
import Landing from "../../components/landing/landing"
import { HomeContainer, HomeWrapper } from './home.style';

export default function beforeAuthHome() {
    return (
        <HomeContainer>
            <HomeWrapper>
            <Landing />
            </HomeWrapper>
        </HomeContainer>
    )
}
