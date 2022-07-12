import { FunctionalComponent, h } from 'preact';
import styled from 'styled-components';

const Head = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 56px;
    padding: 0;
    background: #673ab7;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 50;
`;
const H1 = styled.h1`
    float: left;
    margin: 0;
    padding: 0 15px;
    font-size: 24px;
    line-height: 56px;
    font-weight: 400;
    color: #fff;
`;

const Header: FunctionalComponent = () => {
    return (
        <Head>
            <H1>Preact App</H1>
        </Head>
    );
};

export default Header;
