import gql from 'graphql-tag';

export const GET_LAUNCHES = gql `
    query launchesPast($limit: Int){
        launchesPast(limit: $limit){ 
            mission_name
            launch_date_local
            links {
                wikipedia
                flickr_images
            }
            launch_date_utc
            launch_success
            launch_year
            id
        }
        company {
            name
            links {
                elon_twitter
                twitter
                website
                flickr
            }
            founder
            summary
        }
    }
`