import { FunctionalComponent, h } from 'preact';
import styled from 'styled-components';

const Head = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 5rem;
    padding: 0;
    background: var(--primary-color, tomato);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 50;
`;
const H1 = styled.h1`
    margin: 0;
    padding: 0 15px;
    font-size: 2.5rem;
    line-height: 5rem;
    font-weight: 400;
    color: #fff;
    margin: auto;
    width: 25rem;
    text-align: center;
`;

const Header: FunctionalComponent = () => {
    return (
        <Head>
            <H1>Formatting</H1>
        </Head>
    );
};

export default Header;
