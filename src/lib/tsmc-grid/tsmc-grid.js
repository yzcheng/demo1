import {Grid} from 'ag-grid/main';

class TsmcGrid extends HTMLElement {
  constructor(){}

  // Fires when an instance of the element is created.
  createdCallback() {
    //this.createShadowRoot().innerHTML = `<div></div><ag-grid></ag-grid>`;
    this.innerHTML = `<div class="tsmc-grid.ctrlbar">ctrl bar
    </div>
    <ag-grid></ag-grid>`;
    console.log("createdCallback");
  };
  // Fires when an instance was inserted into the document.
  attachedCallback() {
    // example creating a grid using raw Javascript
    // this example has items declared globally. bad javascript. but keeps the example simple.

    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    var eGridDiv = document.querySelector('tsmc-grid'); // get a reference to the grid div
    //var gridDiv = eGridDiv.shadowRoot.querySelector('ag-grid');
    var gridDiv = eGridDiv.querySelector('ag-grid');
    new Grid(gridDiv, gridOptions); //create a new grid
  };
  // Fires when an instance was removed from the document.
  detachedCallback() {};
  // Fires when an attribute was added, removed, or updated.
  attributeChangedCallback(attr, oldVal, newVal) {};
}
// Register our element with the custom elements API
document.registerElement('tsmc-grid', TsmcGrid);
