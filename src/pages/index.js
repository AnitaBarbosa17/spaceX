import {withApollo} from '../apollo';
import LaunchesContainer from '../containers/LaunchesContainer';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    color: white;
    z-index: 2;
    position: relative;
    padding: 0 10% 12rem;
    @media (min-width: 768px) {
        font-size: 8rem;
    }
`;

const SubTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 auto;
    color: white;
    z-index: 2;
    position: relative;
    padding: 10rem 10% 20px;
    @media (min-width: 768px) {
        font-size: 3rem;
        padding: 10rem 10% 0;
    }
`;

const Header = styled.header`
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    overflow: hidden;
    position: relative;
    @media (min-width: 768px) {
        height: 60vh;
    }
    @media (min-width: 1024px) {
        height: calc(100vh - 50px);
    }
`;

const Image = styled.img`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 70%;
    transform: translateX(-50%);
    z-index: 0;
    @media (min-width: 768px) {
        height: 80vh;
    }
    @media (min-width: 1024px) {
        height: 100vh;
        min-width: 100%;
        left: 50%;
    }
`;

const Index = () => {
    return (
        
        <Layout>
            <Header>
                <SubTitle>Check the</SubTitle>
                <Title>Past Launches</Title>
                <Image src="/images/home_moon.webp" alt="Logo"/> 
            </Header>
            <LaunchesContainer />
        </Layout>
        
    )
}



// export default Index;
export default withApollo({ ssr: true })(Index);