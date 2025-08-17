import React from 'react'

function Footer() {
  return (
    <>
     <section className="bg-light text-dark pt-4">
      <div className="container text-center">
        
        <div className="mb-3">
          <a href="#" className="text-dark me-4 text-decoration-none">About</a>
          <a href="#" className="text-dark me-4 text-decoration-none">Contact</a>
          <a href="#" className="text-dark me-4 text-decoration-none">Services</a>
          <a href="#" className="text-dark text-decoration-none">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <p className="mb-0 pb-3">
          © {new Date().getFullYear()} <strong>NutriFlex</strong>. All Rights Reserved.
        </p>
      </div>
    
    </section>
    </>
  )
}

export default Footer

