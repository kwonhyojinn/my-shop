import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer(props) {
    return (
        <FooterWrapper>
            <div>
                <p className="footerTex">010-000-0000</p>
                <p className="footerTex">OPEN.AM:11 ~ PM:18</p>
                <p className="footerTex">기업은행 : 123-12312-12-112 홍길동</p>
                <p className="footerTex">ORDER TRACKING</p>
                <p className="footerTex">KG 이니시스 구매안전서비스 가맹점</p>
            </div>
            
            <div>
                <Link to = "/" className='footerText'>HOME</Link>
                <Link to = "/" className='footerText'>ABOUT</Link>
                <Link to = "/" className='footerText'>AGREEMENT</Link>
                <Link to = "/" className='footerText'>PRIVACY POLICY</Link>
                <Link to = "/" className='footerText'>GUIDE</Link>
            </div>

            <div>
                <p className="footerTex">COMPANY : 리액스 마켓</p>
                <p className="footerTex">OWNER : 홍길동</p>
                <p className="footerTex">MAIL ORDER LICENSE : 2023-서울시-1111</p>
                <p className="footerTex">ADDRESS : 서울시 강남구</p>
                <p className="footerTex">CPO : 홍길동(gywksl30778@gmail.com)</p>
                <p className="footerTex">Copyright 리액트마켓.All rights reserved</p>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    display: flex;
    max-width: 1280px;
    width: 100%;
    justify-content: space-between;
    padding: 50px 0 20px;
    margin: 0 auto;
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        *{
            font-size: 12px;
            color:#999
        }
    }
`

export default Footer;