import React from 'react';

// Card
export function LaunchPast({ launch }){
    return(
        <div className="launch max-w-sm rounded overflow-hidden shadow-lg">
            <div key={launch.id}>
                <img className="w-full" src={getImage(launch.links.flickr_images)} />
                <h1 className={"text-3xl " + (launch.launch_success ? 'success' : 'hidden')}>{launch.mission_name}</h1>
                <p>{launch.id}</p>
            </div>
        </div>
    )
}

const getImage = imgs => imgs[Math.floor(Math.random() * imgs.length)];