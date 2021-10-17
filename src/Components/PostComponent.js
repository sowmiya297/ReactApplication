import React from 'react'
import { Link } from 'react-router-dom';
import AuthorPage from './AuthorPage'

const PostComponent = ({ posts }) => {
  return (
    <div>
      <ul className='list-group mb-4'>
        {posts.map(post => (
          <li key={post.id} className='list-group-item'><Link to={{ pathname: "/AuthorPage", state: { data: post } }}>
            <h5> Title : {post.title}</h5></Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PostComponent
