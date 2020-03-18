import * as React from 'react';
import CheckBox from '../shared/CheckboxHelper';

export interface IProps {
  choices: { name: string }[];
  className: string;
  categoryClassName?: string;
}
 
const Choices = (props: IProps) => {
  return ( 
    <div>
      {props.choices.map((choice: { name: string }) => (
        <React.Fragment key={choice.name}>
          <CheckBox
            className={`${props.className}-${props.className} ${props.categoryClassName}-${props.categoryClassName}`}
            id={choice.name}
            label={choice.name}
          />
        </React.Fragment>
      ))}
    </div>
   );
}
 
export default Choices;