import React, { Component } from 'react'

export default class Calcul extends Component {
    
    state = {
        capital:0,
        taux:0,
        duree:0,
        mensualite:0
    }

    handleOnChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name] : value})
    }

    calucler = () => {

        const mensualite = (this.state.capital * this.state.taux / 1200) / (1 - Math.pow((1+this.state.taux/1200), -this.state.duree))

        this.setState({mensualite})

    }

    initialiser = () => {
        this.setState({
            capital:0,
            taux:0,
            duree:0,
            mensualite:0
        })
    }

    render() {
        return (
            <div className='calcul'>
                <div className='form'>
                    <div className='group'>
                        <label htmlFor="capital">Capital : </label>
                        <input type="number" name="capital" id="capital" value={this.state.capital} onChange={this.handleOnChange}/>
                    </div>
                    <div className='group'>
                        <label htmlFor="taux">Taux d'interet : </label>
                        <input type="number" name="taux" id="taux" value={this.state.taux} onChange={this.handleOnChange} />
                    </div>
                    <div className='group'>
                        <label htmlFor="duree">Durée : </label>
                        <input type="number" name="duree" id="duree" value={this.state.duree} onChange={this.handleOnChange} />
                    </div>
                    <div className='btns'>
                        <button onClick={this.calucler}>Calculer</button>
                        <button onClick={this.initialiser}>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor="mensualite">Mensualité : </label>
                        <input type="number" name="mensualite" id="mensualite" value={this.state.mensualite.toFixed(2)} onChange={this.handleOnChange} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}
