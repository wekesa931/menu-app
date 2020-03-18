import * as React from "react";
import CheckBox from "./shared/CheckboxHelper";
import Choices from "./Choices/Choices";
import Related from "./Related/Related";
import Menu from './Data/Menu';
import "./menu.css";
import checkTick, { MenuItem } from "./Helpers/MenuHelper";

const MenuComponent = () => {
  const [showChoices, setShowChoices] = React.useState(false);
  const confirmChecked = (name: string)=> {
    const checkBoxElement: HTMLInputElement = document.getElementById(`${name}`) as HTMLInputElement;
    if(checkBoxElement){
      checkBoxElement.checked ? setShowChoices(true) : setShowChoices(false)
    }
  }
  
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Restaurant Menu</h1>
      {Menu.map((menuItem: MenuItem) => (
        <React.Fragment key={menuItem.name}>
          <CheckBox
            id={menuItem.name}
            onClick={() => {
              confirmChecked(menuItem.name)
              checkTick(menuItem.name)}}
            label={menuItem.name}
          />
          <div
            className={`menu-foods-${menuItem.name} hide`}
            style={{ marginLeft: "10px" }}
          >
            <Choices choices={menuItem.choices} className={menuItem.name} />
            {menuItem.related && menuItem.related.length > 0 && (
              <Related related={menuItem.related} className={menuItem.name} />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuComponent;
