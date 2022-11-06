import React from 'react';

const DegreeProgressBar = ({progress}) => {
    const containerStyle = {
        height: 30,
        width: '100%',
        backgroundColor: '#C6D5D1',
        borderRadius: 40,
        margin: 0,
    }

    const fillerStyle = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#005A41',
        borderRadius: 40,
        textAlign: 'center'
    }

    const labelStyle = {
        padding: 10,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
                <span style={labelStyle}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default DegreeProgressBar;