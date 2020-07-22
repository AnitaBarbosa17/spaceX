import Moment from "react-moment";
import "moment-timezone";
import {withApollo} from '../apollo';
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, LinkTo, More } from '../styles/CardLaunch';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/remix-fill/Rocket';


// Card
const CardLaunch = ({ launch, loading, classes, children, ...restProps }) => {
    const getImage = imgs => imgs[Math.floor(Math.random() * imgs.length)];

    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <Container className={classNames('card', classes)} {...restProps}>
            <div className="wrapper">
                <CardLaunch.Image src={getImage(launch.links.flickr_images)} alt={launch.mission_name}/> 

                <CardLaunch.Body>
                    <CardLaunch.Title className={(launch.launch_success ? 'success' : 'fail')}>{launch.mission_name}</CardLaunch.Title>
                    <CardLaunch.Text>
                        <span className="font-bold">Date: </span> 
                        <Moment format="D MMM YYYY" withTitle tz="America/Mexico_City">{launch.launch_date_utc}</Moment>
                    </CardLaunch.Text>
                    <CardLaunch.Text>
                        <span className="font-bold">Time: </span> 
                        <Moment format="hh:mm a" tz="America/Mexico_City">{launch.launch_date_utc}</Moment>
                    </CardLaunch.Text>

                </CardLaunch.Body>

                <CardLaunch.More>
                    <div>
                        <CardLaunch.Title>
                            <span>Mission Name</span>
                            {launch.mission_name}</CardLaunch.Title>
                        <CardLaunch.LinkTo href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                            <MoreRocket />
                            
                        </CardLaunch.LinkTo> 
                        <span>More Info</span>
                    </div>
                </CardLaunch.More>
            </div>
        </Container>
    )
}

const MoreRocket = styled(Rocket)`
    color: black;
`

CardLaunch.Body = function CardBody({ classes, children, ...restProps}) {
    return (
        <Body className={classNames('card__body', classes)} {...restProps}>
            {children}
        </Body>
    )
}

CardLaunch.Title = function CardTitle({ classes, children, ...restProps}) {
    return (
        <Title className={classNames('card__title', classes)} {...restProps}>
            {children}
        </Title>
    )
}

CardLaunch.Text = function CardText({ classes, children, ...restProps}) {
    return (
        <Text className={classNames('card__text', classes)} {...restProps}>
            {children}
        </Text>
    )
}

CardLaunch.Image = function CardImage({ src, alt, classes, ...restProps}) {
    return (
        <Image 
        src={src}
        alt={alt}
        className={classNames('card__image'), classes}
        {...restProps}
        />
    )
}
    
CardLaunch.LinkTo = function CardLink({ link, classes, children, ...restProps}) {
    return (
        <LinkTo href={link} className={classNames('card__link', classes)} {...restProps}>
            {children}
        </LinkTo>
    )
}

CardLaunch.More = function CardMore({ classes, children, ...restProps}) {
    return (
        <More className={classNames('card__more', classes)} {...restProps}>
            {children}
        </More>
    )
}
    
// export default CardLaunch;
export default withApollo({ ssr: true })(CardLaunch);