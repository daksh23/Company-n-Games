import React, {useEffect, useState} from 'react'

function Color() {

    const [ColorArr,
        setColorArr] = useState('')

    useEffect(() => {

        fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&count=6")
            .then(res => res.json())
            .then((result) => {
                console.log(result.colors)
                // setColorArr(result.colors)
                for (let index = 0; index < result.colors.length; index++) {
                    setColorArr(result.colors[index]);

                }
                console.log(ColorArr)
            }, (error) => {
                console.log('err', error)
            })

    }, [])

    return (
        <div
            style={{
            width: '10%',   
            height: "auto%",
            background: 'lightgreen',
        }}>
            <div className='cc-container'>
            {[
                1,
                2,
                3,
                4,
                5,
                6,7,8,9
            ].map((c, index) => (
                <div className='cc-item'>
                        {index}
                </div>
            ))
}
            </div>
        </div>
    )
}

export default Color