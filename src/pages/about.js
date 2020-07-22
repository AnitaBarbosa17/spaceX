import {withApollo} from '../apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../graphql/get-launches';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    color: white;
    z-index: 2;
    position: relative;
    padding: 0 8% 12rem;
    @media (min-width: 768px) {
        font-size: 8rem;
    }
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin: 0 auto;
    color: white;
    z-index: 2;
    position: relative;
    padding: 10rem 8% 0;
    z-index: 3;
    @media (min-width: 768px) {
        font-size: 3rem;
        padding: 10rem 8% 0;
    }
`;

const Text = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4em;
    margin: 0 0 0 auto;
    color: black;
    z-index: 2;
    position: relative;
    z-index: 3;
    @media (min-width: 768px) {
        font-size: 1.5rem;
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
    &:before{
        content: '';
        width: 100%;
        height:100%;
        background: rgba(0,0,0,0.15);
        top: 0;
        left: 0;
        position: absolute;
        z-index: 1;
    }
`;

const Image = styled.img`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    @media (min-width: 768px) {
        height: 80vh;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px) {
        background: white;
    }
    div{
        &:first-child{
            height: 100%;
            overflow: hidden;
            position: relative;
            order: 2;
            @media (min-width: 768px) {
                width: 40%;
                height: 60vh;
                order: 1;
            }
            img{
                width: 100%;
                @media (min-width: 768px) {
                    left: -60%;
                    height: 100%;
                    width: auto;
                    position: absolute;
                }
                
            }
        }
        &:last-child{
            padding: 7vh 8%;
            width: 100%;
            order: 1;
            background: white;
            @media (min-width: 768px) {
                padding: 7vh 8% 0 4%;
                width: 60%;
                order: 2;
                background: transparent;
            }
            p{
                margin-top: 3vh;
                font-size: 1rem;
                text-align: right;
                @media (min-width: 768px) {
                    font-size: 1.15rem;
                }
            }
            blockquote{
                margin-top: 3vh;
                text-align: right;
                line-height: 1.4em;
                width: 80%;
                margin-left: auto;
                @media (min-width: 768px) {
                    width: 75%;
                }
            }
        }
    }
    img{
        width: 100%;
    }
`;


const About = () => {
    const {loading, error, data} = useQuery(GET_LAUNCHES, {
        variables: { limit: 12 }
    });

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    else
    console.log(data)
    return (
        <Layout>
            <Header>
                <SubTitle>About</SubTitle>
                <Title>{data.company.name}</Title>
                <Image src="/images/about.jpg" alt="Logo"/> 
            </Header>
            <Container>
                <div>
                    <img src="/images/musk.jpg" alt="Logo"/> 
                </div>
                <div>
                    <Text>
                        {data.company.summary}
                    </Text>
                    <blockquote>
                        <p>“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”</p>
                    </blockquote>

                    <p>— {data.company.founder}</p>

                </div>
            </Container>
        </Layout>
        
    )
}

// export default About;
export default withApollo({ ssr: true })(About);