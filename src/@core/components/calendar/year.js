
import Slider from 'react-slick'
 import './style.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function year() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 6,
              infinite: true,
              spaceBetwee:30,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              spaceBetween: 15
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              spaceBetween: 15
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              spaceBetween: 10
            }
          },
          {
            breakpoint: 240,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              spaceBetween: 10
            }
          }
        ]
      }
      return (
        <div>
            <Slider {...settings}>
            <div>
            <button className='detail'>2018</button>
            </div>
            <div>
            <button className='detail'>2019</button></div>
            <div>
            <button className='detail'>2020</button>
            </div>
            <div>
            <button className='detail'>2021</button></div>
            <div>
            <button className='detail'>2022</button>
            </div>
            <div>
            <button className='detail'>2023</button>
            </div>
            </Slider>
            </div>
            
        
      )
}
export default  year
