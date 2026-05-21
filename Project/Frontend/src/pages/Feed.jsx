import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([{
    id: 1,
    image: 'https://images.unsplash.com/photo-1777997288465-c435b4d03133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    caption: 'Beautiful sunset!',
  }]);

  // Fetch posts from backend and update state also handle api calls in useEffect to avoid infinite loop

  useEffect(() => {
   axios.get('http://localhost:3000/posts')
   .then(res => {
    setPosts(res.data.posts);
   })
   .catch(err => {
    console.error("Error fetching posts:", err);
   })
  },[])

  return (
    <section className='feed-section'>
    {
      posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className='post'>  
            <img src={post.image} alt={`Post ${post.id}`} className='post-card'/>
            <h3 className='post-caption'>{post.caption}</h3>
          </div>
        ))
      ) : (
        <h1>No posts available.</h1>
      )
    }
    </section>
  )
}

export default Feed