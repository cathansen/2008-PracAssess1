import { dataFetcher } from "./../../utils/dataFetcher";
import listItemTemplate from "./../../templates/listItemTemplate";
import render from "./../../utils/render"

const toDoList = async function () {
    const root = document.querySelector('#list')
    const itemData = await dataFetcher('toDo.json')
    
    for (idx = 0; idx < itemData.length; idx += 1){
    const listItem = render(listItemTemplate, itemData[idx])
    const category = itemData[idx].category;
    listItem.classList.add(category);

    console.log(listItem.classList)

    root.append(listItem)
    }
    // return await itemData.json()

}

export default toDoList