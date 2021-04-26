import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles';
import { AppBar, Box, Hidden, Typography } from '@material-ui/core';
// import { Button } from '../Button/Button'

const HeaderAppBar = styled(AppBar)(props => {
    return {
        flexDirection: 'row',
        minHeight: '64px',
        justifyContent: 'space-between',
        ...props.style
    }
});

const LeftContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '16px',
})

const SubTitle = styled(Box)({
    marginTop: '4px',
    fontFamily: 'poppins'
})

const RightContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '16px'
})

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobile: false
        }
    }

    render() {
        const { loggedIn, logo, subTitle, clickConnect, ...cssProps } = this.props;

        return (
            <HeaderAppBar position="absolute" style={cssProps}>
                <LeftContainer>
                    <img
                        style={{ marginTop: '8px', }}
                        src={logo}
                        width="100"
                        height="24"
                        alt="Klox Entertainment - Data - Technology - Advertising"
                    />
                    <SubTitle>{subTitle}</SubTitle>
                </LeftContainer>
                <RightContainer>
                    {/* {!loggedIn &&
                        <Button color='default' onClick={clickConnect} label="Connexion" />
                    } */}
                    {loggedIn &&
                        <div>Logged in</div>
                    }
                </RightContainer>
            </HeaderAppBar>
        );
    }
}

Header.propTypes = {
    /*
    ** Optional logged in option, default false
    */
    loggedIn: PropTypes.bool,
    /*
    ** Optional logo path
    */
    logo: PropTypes.string,
    /*
    ** Optional logo path
    */
    subTitle: PropTypes.string,
    /*
    **  Function to apply to on click event of connection button
    */
    clickConnect: PropTypes.func
}

Header.defaultProps = {
    loggedIn: false,
    backgroundColor: 'black',
    subTitle: 'Campaign Manager',
    logo: '/assets/klox-logo-white.png',
    clickConnect: () => { alert('Redirection to signin page') }
}