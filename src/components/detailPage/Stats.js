import React from 'react'
import getColor from 'number-to-color'

function Stats({ stats }) {


    return (
        <div className='statsList'>
            {
                stats.map(item => {
                    const { base_stat } = item
                    const { name } = item.stat

                    const { r, g, b } = getColor(base_stat, 450)

                    const bar = {
                        width: `${(base_stat / 255) * 100}%`,
                        background: `rgb(${r},${g},${b})`
                    }

                    return (
                        <div className='stat' key={name} >
                            <p className='stat__name'>{name}</p>
                            <div
                                className='stat__value'
                                style={bar}
                                title={base_stat}
                            ></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stats