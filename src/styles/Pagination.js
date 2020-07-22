import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50px;
    margin: 3vh auto 0;
    display: flex;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    list-style: none;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 180px;
`;

export const Item = styled.li`
    display: flex;
    a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 .6rem;
        padding: 0.5rem 0;
        font-size: 1.1rem;
        letter-spacing: 1px;
        position: relative;
        transition: all 0.15s ease-in-out;
        &.big{
            font-weight: bold;
            &:after{
                content: '';
                width: 10px;
                height: 1px;
                background-color: white;
                position: absolute;
                left: 50%;
                bottom: 5px;
                transform: translateX(-47%);
            }
        }
        &:hover{
            transform: scale(.85);
        }
    }
`;

export const Links = styled.a`
    width: 50px;
    height: 100%;
    padding: 10px 0px;
    transition: all 0.15s ease-in-out;
    &:hover{
        transform: scale(.85);
    }
    &.hide{
        opacity: 0;
    }
    &.show{
        opacity: 1;
    }
    &:first-child{
        margin-right: 20px;
    }
    &:last-child{
        margin-left: 20px;
    }
`;