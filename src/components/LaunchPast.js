import React from 'react';
import Moment from "react-moment";
import "moment-timezone";

// Moment.globalTimezone = "America/Mexico_City";
// Card
export function LaunchPast({ launch }){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div key={launch.id}>
                <img className="w-full" src={getImage(launch.links.flickr_images)} alt={launch.mission_name}/>
                <div className="px-6 py-4">
                    <h1 className={"font-bold text-xl mb-2 " + (launch.launch_success ? 'success' : 'hidden')}>{launch.mission_name}</h1>
                    <p><span className="font-bold">Fecha:</span> <Moment format="D MMM YYYY" withTitle tz="America/Mexico_City">{launch.launch_date_utc}</Moment></p>
                    <p><span className="font-bold">Hora:</span> <Moment format="hh:mm a" tz="America/Mexico_City">{launch.launch_date_utc}</Moment></p>

                    
                    <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">More Info</a> 
                </div>
                
            </div>
        </div>
    )
}
const getImage = imgs => imgs[Math.floor(Math.random() * imgs.length)];