import PlaceIcon1 from  '../../assets/img/tn-img-01.jpg'
import PlaceIcon2 from  '../../assets/img/tn-img-02.jpg'
import PlaceIcon3 from  '../../assets/img/tn-img-03.jpg'
import PlaceIcon4 from  '../../assets/img/tn-img-04.jpg'

export const Places = () => {
  return (
    <div className="tm-bg-white">
      <div className="tm-bg-primary tm-sidebar-pad">
        <h3 className="tm-color-white tm-sidebar-title">Recommended Places</h3>
        <p className="tm-color-white tm-margin-b-0 tm-font-light">
          Enamel pin cliche tilde, kitsch and VHS thundercats
        </p>
      </div>
      <div className="tm-sidebar-pad-2">
        <a href="#" className="media tm-media tm-recommended-item">
          <img src={PlaceIcon1} alt="Image" />
          <div className="media-body tm-media-body tm-bg-gray">
            <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
              Europe
            </h4>
          </div>
        </a>
        <a href="#" className="media tm-media tm-recommended-item">
          <img src={PlaceIcon2} alt="Image" />
          <div className="media-body tm-media-body tm-bg-gray">
            <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
              Asia
            </h4>
          </div>
        </a>
        <a href="#" className="media tm-media tm-recommended-item">
          <img src={PlaceIcon3} alt="Image" />
          <div className="media-body tm-media-body tm-bg-gray">
            <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
              Africa
            </h4>
          </div>
        </a>
        <a href="#" className="media tm-media tm-recommended-item">
          <img src={PlaceIcon4} alt="Image" />
          <div className="media-body tm-media-body tm-bg-gray">
            <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
              South America
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};


