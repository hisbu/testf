import React from 'react'
// import ClipLoader from 'react-spinners/ClipLoader'
// import ScaleLoader from 'react-spinners/ScaleLoader'
// import HashLoader from 'react-spinners/HashLoader'
// import BeatLoader from 'react-spinners/BeatLoader'
import RingLoader from 'react-spinners/RingLoader'
import BarLoader from 'react-spinners/BarLoader'


function Loading(props) {
    const style = {
        container: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }
    }

    switch (props.type) {
        case 'bar':
            return (
                <div style={style.container}>
                    <BarLoader css={{ display: 'block', margin: '0 auto' }} height={4} width={100} color={'#888'} loading={true} />
                </div>
            )
        default:
            return (
                <div style={style.container}>
                    <RingLoader css={{ display: 'block', margin: '0 auto' }} size={35} loading={true} />
                </div>
            )
    }

}

export default Loading
