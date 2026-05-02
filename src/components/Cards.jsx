import React, { useEffect } from 'react'
import './Cards.css';
import CardItem from './CardItem';
import testing from '../assets/logoandvideos/Testing.jpg'
import devops from '../assets/logoandvideos/Devops.jpg'
import development from '../assets/logoandvideos/Develoment.jpg'
import projectMang from '../assets/logoandvideos/Management.jpg'
import Ai from '../assets/logoandvideos/AI.jpg'

import dataEngineering from '../assets/logoandvideos/DataEngineering.jpg'

function Cards() {
  useEffect(() => {
    const images = [testing, devops, development, projectMang, Ai, dataEngineering];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <div className='cards' id='services'>
      <h1>Check out our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={testing}
              text='Ensure no bugs in your application'
              label='Software Testing'
              path='/services'
            />
            <CardItem
              src={devops}
              text='Quality Delivery'
              label='Devops'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={development}
              text='Front-End & Back-End Development'
              label='Software Development'
              path='/services'
            />
            <CardItem
              src={projectMang}
              text='Add agile and Quality Management to your Software LifeCycle'
              label='Project Management'
              path='/services'
            />
            <CardItem
              src={Ai}
              text='Ride through the Innovative Transformation'
              label='Artificial Intelligence'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={dataEngineering}
              text='Unlock the power of your data — we design and build scalable data pipelines, cloud data warehouses, and real-time streaming architectures that turn raw data into actionable intelligence.'
              label='Data Engineering'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards