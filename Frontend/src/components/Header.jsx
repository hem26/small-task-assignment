import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-between border-2 border-red-500 rounded-lg w-full h-20 px-8 bg-white shadow-md">
            <h1 className="text-2xl font-bold">Quora Post</h1>
            <div className="flex space-x-6">
                <Link to="/" className="text-lg hover:underline">Main</Link>
                <Link to="/admin" className="text-lg hover:underline">Admin</Link>
            </div>
        </div>
    )
}

export default Header;