import React, {useState} from 'react';
import Signup from "@/pages/Auth/Signup.jsx";
import Login from "@/pages/Auth/Login.jsx";
import {Button} from "@/components/ui/button.jsx";
import "./Auth.css";

const Auth = () => {

    const [active, setActive] = useState(true);

    return (
        <div className="loginContainer">
            <div className="box h-[30rem] w-[25rem]">
                <div className="loginBox w-full px-10 space-y-5">
                    {active ? <Signup/> : <Login/>}
                    <div>
                        <span>Already have Account?</span>
                        <Button
                            variant="ghost"
                            onClick={() => setActive(!active)}>
                            {active?"Sign-In":"Sign-Up"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth