import{ useState } from 'react';
import {withApollo} from '../apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../graphql/get-launches';
import CardLaunch from '../components/CardLaunch';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import Pagination from '../components/Pagination';

const LaunchesContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState(12);

    
    const {loading, error, data} = useQuery(GET_LAUNCHES, {
        variables: { limit: 36 }
    });
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    else
    console.log(data)

    //Get current post
    const indexOfLastPost = currentPage * cardPerPage;
    const indexOfFirstPost = indexOfLastPost - cardPerPage;
    const currentCard = data.launchesPast.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <CardsContainer>
            {/* <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"> */}
                    {currentCard.map(launch => <CardLaunch key={launch.mission_name} launch={launch} className="mr" loading={loading}/>)}
                    
            {/* </Masonry> */}
            <Pagination 
                cardPerPage={cardPerPage} 
                totalCards={data.launchesPast.length} 
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </CardsContainer>
    )
}

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
    padding: 7vh 0;
`;


export default withApollo({ ssr: true })(LaunchesContainer);