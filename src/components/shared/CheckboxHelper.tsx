import * as React from 'react';

export interface IProps {
  className?: string;
  id: string;
  label: string;
  onClick?: ()=> void;
}

const CheckBox = (props: IProps) => {
  return ( 
    <>
      <input 
        className={`${props.className}`}
        type="checkbox"
        id={props.id}
        onClick={props.onClick}
      />
      <label>{props.label}</label><br></br>
    </>
   );
}
 
export default CheckBox;