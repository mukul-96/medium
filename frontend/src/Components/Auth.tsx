import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { SignupInput } from '@mukul96/medium-common';
import { BACKEND_URL } from '../config';
import { useState } from 'react';
import { ChangeEvent } from 'react';

type InputBoxType = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string ;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ id, label, type, placeholder, value, onChange }: InputBoxType) {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [signupInputs, setSignUpInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    const handleSubmit = async () => {
        try {
            const url = `${BACKEND_URL}/api/v1/users/${type === "signup" ? "signup" : "signin"}`;
            const response = await axios.post(url, signupInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center w-full">
            {
                type==="signin" && <div className="flex items-center justify-center mb-8">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" 
                  alt="Medium Image" 
                  className="w-full max-w-md "
                />
              </div>
            }
           {type==="signup" && 
            <div className="flex flex-col mb-6">
            <h1 className="font-extrabold text-5xl">Create an account</h1>
            <span className="text-slate-500 mt-3">
                Already have an account? <Link to="/" className="text-blue-500">Login</Link>
            </span>
        </div>}
            <div className="flex flex-col space-y-4 w-full max-w-md">
                <InputBox
                    id="username"
                    label="Username"
                    type="text"
                    placeholder="John@example.com"
                    value={signupInputs.username}
                    onChange={(e) => setSignUpInputs({ ...signupInputs, username: e.target.value })}
                />
                {type === "signup" &&
                    <InputBox
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={signupInputs.name}
                        onChange={(e) => setSignUpInputs({ ...signupInputs, name: e.target.value })}
                    />
                }
                <InputBox
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={signupInputs.password}
                    onChange={(e) => setSignUpInputs({ ...signupInputs, password: e.target.value })}
                />
            </div>
            {type === "signup" &&
                <div className="mt-6 w-full max-w-md">
                    <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleSubmit}>Sign up</button>
                </div>
            }
            {type === "signin" &&
                <div className="mt-6 w-full max-w-md ">
                    <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleSubmit}>Sign in</button>
                    <span className="text-slate-500 mt-3 flex justify-center">
                Don't have an account? <Link to="/signup" className="text-blue-500"> Create Now</Link>
            </span>
                </div>
            }
        
        </div>
    );
};
