import React from 'react'

const Items = ({ name, images, loading }) => {
    if (loading) {
        return <h2 style={{ color: 'white' }}>Loading...</h2>
    }
    return (
        <div className="card">
            <div className='card_item'>
                <img
                    src={images}
                    alt='images'
                    className='card_img'
                />
                <h4>Name Cocktail</h4>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Items
