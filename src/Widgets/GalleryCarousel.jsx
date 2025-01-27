import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Slider from './Slider.jsx'

class GalleryCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentImg !== this.props.currentImg) {
      this.setState({
        currentImg: this.props.currentImg
      })
    }
  }

  prevSlide() {
    this.setState({currentImg: this.state.currentImg - 1});
  }

  nextSlide() {
    this.setState({currentImg: this.state.currentImg + 1});
  }

  render() {
    return (

      <section className="carousel carousel-gallery">
        {this.state.currentImg === 0 ? <></> : <AiOutlineArrowLeft className="arrow-left" onClick={this.prevSlide} />}

        {this.props.images.map((image, index) => {
          return (
            <div className={index === this.props.images ? 'slide slide-active' : 'slide'} key={index} >
              {index === this.state.currentImg && (<img src={image.url} className='main-img-img'/>)}
            </div>
          )
        })}

        {this.state.currentImg === this.props.images.length - 1? <></> : <AiOutlineArrowRight className="arrow-right" onClick={this.nextSlide} />}
      </section>


    )
  }
}

export default GalleryCarousel;