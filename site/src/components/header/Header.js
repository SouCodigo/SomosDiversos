import Nav from '../nav/Nav';
import ImgLightCarousel from '../carousel/ImgLightCarousel';
import Main from '../main/Main';
import VdLightCarousel from '../carousel/VdLightCarousel';
import FormNotification from '../form/FormNotification';

function Header() {
  return (
 <div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <Nav></Nav>
  <ImgLightCarousel></ImgLightCarousel>
  <Main></Main>
  <VdLightCarousel></VdLightCarousel>
  <FormNotification></FormNotification>
  </div>
  );
}

export default Header;