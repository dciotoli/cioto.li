import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.MAX_WIDTH = 700;
    this.PADDING = 20;
  }

  componentDidMount() {
    const { title } = this.props;
    document.title = title;
  }

  render() {
    const {
      wide,
      children,
      style,
    } = this.props;
    return (
      <div
        className="page"
        style={{
          maxWidth: wide ? '100%' : `${this.MAX_WIDTH}px`,
          padding: `${this.PADDING}px`,
          margin: 'auto',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
}

Page.defaultProps = {
  children: null,
  wide: false,
  style: {},
};

Page.propTypes = {
  children: PropTypes.any,
  wide: PropTypes.bool,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Page;
