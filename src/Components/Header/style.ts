import styled from "styled-components";
import logoMobile from "../../assets/images/LogoMobile.png"
import logoDesktop from "../../assets/images/LogoDesktop.png"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: solid 1px #33602C;
    background-color: #FEFCFC;

    .header__links {
        display: flex;
        gap: 16px
    }

    .link {
        text-decoration: none;
        font-weight: 600;
        color: black;
        transition: .2s
    }

    .link:hover {
        color: #33602C
    } 
`

export const Logo = styled.span`
    background-image: url(${logoMobile});
    display: block;
    width: 40px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (min-width: 600px){
        background-image: url(${logoDesktop});
        width: 155px
    }
    
`