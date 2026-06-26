import { useNavigate } from "react-router-dom";
import "../styles/MailCard.css";

export default function MailCard({ mail })
{
    const navigate = useNavigate();

    const formattedDate =
        new Intl.DateTimeFormat(
            "en-US",
            {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            }
        ).format(
            new Date(mail.sentTime)
        );

    const avatar =
        mail.sender
            ?.charAt(0)
            ?.toUpperCase();

    return (
        <div
            className="mail-card"
            onClick={() =>
                navigate(`/mail/${mail.id}`)
            }
        >
            <div className="avatar">
                {avatar}
            </div>

            <div className="mail-content">

                <div className="mail-top">

                    <h3 className="subject">
                        {mail.subject}
                    </h3>

                    <span className="date">
                        {formattedDate}
                    </span>

                </div>

                <div className="sender">
                    {mail.sender}
                </div>

                <div className="preview">
                    {mail.body}
                </div>

            </div>
        </div>
    );
}