import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default () => (
    <Carousel autoPlay infiniteLoop>
        <Image src={bogliasco} />
        <Image src={countyClare} />
        <Image src={craterRock} />
        <Image src={giauPass} />
    </Carousel>
);
