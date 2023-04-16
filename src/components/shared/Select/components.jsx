import {components} from 'react-select';
import { DownArrow16 } from '../../../SvgIcons';


const DropDownIndicator = (props)=>{
    
    const { selectProps: { menuIsOpen }} = props;
    const dropdownArrowDirectionStyleq = {
        transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
      };
    return <components.DropdownIndicator {...props}>
        <DownArrow16 style={dropdownArrowDirectionStyleq}/>
    </components.DropdownIndicator>
}

export {DropDownIndicator};