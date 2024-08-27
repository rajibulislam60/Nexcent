import React from 'react'
import Container from '../components/Container'
import BlogItem from '../components/BlogItem'

const Blog = () => {
  return (
    <div id='blog'>
        <Container>
            <div>
                <BlogItem/>
            </div>
        </Container>
    </div>
  )
}

export default Blog