import { useState } from "react";
import "../styles/MailCard.css";

export default function MailCard({ mail }) {
    // மெயில் முழுமையாக விரிவடைந்துள்ளதா இல்லையா என்பதைக் கண்காணிக்க state
    const [isExpanded, setIsExpanded] = useState(false);

    // மெயில் பாடியை கிளிக் செய்யும்போது நிலையை மாற்றும் ஃபங்க்ஷன்
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mail-card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
            <h3>{mail.subject}</h3>
            <p>From : {mail.sender}</p>
            <p>To : {mail.receiver}</p>
            
            {/* isExpanded உண்மையாக இருந்தால் முழு பாடியும், இல்லையெனில் CSS மூலம் சுருக்கப்பட்ட பாடியும் தெரியும் */}
            <p className={isExpanded ? "mail-body-full" : "mail-body-truncated"}>
                {mail.body}
            </p>
        </div>
    );
}
