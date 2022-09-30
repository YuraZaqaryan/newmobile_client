import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

export default function ColorPicker({productColor, onChange, colorName}) {
    const [picker, setPicker] = useState({displayColorPicker: false, color:{
        r: productColor.r,
        g: productColor.g,
        b: productColor.b,
        a: productColor.a,
    }})
   const handleClick = () => {
        setPicker({ ...picker, displayColorPicker: !picker.displayColorPicker })
      };
    const handleClose = () => {
        setPicker({ ...picker, displayColorPicker: false })
      };
    const handleChangeColor = (color) => {
        setPicker({...picker, color: color.rgb })
        onChange({...color}, colorName)
      };
    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ picker.color.r }, ${ picker.color.g }, ${ picker.color.b }, ${ picker.color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
      return (
        <div>
          <div style={ styles.swatch } onClick={ handleClick }>
            <div style={ styles.color } />
          </div>
          { picker.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ handleClose }/>
            <SketchPicker color={ picker.color } onChange={ (e) => handleChangeColor(e, colorName) } />
          </div> : null }
        </div>
      )
}
