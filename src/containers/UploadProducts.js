import React from "react";
import axios from "axios";
import CustomerInput from "../components/CustomerInput";

class UpdaodComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      category: "",
      sizes: [],
      stock: 0,
    };
  }

  checkButtonState = () => {
    const stateObj = Object.values(this.state);
    return stateObj.some((item) => item.length === 0 || item === 0);
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.name === "stock" || e.target.name === "price") {
      this.setState({ [e.target.name]: parseInt(value) });
    }
    if (name === "sizes") {
      const sizeList = value.replace(/\s+/g, "").split(",");
      this.setState({ [e.target.name]: sizeList });
    }

    if (name === "category" || name === "name") {
      this.setState({ [e.target.name]: value }, () => console.log(this.state));
    }
  };

  uploadProduct = async (product) =>
    axios.post("https://60682ee10add49001733fc41.mockapi.io/products", {
      ...product,
    });

  renderInput = () => {
    return Object.keys(this.state).map((item) => {
      return (
        <CustomerInput
          className={`${item}Container`}
          onChangeFunc={this.handleInputChange}
          value={this.state[item]}
          name={item}
        />
      );
    });
  };
  render() {
    const buttonState = this.checkButtonState();
    return (
      <div className="uploadContainer">
        {/*  Am inlocuit lista de elemente HTML cu un Generic Component
        <div className="nameContainer">
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          />
        </div>
        <div className="priceContainer">
          <input
            onChange={this.handleInputChange}
            value={this.state.price}
            placeholder={this.state.price ? this.state.price : 0}
            name="price"
          />
        </div>
        <div className="categoryContainer">
          <input
            onChange={this.handleInputChange}
            value={this.state.category}
            name="category"
          />
        </div>
        <div className="sizeContainer">
          <input
            onChange={this.handleInputChange}
            value={this.state.size}
            name="sizes"
          />
        </div>
        <div className="stockContainer">
          <input
            onChange={this.handleInputChange}
            value={this.state.stock}
            name="stock"
            type="Number"
          />
        </div> */}
        {this.renderInput()}
        <div>
          <button
            onClick={() => this.uploadProduct({ ...this.state })}
            disabled={buttonState}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}

export default UpdaodComponent;
