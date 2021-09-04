import React, { Component } from 'react';
import banana from './assets/banana.jpg';
import apple from './assets/apple.jpg';
import watermelon from './assets/watermelon.jpg';
import orange from './assets/orange.jpg';


class Counter extends Component {
    render() { 
        console.log('Counter rendered');
        return (
        <div>
            {this.props.children}
            <br></br>
            <img src={this.determineImage(this.props.counter.id)} width = {100} height={90} position= {'marginCenter'} alt='failed to load image'/>
            <h3> {this.determineItem(this.props.counter.id)}</h3>
            <span style = {{fontSize: 20}}className= {this.getBadgeClasses()} >{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-small">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
            <br></br>
            
        
        </div>
        );
    }

    determineItem(id){
        let item = " ";
        if(id ===1){ item+="Banana"}
        else if (id ===2) {item+="Apple"}
        else if (id ===3) {item+="Watermelon"}
        else {item +="Orange"}
        return item;

    }

    // determines which image item to display
    determineImage(id){
        let image = " ";
        if(id ===1){ image+=banana}
        else if (id ===2) {image+=apple}
        else if (id ===3) {image+=watermelon}
        else {image +=orange}
        return image;
     }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value ===0 ? 'Zero': value;

    }
}
 
export default Counter;
