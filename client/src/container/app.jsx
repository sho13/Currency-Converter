import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getRates } from '../actions/exchangeRatesActions';

import CurrencySelector from '../components/currencySelector';

class AppContainer extends Component {
  state = {
    currency: '',
    selectedCountry: '',
    comparedCountry: '',
    exchangedRate: '',
  }

  componentWillMount() {
    this.props.getRates('USD');
  }

  onChangeHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({ [name]: value });

    if (name === 'selectedCountry') this.props.getRates(value);
  };

  convertCurrency = (e) => {
    e.preventDefault();
    
    this.setState({ exchangedRate: `${(parseFloat(this.state.currency) * this.props.countries[this.state.comparedCountry]).toFixed(2)}` })
  }

  render() {
    const { countries } = this.props;

    return (
      <div className="jumbotron">
        <div className="container">
          <h2>Currency Converter</h2>
          
          <form className="form-inline">
            <div className="form-group mx-sm-3">
              <input className="form-control" name="currency" type="number" value={this.state.currency} placeholder={'Type Money Here'} onChange={this.onChangeHandler} ></input>
            </div>

            <div className="form-group mx-sm-3">
              <CurrencySelector name={'selectedCountry'} countries={countries} onChangeHandler={this.onChangeHandler} type={'Select Your Currency'} />

              <div className="form-group mx-sm-3">
                <label className="label">Convert To: </label>
                
                <CurrencySelector name={'comparedCountry'} countries={countries} onChangeHandler={this.onChangeHandler} type={'Select Currency To Convert To'} />
              </div>
            </div>

            <button className="btn btn-primary" onClick={this.convertCurrency}>Convert</button>
          </form>

          <div className="result">
            {this.state.exchangedRate.length > 0 ? (
              <span>
                <h3>{this.state.exchangedRate}</h3> {this.state.comparedCountry}
              </span>) : null 
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.rates
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRates }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)