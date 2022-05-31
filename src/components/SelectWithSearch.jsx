import React from 'react'
import Select from 'react-select'

function SelectWithSearch(props) {

const disableStyls = `
backgroundColor:#000!important!`

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : ""
  }


  return (
    <Select
      styles={props.disabled ? disableStyls : props.className}
      isDisabled={props.disabled}
      options={props.options}
      value={defaultValue(props.options, props.value)}
      onChange={e => props.onchange(e)}
    />
  )
}

export default SelectWithSearch