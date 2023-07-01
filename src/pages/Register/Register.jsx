import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const { registerUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = ()=>{
        
        signInWithGoogle()
        .then((result)=>{
            
            navigate(from, {replace: true})
        })
        .catch((error)=>{
            
        })

    }

    const handleGithubLogin =()=>{
        console.log('click github');
        signInWithGithub()
        .then((result)=>{
            // console.log(result.user);
            navigate(from, {replace: true})
        })
        .catch((error)=>{
            // console.log('github error: ', error.message);
        })
    }

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        setName(name);setEmail(email); setPassword(password)
        //console.log(name, email, password,photoUrl)

        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            setError('Minimum eight characters, at least one letter and one number');
            return ;
        }else{
            setError('');
        }
        
        if(name,email,password){
            registerUser(name,email,password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch((error)=>{
                // console.log(error.message);
            })
        }
}

    return (
        <div>

            <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleRegistration}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input name='name' id="name" type="text" required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                                shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
                                                 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name='email' type="email" required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                        shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
              focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
                                    Photo Url
                                </label>
                                <div className="mt-1">
                                    <input  name='photoUrl' type="text" required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                        shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
              focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name='password' type="password" required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
              shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
              focus:border-blue-500 sm:text-sm" />
              
                                </div>
                                <span className='text-red-500'>{error}</span>
                            </div>

                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Register
                                </button>
                            </div>
                            
                            <label className="label">
                                    <span href="#" className="label-text-alt"> Already have an Account? <Link className='link' to="/login">Login</Link> here</span>
                                </label>
                            
                        </form>
                        <div>
                                <button onClick={handleGoogleLogin}  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Login with Google
                                </button>
                            </div>
                        <div className='mt-2'>
                                <button onClick={handleGithubLogin}  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Login with Github
                                </button>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;