import { useEffect, useState } from "react";
import { getTrash } from "../../services/mailService";
import MailCard from "../../components/MailCard";
import { useNavigate } from "react-router-dom";
import "../../styles/MailCard.css"

export default function SentPage()
{
    const [mails, setMails] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>
    {

        getTrash()
            .then(response =>
            {
                setMails(response.data);
            })
            .catch(error =>
            {
                console.log(error);
            });

    }, []);

    return (
        <div className="page-container">
            <p>Trash</p>

            {
                mails.length === 0
                ?
                    <p>No mails found</p>
                :
                    mails.map(mail => (
                        <MailCard
                            key={mail.id}
                            mail={mail}
                        />
                    ))
            }
        </div>
    );
}