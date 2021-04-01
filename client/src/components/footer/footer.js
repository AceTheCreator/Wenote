import React from 'react'
import {useSpring} from "react-spring";
import { Footer, FooterLeft, FooterRight, SocialWrapper } from './footer.style'
import {AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai"

export default function FooterComponent() {
    const spring = useSpring({
        from: {
            marginTop: "0px"
        },
        to: {
            marginTop: "-100px"
        },
        delay: 1000
    })
    return (
        <Footer style={spring}>
            <FooterLeft>
                Made with <span role="img" style={{fontSize:"15px"}}>❤️</span> & <span role="img">☕</span> by acebuild
            </FooterLeft>
            <FooterRight>
                <SocialWrapper>
                    <AiOutlineGithub fontSize="25px" />
                </SocialWrapper>
                <SocialWrapper>
                    <AiOutlineTwitter fontSize="25px" />
                </SocialWrapper>
                <SocialWrapper>
                    <AiOutlineTwitter fontSize="25px" />
                </SocialWrapper>
            </FooterRight>
        </Footer>
    )
}
