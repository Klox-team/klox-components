import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'

/**
 * Klox contained button
 */

export const Button = (props) => {
  const { color, disabled, size, label, onClick } = props

  return (
    <MaterialButton
      variant='contained'
      color={color}
      disabled={disabled}
      size={size}
      onClick={() => onClick}
      {...props}
    >
      {label}
    </MaterialButton>
  )
}

Button.propTypes = {
  /**
   * Material ui default colors theme for button
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit', 'default']),
  /**
   * Is this button disabled ?
   */
  disabled: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  size: 'medium',
  onClick: undefined
}
