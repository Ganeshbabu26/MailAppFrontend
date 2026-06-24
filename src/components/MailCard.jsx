import { useState } from "react";
import "../styles/MailCard.css";

export default function MailCard({ mail }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const isoString = mail.sentTime;
    const dateObj = new Date(isoString);

    // Formats both date and time nicely
    const formattedDateTime = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(dateObj);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mail-card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
            <div className="headline">
                <h3>{mail.subject}</h3>
                <div className="datetime">
                    <p>{formattedDateTime}</p>
                </div>
            </div>
            <p>From : {mail.sender}</p>
            <p>To : {mail.receiver}</p>
            
            <p className={isExpanded ? "mail-body-full" : "mail-body-truncated"}>
                {mail.body}
            </p>
        </div>
    );
}
