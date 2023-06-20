import Carousel from 'react-bootstrap/Carousel';
import imgTemporaria from "../../img/imgTemporaria.svg";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgTemporaria}
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
          src={imgTemporaria}
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
          src={imgTemporaria}
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

export default DarkVariantExample;