import React from 'react'
import { Hero } from 'react-daisyui'
import {Badge} from 'react-daisyui'

const WhyChUs = () => {
  return (
    <div className='flex flex-col items-center justify-center m-40'>
            <Badge className='px-4 py-3 font-semibold text-gray-400 bg-cyan-100 border-none'>Why Choose Us</Badge>
            <Hero>
                <Hero.Overlay className="bg-opacity-0" />
                <Hero.Content className="text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Why Choose OCMS</h1>
                    <p className="py-6 text-gray-400">
                        Stats
                    </p>
                    </div>
                </Hero.Content>
            </Hero>
            <div>
            <div className="stats shadow">
              
              <div className="stat place-items-center">
                <div className="stat-title">Total Learner</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">From January 1st to February 1st</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">Total Free Resources</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Registered Enrolls</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
              
            </div>
            </div>
    </div>
  )
}

export default WhyChUs