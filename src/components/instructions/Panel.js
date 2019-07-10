import React from 'react'

const Panel = () => {
    return (
        <div id="panel" className="card">
            <div className="card-body">
                <h5 className="card-title">Quick Start</h5>
                <ol >
                    <li>
                        Edit any value via double clicks
                    </li>
                    <li>
                        Hover over the forest plot too see the specific values in popups
                    </li>
                    <li>
                        As of right now, please input numbers in aOR
                    </li>
                    <li>
                        Hover over the headers of the dropdown columns to see the name in popups
                    </li>
                    <li>
                        Right click on cells (except for the plot cells) to see the menu that allows inserting rows, columns, etc.
                    </li>
                    <li>
                        Use this like an Excel. For instance, the arrow keys work in about the way way
                    </li>
                    <li>
                        After your changes, you can save the matrix and view it any time by uploading it
                    </li>
                </ol>
                <h5 className="card-title">Questions/Suggestions/Contributions</h5>
                <p className="card-text tab">
                    Please contact BU SAIL: <a href = "mailto: shreyap@bu.edu">shreyap@bu.edu</a> and <a href = "mailto: zackL@bu.edu">zackL@bu.edu</a>
                </p>
            </div>
        </div>
    );
}

export default Panel