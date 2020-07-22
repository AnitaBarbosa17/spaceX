import Link from 'next/link';
import classNames from 'classnames';
import styled from 'styled-components';
import {Zap} from '@styled-icons/boxicons-solid/Zap'

const YellowZap = styled(Zap)`
    color: #FFEB3B;
`

const Container = styled.div`
    margin: 0 auto;
    width: calc(100% - 15%);
    padding: 30px 0;
    text-align: right;
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    p{
        color: white;
        padding-left: 10px;
    }
    svg{
        width: 20px;
        
    }
`;

const Footer = ({ classes, children, ...restProps }) => {
    return(
        <Container>
            <p>Ana Barbosa</p>
            <YellowZap />
        </Container>
    )
}

export default Footer;