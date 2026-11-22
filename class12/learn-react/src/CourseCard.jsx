import React from 'react'

const CourseCard = ({ title, price, isPurchased }) => {
    function handleBuyClick() {
        alert(`You have purchased ${title} for $${price}`);
    }

    function handleWatchClick() {
        alert(`Please watch ${title}`);
    }
    return (
        <div className=' m-4 w-fit p-10 rounded-md bg-slate-100'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-green-500 tex-xs font-semibold'> ${price}</p>

            {isPurchased ? (
                <button className=' text-xs font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer my-2 p-2 rounded-xl' onClick={handleWatchClick} >
                    Watch Course
                </button>

            ) : (
                <button className=' text-xs font-semibold text-white bg-green-400 hover:bg-green-500 cursor-pointer my-2 p-2 rounded-xl' onClick={handleBuyClick} >
                    Buy Course
                </button>

            )

            }

        </div>
    )
}

export default CourseCard