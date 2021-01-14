import Header from '../../components/header'
import Search from '../../components/search'
import Articles from '../../components/articles'
import Blog from '../../components/blog'
import {Places} from '../../components/articles/places'
import Form from '../../components/form'
import Map from '../../components/form/map'
import Footer from '../../components/footer'
import Services from '../../components/services'

import Video from  '../../assets/videos/video.mp4'


const HomePage = () => {
  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg"></div>
      {/* Header */}
      <Header />
      {/* Search  */}
      <Search />

      <div className="tm-section-2">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="tm-section-title">We are here to help you?</h2>
              <p className="tm-color-white tm-section-subtitle">
                Subscribe to get our newsletters
              </p>
              <a href="#" className="tm-color-white tm-btn-white-bordered">
                Subscribe Newletters
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-section tm-position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="tm-section-down-arrow"
        >
          <polygon fill="#ee5057" points="0,0  100,0  50,60"></polygon>
        </svg>
        {/* Services */}
        <Services />
      </div>

      <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              {/* Articles */}
              <Articles />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
              {/* Recommended Places */}
              <Places />
            </div>
          </div>
        </div>
      </div>

      <div className="tm-bg-video">
        <div className="overlay">
          <i className="fa fa-5x fa-play-circle tm-btn-play"></i>
          <i className="fa fa-5x fa-pause-circle tm-btn-pause"></i>
        </div>
        <video controls loop className="tmVideo">
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        {/* Blog */}
        <Blog />
      </div>

      <div
        className="tm-section tm-section-pad tm-bg-img tm-position-relative"
        id="tm-section-6"
      >
        <div className="container ie-h-align-center-fix">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
                <Map />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
              {/* Form */}
              <Form />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
