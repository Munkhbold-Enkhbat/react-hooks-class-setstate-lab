import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  // const [selectedCategory, setSelectedCategory] = useState("All");
    
  state = {
    selectedCategory: 'All'
  }  

  handleCategoryChange = (event) => {
    // event.target.value will be the value selected by the user
    console.log("props:", this.props);
    this.setState({
      selectedCategory: event.target.value
    })     
  }
  
  // we want to filter the items to only display the ones based on the selected category
  itemsToDisplay = this.props.items.filter((item) => {
    return (this.state.selectedCategory === "All") ? true : this.state.selectedCategory === item.category;
  });

  render(){
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
         { console.log("this.state.selectedCategory:", this.state.selectedCategory)}
         { console.log("Items to display:", this.itemsToDisplay)}
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {this.itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }  
}

export default ShoppingList;
