import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');
    const { loginEmailAndPassword, signInWithGithub, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    const handleGithubLogin = () => {
        // console.log('click github');
        signInWithGithub()
            .then((result) => {
                // console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                // console.log('github error: ', error.message);
            })
    }

    const handleGoogleLogin = () => {
        // console.log('click google login');
        signInWithGoogle()
            .then((result) => {
                navigate(from, { replace: true })
            })
            .catch((error) => {
                // console.log('google error',error.message);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email, password) {
            loginEmailAndPassword(email, password)
                .then((result) => {
                    // console.log(result.user);
                    setError('')
                    navigate(from, { replace: true })
                })
                .catch((error) => {
                    setError(error.message);
                })
        }


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold text-center">We are so <span className='text-blue-500'>Excited</span> to create fun & <span className='text-red-500'>loving</span> memories with you! </h1>

                        <div className='mt-4 '>
                            <button onClick={handleGoogleLogin} type="submit" className="flex ms-28 justify-center py-2 px-4 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Login with Google
                            </button>
                        </div>
                        <div className='mt-4'>
                            <button onClick={handleGithubLogin} type="submit" className="flex ms-28 justify-center py-2 px-4 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Login with Github
                            </button>
                        </div>

                        <p className="py-6">Welcome To Italian Pizza Manage Center . Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <span className='text-red-500'>{error}</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <span className="label-text-alt "> Don't have an Account? <Link className='link' to="/register"> Register</Link> here</span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;