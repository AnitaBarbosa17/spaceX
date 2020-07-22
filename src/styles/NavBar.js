import styled from 'styled-components';

export const Container = styled.div`
    min-height: 70px;
    margin: 0 auto;
    width: 100%;
    padding: 0 10%;
    position: absolute;
    z-index: 9;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    list-style: none;
    padding: 30px 0;
    margin: 0;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 100px;
    @media (min-width: 768px) {
        max-width: 180px;
    }  
`;

export const Item = styled.li`
    display: flex;
    a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0.5rem 0;
        font-size: .9rem;
        letter-spacing: 1px;
        font-weight: 500;
    }
`;