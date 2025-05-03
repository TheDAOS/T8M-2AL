import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../firebase/auth";
import AuthContext from "../context/AuthContext";

function Login() {
    let navigate = useNavigate();

    const { setUser } = useContext(AuthContext)

    const { email, setEmail } = useContext(AuthContext);
    const { password, setPassword } = useContext(AuthContext);


    async function HandleSubmit(e) {
        try {
            e.preventDefault();

            const userCredential = await login(email, password)
            
            alert('login Successful...')
            
            setUser(userCredential);

            setEmail('');
            setPassword('');

            navigate('/');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage)
            console.error(errorCode, errorMessage);
        }
    }

    return (
        <div class='flex items-center justify-center h-full'>
            <div class="bg-sky-200 w-100 p-3 rounded-xl shadow-xl border-2">
                <h1 class='text-center font-bold text-2xl mb-4'>Login</h1>
                <form>
                    <label for='email' class='font-semibold ms-0.5'>Email</label>
                    <input
                        class='bg-sky-100 rounded-md w-full p-1 border-sky-950 border-2 mb-2'
                        type="email"
                        id="email"
                        placeholder="name@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label for='password' class='font-semibold ms-0.5'>Password</label>
                    <input
                        class='bg-sky-100 rounded-md w-full p-1 border-sky-950 border-2 mb-2'
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        class='bg-black text-sky-50 font-semibold w-full mt-3 mb-3 p-1.5 rounded-md border-2 border-transparent hover:border-sky-50 cursor-pointer shadow-xl'
                        type="submit"
                        value='Login'
                        onClick={HandleSubmit}
                    />

                    <div class='text-center'>
                        Don't have an account ? <Link to="/signup" class='font-semibold  hover:underline decoration-2 underline-offset-2'>Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login