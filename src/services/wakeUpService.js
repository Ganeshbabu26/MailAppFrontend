import axios from "axios";

export const wakeUpBackend = async () => {
    try {
        await axios.get(
            "https://mailappbackend-ck1y.onrender.com/"
        );
    }
    catch (error) {
        console.log(
            "Backend waking up..."
        );
    }
};