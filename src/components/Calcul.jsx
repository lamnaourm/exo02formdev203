import React, { Component } from 'react'

export default class Calcul extends Component {
    
    state = {
       poids:0,
       distance:0,
       mode:'normal',
       cout:0
    }

    handleOnChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name] : value})
    }

    calucler = () => {
       
        let cout = 0;
        if(this.state.poids < 10)
            cout = this.state.distance * 0.5;
        else
            cout = this.state.distance * (this.state.poids/10) * 0.3;

        if(this.state.mode === 'express')
            cout += cout*0.2;

        this.setState({ cout})
    }

    initialiser = () => {
        this.setState({poids:0,
            distance:0,
            mode:'normal',
            cout:0});
    }

    render() {
        return (
            <div className='calcul'>
                <div className='form'>
                    <div className='group'>
                        <label htmlFor="poids">Poids : </label>
                        <input type="number" name="poids" id="poids"  value={this.state.poids} onChange={this.handleOnChange}/>
                    </div>
                    <div className='group'>
                        <label htmlFor="distance">Distance : </label>
                        <input type="number" name="distance" id="distance" value={this.state.distance} onChange={this.handleOnChange} />
                    </div>
                    <div className='group'>
                        <label htmlFor="express">Mode : </label>
                        <input type="radio" name="mode" id="express" value='express' checked={this.state.mode ==='express'} onChange={this.handleOnChange}/> Express
                        <input type="radio" name="mode" id="normal" value='normal' checked={this.state.mode ==='normal'} onChange={this.handleOnChange}/> Normal
                    </div>
                    <div className='btns'>
                        <button onClick={this.calucler}>Calculer</button>
                        <button onClick={this.initialiser}>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor="cout">Cout total : </label>
                        <input type="number" name="cout" id="cout" value={this.state.cout} onChange={this.handleOnChange} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}
