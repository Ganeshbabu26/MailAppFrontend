import { useState } from "react";
import { sendMail } from "../services/mailService";
import "../styles/ComposePage.css";
import { useNavigate } from "react-router-dom";

// Imported the clean back arrow icon
import { IoArrowBack } from "react-icons/io5";

function ComposePage()
{
    const [receiver, setReceiver] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const navigate = useNavigate(); 

    const sender = localStorage.getItem("email") || "";

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            await sendMail({
                sender,
                receiver,
                subject,
                body
            });

            alert("Mail sent successfully");

            setReceiver("");
            setSubject("");
            setBody("");
        }
        catch(error)
        {
            console.log(error);
            alert("Failed");
        }
    }

    return (
        <div className="compose-container">
            {/* Swapped the <img> for the React Icon component */}
            <IoArrowBack 
                onClick={() => navigate(-1)}
                className="leftarrow-icon" 
                size={28}
            />
            <h2>Compose Mail</h2>

            <form onSubmit={handleSubmit}>

                {/* readOnly சேர்க்கப்பட்டுள்ளது, இதனால் பயனர் இதை மாற்ற முடியாது */}
                <input
                    type="email"
                    placeholder="From"
                    value={sender} you
                    readOnly 
                    className="readonly-input" 
                />
                
                <input
                    type="email"
                    placeholder="To"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    rows="10"
                    placeholder="Write your message..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button type="submit">
                    Send
                </button>

            </form>

        </div>
    );
}

export default ComposePage;