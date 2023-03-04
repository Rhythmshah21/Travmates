import React from 'react'

const Footer = () => {
  return (
    <div className='text-poppins '>
      <footer className="footer p-10 bg-base-200 text-base-content">
  
  <div>
    <span className="footer-title">TRAVMATE</span> 
    <a className="link link-hover">Explore</a> 
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text font-poppins p-2">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-gray-900 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
