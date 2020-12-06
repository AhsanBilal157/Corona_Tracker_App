import React from "react";
import { fetchData } from "./api";
//Import Components
import Cards from "./papers";
import Chart from "./Chart";
import CountryPicker from "./CountryPicker";
import Header from  './Headers';
import Footer from './Footer';


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div
        styles={{
          display: "flex",
          alighItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <br />
        <br />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /><br/>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
export default App;