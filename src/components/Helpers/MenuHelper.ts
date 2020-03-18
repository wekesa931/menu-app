const checkTick = (name: string) => {
  const checkBoxElement: HTMLInputElement = document.getElementById(`${name}`) as HTMLInputElement;
  const choiceFoodsItems: HTMLInputElement  = document.querySelector(`.menu-foods-${name}`) as HTMLInputElement;
  const relatedFoodsItems: HTMLCollectionOf<HTMLInputElement>  = document.getElementsByClassName(`${name}-${name}`) as HTMLCollectionOf<HTMLInputElement>;

  if(checkBoxElement){
    if (checkBoxElement.checked) {
      choiceFoodsItems.classList.toggle("hide");
    } else {
      choiceFoodsItems.classList.toggle("hide");
      Array.from(relatedFoodsItems).forEach(node => (node.checked = false));
    }
  } 
};

export default checkTick;

export interface MenuItem {
  name: string;
  choices: { name: string}[];
  related?: MenuItem[];
}