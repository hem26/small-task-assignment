import { useState } from "react"
import Header from "../components/Header";
import axios from "axios";
const Admin = () =>{
    const [form, setForm] = useState({
        title: "",
        content: "",
        image: null
    })

    const handleChange = (e) =>{
        const { name, value, files } = e.target;
        if(name == "image"){
            setForm({...form, image:files[0]})
        }else{
            setForm({...form, [name]: value})
        }
    }
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        if(form.image) {
            formData.append("image", form.image)
        }

        try{
            const res = await axios.post("https://small-task-api.vercel.app/admin/add-post", formData, {
                headers: {"Content-Type":"multipart/form-data"}
            })
            alert(res.data.message)
        }catch(err){
            alert(err.response?.data?.message || "Error submitting post")
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header></Header>
            <div className="rounded-2xl flex flex-col md:flex-col w-100 h-200 md:w-150 mt-10">
                <form onSubmit={handleSubmit}>
                     <fieldset className="border p-4 rounded">
                            <legend className="font-bold">Post Details</legend>
                            <div className="mb-2">
                            <label htmlFor="title" className="block mb-1">Add Image</label>
                            <input type="file" id="image" name="image" accept="image/*" className="border rounded px-2 py-1 w-full" onChange={handleChange}/>
                            </div>
                            <div className="mb-2">
                            <label htmlFor="title" className="block mb-1">Title</label>
                            <input id="title" name="title" type="text" className="border rounded px-2 py-1 w-full" onChange={handleChange}/>
                            </div>
                            <div>
                            <label htmlFor="content" className="block mb-1">Content</label>
                            <textarea id="content" name="content" className="border rounded px-2 py-4 w-full" onChange={handleChange}></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            >
                                Submit
                            </button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Admin;