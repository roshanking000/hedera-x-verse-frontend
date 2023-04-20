import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home_hero.css'
import clsx from 'clsx'

const HowItWorks = () => {
  const [step, setStep] = useState(1);

  const borrowersList = [
    {
      id: 1,
      description: 'You will be able to list your NFT with loan agreement to your specifications, a lender can come and fund a loan',
    },
    {
      id: 2,
      description: 'Loan agreements have option for negotiation with the variables mentioned above',
    },
    {
      id: 3,
      description: 'Once a loan is funded, the NFT used as collateral will be sent to an escrow account where it will remain until loan is repaid with interest or borrower defaults',
    },
    {
      id: 4,
      description: 'Borrower repays the loan and get his NFT back / Borrower defaults on the loan and lender keeps the NFT',
    },
  ]

  return (
    <section id='howtoworks' className='!overflow-y-hidden pt-48 flex justify-center bg-[#1E1E1E] text-white'>
      <div className='w-90 relative z-20 text-center flex flex-col items-center gap-7'>
        <h2 className='text-5xl font-bold font-Lato max-w-[80%] leading-[53px]'>How loans will work</h2>
        <p className='max-w-[80%] text-center font-normal'>
          On LoanSharks you will be able to be the borrower or the lender.
        </p>
        <div className='font-Lato w-full' data-rttabs='true'>
          <div
            className='w-full'
            role='tabpanel'
            id='panel:R229:0'
            aria-labelledby='tab:R229:0'
          >
            <div className='relative w-full flex flex-col lg:flex-row items-center'>
              <ol className='flex flex-col font-Lato gap-y-10 my-5 relative overflow-hidden '>
                {borrowersList.map((item, i) => {
                  return (
                    <li
                      key={item.id}
                    >
                      <div className='flex flex-row justify-start w-[80vw] md:w-1/2 text-left py-1 peer relative px-5'>
                        <div className='max-w-[50%] mt-0 mb-2'>
                          <h1 className='relative text-[36px] text-primary font-bold font-Lato px-5'>
                            {i + 1}
                          </h1>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <p className='font-Roboto text-[18px]'>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
              <div className='my-10 md:absolute max-w-[90%] md:max-w-[50%] flex justify-center items-center md:min-h-[600px] md:right-0  gap-5'>
                <img
                  alt=''
                  loading='lazy'
                  src='/images/LoanSharks-how-does-it-work_V.png'
                />
              </div>
              <div className='hidden self-start px-24 my-10 rounded'>
                <a
                  className='bg-[#EBD259] font-bold text-black py-4 px-10 rounded'
                  href='/how-it-works/'
                >
                  More about borrowing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
