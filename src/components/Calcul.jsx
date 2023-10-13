import React, { Component } from 'react'

export default class Calcul extends Component {
    
    state = {
       
    }

    handleOnChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name] : value})
    }

    calucler = () => {

       
    }

    initialiser = () => {
        
    }

    render() {
        return (
            <div className='calcul'>
                <div className='form'>
                    <div className='group'>
                        <label htmlFor="poids">Poids : </label>
                        <input type="number" name="poids" id="poids" />
                    </div>
                    <div className='group'>
                        <label htmlFor="distance">Distance : </label>
                        <input type="number" name="distance" id="distance"  />
                    </div>
                    <div className='group'>
                        <label htmlFor="mode">Mode : </label>
                        <input type="radio" name="mode" id="express" value='express'  /> Express
                        <input type="radio" name="mode" id="normal" value='normal' /> Normal
                    </div>
                    <div className='btns'>
                        <button onClick={this.calucler}>Calculer</button>
                        <button onClick={this.initialiser}>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor="cout">Cout total : </label>
                        <input type="number" name="cout" id="cout" readOnly />
                    </div>
                </div>
            </div>
        )
    }
}
