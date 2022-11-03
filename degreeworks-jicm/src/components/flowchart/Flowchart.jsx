import React from 'react';
import './Flowchart.css';
import OverviewFlow from './graph/App';

function Flowchart () {
    return (
        <section className="background">
            <section>
                <OverviewFlow/>
            </section>
        </section>
    )
}

export default Flowchart;