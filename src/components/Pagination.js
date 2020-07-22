import classNames from 'classnames';
import { Container, List, Links, Item } from '../styles/Pagination';
import styled from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowIosBackOutline }from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
const Pagination = ({ setCurrentPage, currentPage, cardPerPage, totalCards, paginate, classes, children, ...restProps }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        pageNumbers.push(i);
    }

    const totalPages = pageNumbers.length;

    const increment = (event) => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    const decrement = (event) => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage - 1)
        }
    }
    console.log(pageNumbers, totalPages)
    return (
        <Container>
            <Links 
                onClick={() => decrement(increment)}
                className={(currentPage == 1 ? 'hide' : 'show')}
            >
                <Prev />
            </Links>
            <List>
                {pageNumbers.map(number => (
                    <Item key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className={(currentPage == number ? 'big' : '')}>
                            {number}
                        </a>
                    </Item>
                ))}
            </List>
            <Links 
                onClick={() => increment(increment)}
                className={(currentPage < totalPages ? 'show' : 'hide')}
            >
                <Next />
            </Links>
        </Container>
    )
}

const Next = styled(ArrowIosForwardOutline)`
    color: white;
`;

const Prev = styled(ArrowIosBackOutline)`
    color: white;
`



Pagination.List = function PagerList({ classes, children, ...restProps}) {
    return (
        <List className={classNames('pager__list', classes)} {...restProps}>
            {children}
        </List>
    )
}

Pagination.Item = function PagerItem({ classes, children, ...restProps}) {
    return (
        <Item className={classNames('pager__item', classes)} {...restProps}>
            {children}
        </Item>
    )
}

Pagination.Links = function PagerLink({ classes, children, ...restProps}) {
    return (
        <Links className={classNames('pager__link', classes)} {...restProps}>
            {children}
        </Links>
    )
}

export default Pagination;