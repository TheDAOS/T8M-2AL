import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import { signIn } from "../firebase/auth";

function Signup() {
    let navigate = useNavigate();

    const { email, setEmail } = useContext(AuthContext);
    const { password, setPassword } = useContext(AuthContext);

    async function HandleSubmit(e) {
        try {
            e.preventDefault();

            await signIn(email, password);

            // alert('User Created Successful...')
            // alert('Redirecting to Login Page...')
            alert('User Created Successful... \nRedirecting to Login Page...')

            navigate('/login');
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
                <h1 class='text-center font-bold text-2xl mb-4'>Sign Up</h1>
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
                        value='Sign Up'
                        onClick={HandleSubmit}
                    />

                    <div class='text-center'>
                        Already have an account ? <Link to="/login" class='font-semibold  hover:underline decoration-2 underline-offset-2'>Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;