import React, { Component, PropTypes } from 'react';
import withWidth, { SMALL, MEDIUM } from 'material-ui/utils/withWidth';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import GitHub from '../icons/GitHub';

import AppBarDrawer from '../containers/AppBarDrawer';
import FansTitle from './FansTitle';

class MainComponent extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    pathname: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    handleCloseAppBar: PropTypes.func.isRequired,
    handleOpenAppBar: PropTypes.func.isRequired,
    handleRequestHome: PropTypes.func.isRequired,
    IndexChildren: PropTypes.object.isRequired,
    ReaderChildren: PropTypes.object.isRequired,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { width, pathname } = this.props;
    if (width !== SMALL && pathname !== '/') {
      this.props.handleOpenAppBar();
    }
  }

  render() {
    const { muiTheme: { appBar } } = this.context;
    const { status, pathname, width, handleOpenAppBar, handleCloseAppBar, handleRequestHome, IndexChildren, ReaderChildren } = this.props;

    return (
      <div style={{
        paddingTop: appBar.height
      }}>
        <AppBar
          title={pathname !== '/' ? <FansTitle /> : ''}
          iconElementRight={
            <IconButton
              href="https://github.com/medz/phpwind"
              tooltip="点击浏览 phpwind Fans 代码仓库"
              tooltipPosition="bottom-left"
            >
              <GitHub color={appBar.textColor} />
            </IconButton>
          }
          onLeftIconButtonTouchTap={handleOpenAppBar}
          zDepth={0}
          onTitleTouchTap={handleRequestHome}
          style={{
            position: 'fixed',
            top: 0
          }}
        />
        <AppBarDrawer
          pathname={pathname}
          handleCloseAppBar={handleCloseAppBar}
          handleOpenAppBar={handleOpenAppBar}
          handleRequestHome={handleRequestHome}
        />
        {IndexChildren}
        <div
          style={{
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            ...this.getStyle()
          }}
        >
         {ReaderChildren}
        </div>
      </div>
    );
  }

  getStyle() {
    const { status, width } = this.props;
    if (status && width !== SMALL) {
      return {
        paddingLeft: 250,
        margin: '0 auto',
        maxWidth: width === MEDIUM ? 560 : 960
      };
    }

    return null;
  }
}

export default withWidth()(MainComponent);
