import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render(){
  return(
    <h2>Home</h2>
  );
    }
}