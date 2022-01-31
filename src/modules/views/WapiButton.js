import * as React from 'react';
import { Waitlist } from 'waitlistapi';
import WapiButtonStyling from './WapiButtonStyling.css'

export default function WapiButton() {
    return (
        <div style={WapiButtonStyling}>
            <Waitlist api_key="Q3SLPY"
            waitlist_link="https://www.onsiteplanning.com/waitlist"
            joinWaitlistHeading=" "
            checkStatusHeading=" "
            checkStatusButton=" "
            switchToCheckStatusLabel=" "
            switchToCheckStatusLink=" "
            switchToJoinWaitlistLabel=" "
            switchToJoinWaitlistLink=" "
            />
        </div>
    )
}