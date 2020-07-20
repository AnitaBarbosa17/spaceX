import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../graphql/get-launches';
import { LaunchPast } from '../components/LaunchPast';


export function LaunchesContainer() {
    const {loading, error, data} = useQuery(GET_LAUNCHES, {
        variables: { limit: 12 }
    });
    

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    else
    console.log(data)
    return (
        
            < div className = "container mx-auto px-10">
                < div className = "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.launchesPast.map(launch => <LaunchPast key={launch.mission_name} launch={launch} />)}
                </div>
            </div>
    )
    
}