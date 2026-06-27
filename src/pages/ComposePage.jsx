import { useState, useEffect } from "react";
import { sendMail } from "../services/mailService";
import { checkUserExists } from "../services/userService";
import { useNavigate } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import {
    FaCheckCircle,
    FaTimesCircle,
    FaSpinner
} from "react-icons/fa";

import "../styles/ComposePage.css";

export default function ComposePage() {

    const navigate = useNavigate();

    const sender =
        localStorage.getItem("email") || "";

    const [receiver, setReceiver] =
        useState("");

    const [subject, setSubject] =
        useState("");

    const [body, setBody] =
        useState("");

    const [sending, setSending] =
        useState(false);

    const [checking, setChecking] =
        useState(false);

    const [receiverValid,
        setReceiverValid] =
        useState(null);

    const [showToast,
        setShowToast] =
        useState(false);

    useEffect(() => {

        if(receiver.trim()==="")
        {
            setReceiverValid(null);
            return;
        }

        const timer =
            setTimeout(async () => {

                try
                {
                    setChecking(true);

                    const response =
                        await checkUserExists(
                            receiver
                        );

                    setReceiverValid(
                        response.data.exists
                    );
                }
                catch(error)
                {
                    console.log(error);
                    setReceiverValid(false);
                }
                finally
                {
                    setChecking(false);
                }

            },500);

        return () =>
            clearTimeout(timer);

    },[receiver]);

    async function handleSubmit(e)
    {
        e.preventDefault();

        if(sending)
            return;

        if(receiverValid===false)
        {
            return;
        }

        try
        {
            setSending(true);

            await sendMail({
                receiver,
                subject,
                body
            });

            setReceiver("");
            setSubject("");
            setBody("");

            setShowToast(true);

            setTimeout(()=>{
                setShowToast(false);
            },3000);
        }
        catch(error)
        {
            console.log(error);
        }
        finally
        {
            setSending(false);
        }
    }

    return (
        <>
            {showToast &&
                <div className="success-toast">
                    ✓ Mail sent successfully
                </div>
            }

            <div className="compose-container">

                <IoArrowBack
                    className="leftarrow-icon"
                    size={28}
                    onClick={() =>
                        navigate(-1)
                    }
                />

                <h2>
                    Compose Mail
                </h2>

                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        type="email"
                        value={sender}
                        readOnly
                        className="readonly-input"
                    />

                    <div className="receiver-wrapper">

                        <input
                            type="email"
                            placeholder="Receiver"
                            value={receiver}
                            onChange={(e)=>
                                setReceiver(
                                    e.target.value
                                )
                            }
                            required
                        />

                        {
                            checking &&
                            <FaSpinner
                                className="loading"
                            />
                        }

                        {
                            !checking &&
                            receiverValid===true &&
                            <FaCheckCircle
                                className="valid"
                            />
                        }

                        {
                            !checking &&
                            receiverValid===false &&
                            <FaTimesCircle
                                className="invalid"
                            />
                        }

                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e)=>
                            setSubject(
                                e.target.value
                            )
                        }
                    />

                    <textarea
                        rows="10"
                        placeholder="Write your message..."
                        value={body}
                        onChange={(e)=>
                            setBody(
                                e.target.value
                            )
                        }
                    />

                    <button
                        type="submit"
                        disabled={
                            sending ||
                            receiverValid===false
                        }
                    >
                        {
                            sending
                            ? "Sending..."
                            : "Send Mail"
                        }
                    </button>

                </form>

            </div>
        </>
    );
}