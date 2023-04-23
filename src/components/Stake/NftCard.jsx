import React, { useState } from 'react'

const NftCard = ({
    nftInfo,
    type,
    onClickUnStake,
    onClickStake,
}) => {

    return (
        <>
            <div className="min-w-[170px] rounded-lg shadow grayscale blur-[1px] hover:blur-none hover:grayscale-0">
                <img
                    className="rounded-lg"
                    loading="lazy"
                    src={nftInfo.imageUrl}
                />
                <div className="flex flex-col p-1">
                    <h5 className="text-center mb-2 text-xl lg:text-2xl text-gray-200"
                        style={{
                            fontFamily: 'Poppins Bold',
                        }}
                    >{nftInfo.name}</h5>
                    <div className='flex flex-row items-center justify-between bg-slate-800 rounded-md'>
                        <div className='flex flex-col text-white text-center m-2'>
                            <h5 className="text-sm xl:text-xl"
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                            >Daily Reward</h5>
                            <div className='flex flex-row items-center'>
                                <img className='w-[24px] h-[24px] rounded-full mr-2' alt="..." src="https://wallet.hashpack.app/assets/favicon/favicon.ico" />
                                <h5 className="text-sm xl:text-xl"
                                    style={{
                                        fontFamily: 'Poppins Bold',
                                    }}
                                >1 ℏ</h5>
                            </div>
                        </div>
                        {
                            type === 'unstaked' &&
                            <button type="button" className='bottom-3 w-20 h-8 inline-flex items-center justify-center py-2 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.95] mr-2'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickStake(nftInfo);
                                }}
                            >
                                Stake
                            </button>
                        }
                        {
                            type === 'staked' &&
                            <button type="button" className='bottom-3 w-20 inline-flex items-center justify-center py-2 text-sm text-center text-black bg-[#FFDD41] rounded-full hover:scale-[0.95]'
                                style={{
                                    fontFamily: 'Poppins Bold',
                                }}
                                onClick={() => {
                                    onClickUnStake(nftInfo);
                                }}
                            >
                                UnStake
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftCard
