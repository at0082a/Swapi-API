import React, {Component} from "react";

export default class Person extends React.Component {
  render () {
    return (
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs" id="person-details" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#history" role="tab" aria-controls="history" aria-selected="false">History</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#deals" role="tab" aria-controls="deals" aria-selected="false">Deals</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h4 className="card-title">Bologna</h4>
        <h6 className="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
        
        <div className="tab-content mt-3">
          <div className="tab-pane active" id="description" role="tabpanel">
            <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
            <a href="#" className="card-link text-danger">Read more</a>
          </div>
          
          <div className="tab-pane" id="history" role="tabpanel" aria-labelledby="history-tab">  
            <p className="card-text">First settled around 1000 BCE and then founded as the Etruscan Felsina about 500 BCE, it was occupied by the Boii in the 4th century BCE and became a Roman colony and municipium with the name of Bononia in 196 BCE. </p>
            <a href="#" className="card-link text-danger">Read more</a>
          </div>
          
          <div className="tab-pane" id="deals" role="tabpanel" aria-labelledby="deals-tab">
            <p className="card-text">Immerse yourself in the colours, aromas and traditions of Emilia-Romagna with a holiday in Bologna, and discover the city's rich artistic heritage.</p>
            <a href="#" className="btn btn-danger btn-sm">Get Deals</a>
          </div>
        </div>
      </div>
    </div>
  )
 }
}