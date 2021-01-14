import SliderImage01 from  '../../assets/img/img-01.jpg'
import SliderImage02 from  '../../assets/img/img-02.jpg'

const Articles = () => {
  return (
    <div className="tm-article-carousel">
      <article className="tm-bg-white mr-2 tm-carousel-item">
        <img src={SliderImage01} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Nunc in felis aliquet metus luctus iaculis
            </h3>
          </header>
          <p>
            Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.
            Nullam sollicitudin at augue venenatis eleifend. Nulla ligula
            ligula, egestas sit amet viverra id, iaculis sit amet ligula.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            Get More Info.
          </a>
        </div>
      </article>
      <article className="tm-bg-white mr-2 tm-carousel-item">
        <img src={SliderImage02} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Sed cursus dictum nunc quis molestie
            </h3>
          </header>
          <p>
            Pellentesque quis dui sit amet purus scelerisque eleifend sed ut
            eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex
            tincidunt iaculis. Curabitur eget turpis gravida.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            View Detail
          </a>
        </div>
      </article>
      <article className="tm-bg-white mr-2 tm-carousel-item">
        <img src={SliderImage01} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Eget diam pellentesque interdum ut porta
            </h3>
          </header>
          <p>
            Aenean finibus tempor nulla, et maximus nibh dapibus ac. Duis
            consequat sed sapien venenatis consequat. Aliquam ac lacus volutpat,
            dictum risus at, scelerisque nulla.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            More Info.
          </a>
        </div>
      </article>
      <article className="tm-bg-white mr-2 tm-carousel-item">
        <img src={SliderImage02} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Lorem ipsum dolor sit amet, consectetur
            </h3>
          </header>
          <p>
            Suspendisse molestie sed dui eget faucibus. Duis accumsan sagittis
            tortor in ultrices. Praesent tortor ante, fringilla ac nibh
            porttitor, fermentum commodo nulla.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            Detail Info.
          </a>
        </div>
      </article>
      <article className="tm-bg-white mr-2 tm-carousel-item">
        <img src={SliderImage01} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Orci varius natoque penatibus et
            </h3>
          </header>
          <p>
            Pellentesque quis dui sit amet purus scelerisque eleifend sed ut
            eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex
            tincidunt iaculis. Curabitur eget turpis gravida.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            Read More
          </a>
        </div>
      </article>
      <article className="tm-bg-white tm-carousel-item">
        <img src={SliderImage02} alt="Image" className="img-fluid" />
        <div className="tm-article-pad">
          <header>
            <h3 className="text-uppercase tm-article-title-2">
              Nullam sollicitudin at augue venenatis eleifend
            </h3>
          </header>
          <p>
            Aenean finibus tempor nulla, et maximus nibh dapibus ac. Duis
            consequat sed sapien venenatis consequat. Aliquam ac lacus volutpat,
            dictum risus at, scelerisque nulla.
          </p>
          <a href="#" className="text-uppercase btn-primary tm-btn-primary">
            More Details
          </a>
        </div>
      </article>
    </div>
  );
};

export default Articles;
