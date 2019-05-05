class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    //Why itemElement???because itemElement refers to the specific data-tab of the tabItem we are looking for. so when we click on the link, it will refer to the correct content. ALSO CRYSTAL- because if you looked at the instructions, that's what it said to do:)

    // Add a click event listener on this instance, calling the select method on clickS
    this.itemElement.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links

    Array.from(links).forEach(tab =>
      tab.classList.remove("tabs-link-selected")
    );
    // Need to learn how to do this from scratch... Need practice


    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");

    // Call the select method on the item associated with this link
    //NEED TO FIGURE THIS OUT>>> DON'T UNDERSTAND
    this.tabItem.select(this.itemElement);
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove("tabs-item-selected"));


    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tab-links");

links.forEach(link => {
  new TabLink(link);
});