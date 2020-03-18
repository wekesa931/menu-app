import * as React from 'react';
import CheckBox from '../shared/CheckboxHelper';
import Choices from '../Choices/Choices';
import checkTick, { MenuItem } from '../Helpers/MenuHelper';

export interface IProps {
  related: MenuItem[] | undefined;
  className: string;
}
 
const Related = (props: IProps) => {
  return ( 
    <div style={{ marginLeft: "10px"}}>
      <p>You might also want</p>
      {props.related && props.related.map((menuItem: MenuItem) => (
        <React.Fragment key={menuItem.name}>
        <CheckBox
          className={`${props.className}-${props.className}`}
          id={menuItem.name}
          onClick={() => checkTick(menuItem.name)}
          label={menuItem.name}
        />
        <div 
          className={`menu-foods-${menuItem.name} hide`}
          style={{ marginLeft: "10px"}}>
          <Choices choices={menuItem.choices} className={`${menuItem.name}`} categoryClassName={`${props.className}`}/>
        </div>
      </React.Fragment>
      ))}
    </div>
   );
}
 
export default Related;