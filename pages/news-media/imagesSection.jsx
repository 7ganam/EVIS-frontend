import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";

const PREFIX_URL =
  "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/";

export default class ImagesSection extends React.Component {
  constructor(props) {
    super();
    this.allImagesData = props.imagesData;
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {},
      useWindowKeyDown: true,
    };

    this.images = [
      {
        thumbnail: `/assets/images/gallery/1.jpg`,
        original: `/assets/images/gallery/1.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/2.jpg`,
        original: `/assets/images/gallery/2.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/3.jpg`,
        original: `/assets/images/gallery/3.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/4.jpg`,
        original: `/assets/images/gallery/4.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/5.jpg`,
        original: `/assets/images/gallery/5.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/6.jpg`,
        original: `/assets/images/gallery/6.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/7.png`,
        original: `/assets/images/gallery/7.png`,
      },
      {
        thumbnail: `/assets/images/gallery/8.png`,
        original: `/assets/images/gallery/8.png`,
      },
      //   {
      //     thumbnail: `/assets/images/gallery/9.png`,
      //     original: `/assets/images/gallery/9.png`,
      //   },
      //   {
      //     thumbnail: `/assets/images/gallery/10.png`,
      //     original: `/assets/images/gallery/10.png`,
      //   },
      //   {
      //     thumbnail: `/assets/images/gallery/12.png`,
      //     original: `/assets/images/gallery/12.png`,
      //   },
      //   {
      //     thumbnail: `/assets/images/gallery/13.png`,
      //     original: `/assets/images/gallery/13.png`,
      //   },
      //   {
      //     thumbnail: `/assets/images/gallery/14.png`,
      //     original: `/assets/images/gallery/14.png`,
      //   },
      //   {
      //     thumbnail: `/assets/images/gallery/15.png`,
      //     original: `/assets/images/gallery/15.png`,
      //   },
      {
        thumbnail: `/assets/images/gallery/19.jpg`,
        original: `/assets/images/gallery/19.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/17.jpg`,
        original: `/assets/images/gallery/17.jpg`,
      },
      {
        thumbnail: `/assets/images/gallery/18.jpg`,
        original: `/assets/images/gallery/18.jpg`,
      },
    ];
  }

  _onImageClick(event) {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.showVideo[url] = !this.state.showVideo[url];
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              width="560"
              height="315"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: "0", left: "initial" }}
              >
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
    return (
      <section className="app">
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          // items={this.images}
          items={this.allImagesData}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
      </section>
    );
  }
}
