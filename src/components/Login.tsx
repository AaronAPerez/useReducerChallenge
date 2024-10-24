import { useEffect, useReducer, useRef, useState } from "react";
import loginReducer from "../reducers/loginReducer";
import Johnny from "../assets/Johnny.gif";
import loginSound from "../assets/heres-johnny_1.mp3";


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    //   const [username, setUsername] = useState<string>(' Me ... a Mario!');
    const [username, dispatch] = useReducer(loginReducer, "Who");
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // handle audio playback for login 
    useEffect(() => {
        if (isLoggedIn && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                console.log("Audio playback failed:", error);
            });
        }
    }, [isLoggedIn]);

    // Handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
        dispatch({ type: "LOGIN", username: "" });
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        dispatch({ type: "LOGOUT" });
    };


    return (
        <div className="container mt-5">
            <h1 className="mb-4">User Authentication</h1>
            <audio ref={audioRef} src={loginSound} />

            {isLoggedIn ? (
                <div>
                    <h2>It is I! {username}....</h2>
                    <img src={Johnny} alt="Johnny" className="my-3" />
                    <br />
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            ) : (
                <div>
                    <h2>It is I: {username}!</h2>
                    <button className="btn btn-primary" onClick={handleLogin}>
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
