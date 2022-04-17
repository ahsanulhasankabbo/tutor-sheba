import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-32 my-8'>
            <div>
                <h1 className='text-2xl font-semibold'>Difference between Authentication and Authorization.</h1>
                <p>
                    Authentication : There are many users in google who uses different kind of webpage.By Authentication we can varify a user and allow him to use the webpage.Like a user can varify his identity by his gmail account or email and password.If the information of his identity is valid then he is allow to use the webpage easily. <br />
                    Authorization : Authorization is the process to determine whether the authenticated user has access to the particular resorces.It checked ours rights to grand us access to resources such as information,database,files etc.
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-5'>Why am i using firebase?What others options do i have to implement Authentication?</h1>
                <p>
                    By using firebase we can easily connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.It is very simple and time-saving alternative to writing full-fledged backend code for dynamic apps.Thats why we should use firebase. <br />
                    There are many options which we can implement as authentication.Like : <br />
                    parse,back4app,kinvey,backendless,kuzzle,pubnub,kumulos,hoodie etc. Those are relatively new companies but still provide useful services to developers.
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-5'>What other service does firebase provide other than authentication?</h1>
                <p>
                There are many services which Firebase provides. Like : <br />
                Cloud messaging : Firebase is a great tool to implement notifications. <br />
                Dynamic Links : This service is majorly used to generate deep links that redirect user traffic to our landing page, website, or mobile applications. <br />
                Google analytics : The service provides visualization of all this information on just a single tap. <br />
                Remote config : It helps in remotely changing our application UI and content, without publishing it again.
                </p>
            </div>
        </div>
    );
};

export default Blogs;