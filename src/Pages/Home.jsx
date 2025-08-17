import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='pnav ' id='home' style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: "url('https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <h1 className='text-light'>Stay Fit, Stay Healthy</h1> <br />
        <h5 className='ml-1 px-2 text-center mb-5 text-light'>Simple tips to improve your health and lifestyle</h5>
      </section>


      <hr />

      <section id='part4' className='tesimonial container-fluid p-5'>
        <h1 className='text-center'>Explore More</h1>
        <div className='row'>
          <div className='tesimonial-content col-12 col-md-6 d-flex align-items-center justify-content-center flex-column '>

            <div>
              <h4>Trusted Words</h4>

              <p>Fitness is like a relationship; you can't cheat and expect it to work.“Good health is the foundation of a happy life. Staying active through simple exercises keeps your body strong, while eating nutritious food fuels your energy and protects you from illness. Fitness is not about perfection — it’s about progress. Small daily habits like moving your body, staying hydrated, and choosing healthy meals can create big changes over time. Take care of your body, because it’s the only place you have to live.”</p>
            </div>

          </div>
          <div className='tesimonial-image  col-12 col-md-6'>
            <div className="row row-gap-2">
              <div className="col-3">
                <img width={"100%"} src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://thumbs.dreamstime.com/b/health-food-fitness-concept-fresh-t-vegetables-pulses-herbs-spices-nuts-grains-high-anthocyanins-antioxidants-102707769.jpg" alt="" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaHrVBmeu0NRDeT2uq-x_tYVZWy5VTjHNSA&s" alt="1" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgK9hJTd_6OuASEwaWoj4nJq5cG6vkyEMUsA&s" alt="2" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyBBPidb5_jD5d4h1TAcyxmp69a8fAVNRDA&s" alt="3" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIiIGc1GJ7yoFti5NRC6FK5K7n-sICF8EMA&s" alt="4" />
              </div>

              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroDsgA1g9MvmloGJeaV6yvqOAY3cXGWj5HA&s" alt="5" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1oXedUHHtJs8jJ1EkAdg1tr2qCU0XLAjVA&s" alt="6" />
              </div>
              <div className="col-3">
                <img width={"100%"} height={"50%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfaXvN0R17_QxOHlJEy9VkUO0IRBGf9Mvvw&s" alt="7" />
              </div>
              <div className="col-3">
                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZGzPoNG2RZ_wKyPsg0PCrcMpxmy1GrzHfg&s" alt="8" />
              </div>
            </div>
          </div>
        </div>
        <section className='ml-1 px-2 text-center mb-5 text-dark justify-content-center align-item-center d-flex'>

          <div className='row'>
            <div class="card w-80 mt-5 text-center justify-item-center ">
              <div class="card-body ">
                <h5 class="card-title">Way to Explore</h5>
                <p class="card-text">Fuel your body with good food.</p>
                <a href="./exercise" class="btn btn-primary">Explore Your Excercise</a>
              </div>
            </div>
          </div>
        </section>
      </section>


      {/* pb */}
      <section id="about" className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-green-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fitness is not about competition — it’s about becoming the best version of yourself.
              At <span className="font-semibold text-green-700">NutriFlex</span>, we believe in a balanced
              approach that strengthens both your body and mind.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're just starting your journey or looking to push your limits,
              we provide simple exercises, healthy diet tips, and expert guidance to
              keep you motivated and on track every day.
            </p>


            <blockquote className="text-xl italic font-semibold text-blue-700 bg-white rounded-xl shadow-md p-4">
              “Your only limit is you. Stay consistent, stay strong, and results will follow.”
            </blockquote>


          </div>
        </div>
      </section>

      <hr className="my-10" />

      <section id="contact" className=" py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Have questions? Reach out to us anytime.
          </p>

          <div className="bg-white  rounded-2xl p-6 flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-gray-800">
              📞 Phone: <span className="text-green-700 font-semibold">+31 34562053</span>
            </p>
            <p className="text-lg font-medium text-gray-800">
              📧 Email: <span className="text-green-700 font-semibold">NutriFlex@gmail.com</span>
            </p>
          </div>
        </div>
      </section>
      <hr />

      <section className="services mt-12 px-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-100" id="swer">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center ">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-xl font-semibold text-blue-700">Balanced Diet Chart</h2>
            <p className="text-gray-600 mt-3">
              Get personalized diet plans to maintain a healthy lifestyle and balanced nutrition.
            </p>
          </div>


          <div className="bg-white shadow-xl rounded-2xl p-8 text-center ">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-xl font-semibold text-blue-700">Weekly Exercise Plans</h2>
            <p className="text-gray-600 mt-3">
              Stay fit with easy-to-follow workout schedules designed by our experts.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center ">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-xl font-semibold text-blue-700">Perfect Training Ideas</h2>
            <p className="text-gray-600 mt-3">
              Achieve your fitness goals with structured training and expert guidance.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
