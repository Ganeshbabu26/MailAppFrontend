import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/AuthService";
import "../styles/auth.css";
import { IoArrowBack } from "react-icons/io5";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response =
                await registerUser({
                    email,
                    password
                });

            alert(
                response.data ||
                "Registration successful"
            );

            // clear fields
            setEmail("");
            setPassword("");

            // go to login page
            navigate("/login");

        }
        catch (error) {

            console.error(error);

            alert(
                error.response?.data ||
                error.message ||
                "Registration failed"
            );
        }
        finally {

            setLoading(false);
        }
    };

    return (
        <div className="auth-wrapper">

            <IoArrowBack
                onClick={() => navigate("/")}
                className="leftarrow-icon"
                size={28}
            />

            <div className="auth-container">

                <div className="auth-header">
                    <h1 className="auth-title">
                        Create account
                    </h1>

                    <p className="auth-subtitle">
                        Enter your details to get started
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="auth-form"
                >

                    <div className="input-group">

                        <p className="mailLabel">
                            Email
                        </p>

                        <input
                            type="email"
                            className="auth-input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="input-group">

                        <input
                            type="password"
                            className="auth-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={loading}
                    >
                        {
                            loading
                                ? "Registering..."
                                : "Register"
                        }
                    </button>

                </form>

            </div>

        </div>
    );
}