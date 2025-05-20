import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { isLoggedIn, logOff } from "../firebase/auth";

function NavBar() {
    const [isHoverLogOut, setIsHoverLogOut] = useState(false)
    const { user, setUser } = useContext(AuthContext)
    let navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logOff()
            alert("Logged Out");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // console.log(user);

        // if (!user) {
        //     navigate('/login');
        // }
        isLoggedIn((userCredential) => {

            if (userCredential) {
                setUser(userCredential)
                // console.log(userCredential);
            } else {
                navigate('/login');
            }

        })
    }, [])

    return (
        <nav class='text-2xl font-semibold bg-sky-200 p-1.5 rounded-xl shadow-md border-2 flex justify-between align-middle flex-wrap mb-5'>
            <div className="cursor-default">
                Task Manger
            </div>

            <div className="text-sm flex justify-between align-middle items-center gap-2">
                <Link
                    to='/'
                    className="bg-sky-300 hover:bg-sky-100 rounded-md shadow-md p-1.5 border-2 cursor-pointer"
                >Show Tasks</Link>
                <Link
                    to='/add'
                    className="bg-sky-300 hover:bg-sky-100 rounded-md shadow-md p-1.5 border-2 cursor-pointer"
                >Add Task</Link>
            </div>

            <div className="text-sm flex justify-between align-middle items-center gap-2">
                <button
                    className="bg-sky-300 hover:bg-black hover:text-sky-50 rounded-md shadow-md p-1.5 border-2 cursor-pointer min-w-22 z-1"
                    onClick={handleSignOut}
                    onMouseEnter={() => setIsHoverLogOut(true)}
                    onMouseLeave={() => setIsHoverLogOut(false)}
                >
                    {isHoverLogOut ? 'Sign out' : user?.email?.split('@')[0]}
                </button>
            </div>
        </nav>
    )
}

export default NavBar;