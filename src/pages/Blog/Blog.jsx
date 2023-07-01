import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <>
            <a href='blog.pdf' className='text-right'
                download='blog.pdf' >
                <button className='btn btn-primary'>Download Pdf</button></a>
            <div className='my-20'>
                <div className='text-center'>
                    <h1 className='h3 font-bold'>Tell us differences between uncontrolled and controlled components ?</h1>
                    <article className='my-2'>
                        Ans: Are you tired of managing the state of your React components on your own? Look no further than controlled components. Controlled components in React allow you to easily manage the state and behavior of your components by having the parent component take control. This not only makes your code more predictable and easy to debug, but also allows for efficient management of state in larger projects. In contrast, uncontrolled components rely on managing their own state internally
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>How to validate react props propTypes?</h1>
                    <article className='my-2'>
                        Ans:  PropTypes.any : The prop can be of any data type. <br />
                        PropTypes.bool : The prop should be a Boolean. <br />
                        PropTypes.number : The prop should be a number. <br />
                        PropTypes.string : The prop should be a string. <br />
                        PropTypes.func : The prop should be a function. <br />
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>tell us the difference between nodeJs and expressJs ?</h1>
                    <article className='my-2'>
                        Ans: Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>What is custom hook and why will you create a custom hook ?</h1>
                    <article className='my-2'>
                        Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function <br />

                        Custom hooks allow us to encapsulate complex logic and functionality into a single function, making it easier to understand and reason about. By encapsulating this logic, we can create more modular and reusable code, which can improve readability and maintainability
                    </article>
                </div>
            </div>
        </>
    );
};

export default Blog;