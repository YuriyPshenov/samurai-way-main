import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Unknown_road_at_night%2C_Japan%3B_March_2013.jpg" alt="maincontentimage"/>
            <div>
                ava + description
            </div>
            <div className="posts-container">
                My posts
                <div className="new-post">
                    New post
                </div>
                <div className="posts">
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;