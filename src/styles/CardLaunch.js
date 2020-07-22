import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70vw;
    padding: 0 .8rem;
    margin: 1rem 0;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    @media (min-width: 768px) {
        width: 33.333%;
        height: 24vw;
        &:hover{
            .card__more{
                opacity: 1;
                div{
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
    @media(min-width: 1024px) {
        width: 25%;
    }
    
    .wrapper{
        display: flex;
        flex-direction: column;
        min-width: 0;
        background-color: black;
        position: relative;
        height: 100%;
    }
    
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgb(16 16 27);
    background: linear-gradient(0deg,rgb(16 16 27) 0%,rgba(255,255,255,0) 100%);
    
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 5px;
    color: white;
    span{
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 10px;
        font-weight: 400;
        display: block;
        /* margin-bottom: 10px; */
    }
    &.success{
        /* color: greenyellow; */
        &:before{
            content: 'Successful mission';
            font-size: 10px;
            display: block;
            margin-bottom: 5px;
            text-transform: uppercase;
            color: greenyellow;
        }
    }

    &.fail{
        &:before{
            content: 'Not successful mission';
            font-size: 10px;
            display: block;
            margin-bottom: 5px;
            text-transform: uppercase;
            color: red;
        }
    }
`;

export const Text = styled.p`
    line-height: 20px;
    color: #fff;
    font-size: .9rem;
    font-weight: 300;
    .font-bold{
        font-weight: 600;
    }
`;

export const Image = styled.img`
    width: auto;
    min-height: 100%;
    object-fit: cover;
`;

export const LinkTo = styled.a`
    cursor: pointer;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #000;
    background-color: rgba(255,255,255,1);
    display: block;
    font-weight: bold;
    text-align: center;
    user-select: none;
    padding: 0.5rem 0.5rem;
    transition: all 0.15s ease-in-out;
    z-index: 9;
    &:hover {
        transform: scale(1.1);
    }
    &.hide{
        display: none;
    }
`;

export const More = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    position: absolute;
    right: 10px;
    top: 10px;
    @media (min-width: 768px) {
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,.7);
        transition: all 0.1s ease-in-out;
        overflow: hidden;
        padding: 20px;
        right: 0;
        top: 0;
        div{
            transition: all 0.1s ease-in-out;
            transform: scale(.3);
            transition-delay: .08s;
            span{
                font-size: 10px;
            }
        }
        .card__title{
            color: #fff;
            text-align: center;
            font-size: 1.4rem;
            line-height: 1.2em;
            margin-bottom: 30px;
            display: block;
        }
    }

    div{
        transition: all 0.1s ease-in-out;
        transition-delay: .08s;
        span{
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 9px;
            font-weight: 400;
            display: block;
            margin-bottom: 10px;
            text-align: center;
            color: white;
            margin-top: 10px;
            &.hide{
                display: none;
            }
        }
    }
    .card__title{
        display: none;
    }
    
`;