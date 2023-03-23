import React from 'react'

export default function HeaderAlert() {
    return (
        <div className="header-alert" data-alert="Alerts">
            <div className="marquee">
                <ul>
                    <li>Please, provide your Week 2 scores</li>
                    <li>Please, provide your Week 3 scores</li>
                    <li>Please, provide your Week 4 scores</li>
                    <li>Please, provide your week 6 scores</li>
                </ul>
                <input
                    type="hidden"
                    id="hdnweekid"
                    defaultValue="{92BE2B28-5FC9-49DA-A550-623BD02EB16D}"
                />
            </div>
            {/*marquee end */}
        </div>

    )
}
