import React from 'react'

const Footer = () => {
  return (
    <div className='text-poppins mx-auto sticky'>
      <footer className="footer p-10 bg-dark text-base-content text-center">
  
  <div className='md:mx-auto'>
    <span className="footer-title text-2xl md:text-3xl">TRAVMATE</span> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Explore</a> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Blogs</a>
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">About us</a> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Contact</a> 
  </div> 
  <div className='md:mx-auto'>
    <span className="footer-title text-2xl md:text-3xl">Legal</span> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Terms of use</a> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Privacy policy</a> 
    <a className="link link-hover text-xl md:text-2xl text-primary font-poppins">Cookie policy</a>
  </div> 
  <div className='md:mx-auto'>
    <span className="footer-title text-2xl md:text-3xl">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text font-poppins p-2 md:text-xl text-lg text-primary">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="youremail@gmail.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-gray-900 absolute top-0 right-0 rounded-l-none bg-mint text-dark">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
