import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div>
                    <h2>Difference between Authentication and Authorization</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>

                                <th scope="col">Authentication</th>
                                <th scope="col">Authorization</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Authentication is the process of identifying a user to provide access to a system.</td>
                                <td>Authorization is the process of giving permission to access the resources.</td>

                            </tr>
                            <tr>

                                <td>In this, the user or client and server are verified.</td>
                                <td>In this, it is verified that if the user is allowed through the defined policies and rules.</td>

                            </tr>
                            <tr>

                                <td>It is usually performed before the authorization.</td>
                                <td>It is usually done once the user is successfully authenticated.</td>

                            </tr>
                            <tr>

                                <td>It requires the login details of the user, such as user name & password, etc.</td>
                                <td>It requires the user's privilege or security level.</td>

                            </tr>

                        </tbody>
                    </table>
                    <h2 className='mt-5'> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
                    <p>Firebase frees developers to focus crafting fantastic user experiences. You don’t need to manage servers. You don’t need to write APIs. Firebase is your server, your API and your datastore, all written so generically that you can modify it to suit most needs.</p>
                    <p>Firebase alternatives are given below:</p>
                    <ul class="list-group w-50">

                        <li class="list-group-item">Parse</li>
                        <li class="list-group-item">Back4App</li>
                        <li class="list-group-item">AWS Amplify</li>
                        <li class="list-group-item">Kuzzle</li>
                        <li class="list-group-item">Couchbase</li>
                        <li class="list-group-item">NativeScript</li>
                        <li class="list-group-item">Flutter etc.</li>
                    </ul>

                    <h2 className='mt-5'>What other services does firebase provide other than authentication</h2>
                    <p>Firebase provides these following services also:</p>
                    <ul class="list-group w-50">

                        <li class="list-group-item">Cloud functions</li>
                        <li class="list-group-item">Cloud Messaging</li>
                        <li class="list-group-item">Cloud Storage</li>
                        <li class="list-group-item">Hosting</li>
                        <li class="list-group-item">Remote Config</li>
                        <li class="list-group-item">Realtime Database</li>
                        <li class="list-group-item">Some extensions etc.</li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Blog;