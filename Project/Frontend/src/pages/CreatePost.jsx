import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post('http://localhost:3000/create_post', formData)
    .then(res => {
      navigate('/feed');
      alert("Post created successfully!");
    })
    .catch(err => {
      console.error("Error creating post:", err);
      alert("Failed to create post. Please try again.");
    })
  }
  return (
    
    <section className='create-post-section'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label className=''>Select Image</label>
        <input type="file" name='image' accept="image/*"/>
        <br />
        <input type="text" name='caption'required placeholder='Enter caption'/>
        <br />
        <button type='submit'>Create Post</button>
      </form>
    </section>
  )
}

export default CreatePost