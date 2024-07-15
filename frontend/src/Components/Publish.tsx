
import axios from "axios";
import { Navbar } from "./Navbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const getCurrentDate = (): string => {
        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${month}/${day}/${year}`;
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        const currentDate = getCurrentDate();
        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                    title: title,
                    content: description,
                    date: currentDate
                },
                {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : ""
                    }
                }
            );
            console.log(response)
            
            const blogId = response.data.id;
            
            if (blogId) {
                navigate(`/${blogId}`);
            } else {
                console.error("Error: Received undefined for blog ID");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex justify-center pt-8">
                <div className=" w-full max-w-screen-lg">
                    <div>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Title"
                        />
                    </div>
                    <div className="mt-8">
                        <TextArea onChange={(e) => setDescription(e.target.value)}></TextArea>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
                        >
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function TextArea({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div>
            <div className="w-full mb-4   rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-b-lg ">
                    <label htmlFor="editor" className="sr-only">
                        Publish post
                    </label>
                    <textarea
                        onChange={onChange}
                        id="editor"
                        rows={8}
                        className="p-4 block w-full text-sm text-gray-800 bg-white border-0 focus:ring-0  dark:placeholder-gray-400"
                        placeholder="Write an article..."
                        required
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
