import React from 'react'

const CourseCard = ({ title, price, isPurchased }) => {
    function handleBuyClick() {
        alert(`You have purchased ${title} for $${price}`);
    }

    function handleWatchClick() {
        alert(`Please watch ${title}`);
    }
    return (
        <div>
            <h2>{title}</h2>
            <p> ${price}</p>

            {isPurchased ? (
                <button onClick={handleWatchClick} >
                    Watch Course
                </button>

            ) : (
                <button onClick={handleBuyClick} >
                    Buy Course
                </button>

            )

            }

        </div>
    )
}

export default CourseCard