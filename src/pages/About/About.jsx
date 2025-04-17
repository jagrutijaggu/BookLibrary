import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BooksHaven</h2>
            <p className='fs-17'>BooksHaven is an open book library where anyone can read, share, and explore a world of knowledge—completely free. Whether you're into classic literature, modern fiction, or niche nonfiction, we’ve got shelves full of stories and ideas waiting for you.</p>
            <p className='fs-17'>We believe books should be accessible to everyone. That’s why our collection is open to the public, with no membership fees or hidden costs. Just walk in, grab a book, and start reading—or take it home and return it when you’re done.</p>
            <p className='fs-17'>BooksHaven is built by readers, for readers. Come find your next favorite book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;