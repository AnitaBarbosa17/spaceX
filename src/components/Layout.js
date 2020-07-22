import Head from 'next/head';
import Navbar from './NavBar';
import Footer from './Footer';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
`

const Body = styled.div`
    background-color: black;
    font-family: 'Poppins', sans-serif;
    /* padding: 7vh 0; */
    margin: 0 auto;
`
const Layout = (props) => (
    <Body>
        <GlobalStyle />
        <Head>
            <title>SpaceX</title>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
            
            <Navbar/>
            {props.children}
            <Footer />
    </Body>
);

export default Layout;