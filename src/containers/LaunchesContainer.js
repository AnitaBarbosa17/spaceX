import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../graphql/get-launches';
import { LaunchPast } from '../components/LaunchPast';


export function LaunchesContainer() {
    const {loading, error, data} = useQuery(GET_LAUNCHES, {
        variables: { limit: 10 }
    });
    

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    else
    console.log(data)
    return (
        <div className="container">
            {data.launchesPast.map(launch => <LaunchPast key={launch.mission_name} launch={launch} />)}
        </div>
    )
    
}