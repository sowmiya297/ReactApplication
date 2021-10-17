import React, { useState, useEffect, useMemo } from 'react'
import PostComponent from './PostComponent';
import Pagination from "react-js-pagination";
import { useHistory } from "react-router-dom";
import { connect, Provider } from 'react-redux'
import axios from 'axios';
import { fetchPosts } from '../Redux/PostsAction'
import { Button } from "react-bootstrap";

function HomePage({ postsData, fetchPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const history = useHistory();


  // // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    //Fetch the data using Reducer
    fetchPosts()
  }, [])

  function createPost() {
    // Navigate to createPost page.
    history.push("/CreatePostPage");
  }

  function deletePost() {
    // Delete the post using Axios.
    axios.delete('https://gorest.co.in/public/v1/posts/1')
      .then(() => alert("post deleted")
      ).catch((error) =>
        alert(error)
      );
  }
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    postsData.error ? <h2>{postsData.error}</h2> :
      <div>
        <h1 className='mb-3'> Posts Maintainance</h1>
        <div style={{ "padding": "10px" }}>
          <span className="button">
            <Button className="btn-success" onClick={createPost}>Create New post</Button>
          </span>
          <span className="button">
            <Button className="btn-danger" onClick={deletePost}>Delete New post</Button>
          </span>
        </div>
        <PostComponent posts={currentPosts} />
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={currentPage}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={postsData.length}
          onChange={handlePageChange}
        />
      </div>
  );
}

const mapStateToProps = state => {
  return {
    postsData: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
