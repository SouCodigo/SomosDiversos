import Carousel from 'react-bootstrap/Carousel';
import imgCarousel from "../../img/imgTemporaria.svg";

function ImgLightCarousel() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel}
          alt="Imagem1"
        />
        <Carousel.Caption>
          <h5>Imagem1</h5>
          <p>Descrição da Imagem1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel}
          alt="Imagem2"
        />
        <Carousel.Caption>
          <h5>Imagem2</h5>
          <p>Descrição da Imagem2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel}
          alt="Imagem3"
        />
        <Carousel.Caption>
          <h5>Imagem3</h5>
          <p>
            Descrição da Imagem3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgLightCarousel;