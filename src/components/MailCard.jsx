import { useNavigate } from "react-router-dom";
import "../styles/MailCard.css";

export default function MailCard({ mail })
{
    const navigate = useNavigate();

    const dateObj = new Date(mail.sentTime);

    const formattedDateTime =
        new Intl.DateTimeFormat(
            "en-US",
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        ).format(dateObj);

    return (
        <div
            className="mail-card"
            onClick={() =>
                navigate(`/mail/${mail.id}`)
            }
            style={{cursor:"pointer"}}
        >
            <div className="headline">
                <h3>{mail.subject}</h3>

                <div className="datetime">
                    <p>{formattedDateTime}</p>
                </div>
            </div>

            <p>
                From : {mail.sender}
            </p>

            <p>
                To : {mail.receiver}
            </p>

            <p className="mail-body-truncated">
                {mail.body}
            </p>
        </div>
    );
}