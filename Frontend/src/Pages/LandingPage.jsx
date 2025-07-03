import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const LandinPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.defaults.withCredentials = true;
        const fetchPosts = async() =>{
            try{
                const res = await axios.get("https://small-task-api.vercel.app/admin/get-post");
                setPosts(res.data.data);
            }catch(err){
                console.log("Error fetching posts"+ err);
            }
        }

        fetchPosts();
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {posts.map((item, id) => (
                    <div
                        key={id}
                        className="border-2 rounded-lg shadow-md bg-white flex flex-col items-center p-6 transition-transform hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-40 h-40 object-cover rounded mb-4 border"
                        />
                        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                        <p className="text-gray-700 text-center">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandinPage;