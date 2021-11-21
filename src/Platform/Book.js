import React from "react";
import HTMLFlipBook from "react-pageflip";
import './Book.css'

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className={"page page-cover "+props.className} ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={"page " + props.className+ " " + props.className+props.number} ref={ref} data-density="soft">
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
      </div>
    </div>
  );
});

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

    

  render() {
    return (
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >

          <PageCover className="BookCover1" number={1}></PageCover>
          <Page number={1} className="BookPage">Lorem ipsum...</Page>
          <Page number={2} className="BookPage">Lorem ipsum...</Page>
          <Page number={3} className="BookPage">Lorem ipsum...</Page>
          <Page number={4} className="BookPage">Lorem ipsum...</Page>
          <Page number={5} className="BookPage">Lorem ipsum...</Page>
          <Page number={6} className="BookPage">Lorem ipsum...</Page>
          <PageCover className="BookCover2" number={2}></PageCover>

        </HTMLFlipBook>
    );
  }
}

export default Book;
