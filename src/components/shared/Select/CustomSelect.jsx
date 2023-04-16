import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { DropDownIndicator } from './components';

const Container = styled.div`
min-width: 164px;
`

const CustomSelect = (props) => {

  const { disabled: isDisabled, onSelectChange,options,components: childComponents,showIndicatorSeperator, ...restProps } = props;
  const selectProps = {
    isDisabled,
    components: {
      DropdownIndicator : DropDownIndicator,
      IndicatorSeparator : showIndicatorSeperator,
      ...childComponents
    },
    options,
    onChange: onSelectChange,
    ...restProps
  };
 
  return (
    <Container>
      <Select
        {...selectProps}
      />

    </Container>
  )
}
CustomSelect.defaultProps = {
  components: {},
  options: [], // [{label: '', value: ''}]
  onSelectChange: ()=>{},
  placeholder: '',
  noOptionsMessage: () => 'No results found',
  isClearable: false,
  showIndicatorSeperator : false
};
export default CustomSelect