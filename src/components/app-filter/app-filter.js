//import { Component } from 'react';

import './app-filter.css';

const AppFilter = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filter: 'all'
    //     }
    //     this.activeClass = 'btn btn-light';
    //     this.inactiveClass = 'btn btn-outline-light';
    // }

    // filterEmployees = (e) => {
    //     //console.log(e.target.getAttribute('data-filter'));
    //     //console.log(e.target.classList);
    //     const newFilter = e.target.getAttribute('data-filter');
    //     this.setState({filter: newFilter});
    //     this.props.onFilter(newFilter);
    // }

    // render() {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true}
    ];

    // на базе этих данных формируем массив элементов
    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
                // эту конструкцию все равно лучше вынести в отдельную переменную
                style={colored ? {color: 'red'} : null}> 
                {/* //data-filter="all"
                //onClick={this.filterEmployees} */}
                {label}
            </button>
        );
    });

    return (
        // встроенный в bootstrap класс
        <div className="btn-group"> 
            {buttons}
            {/* <button 
                className={this.state.filter === 'all' ? this.activeClass : this.inactiveClass}
                type="button"
                data-filter="all"
                onClick={this.filterEmployees}>
                Все сотрудники
            </button>
            <button 
                className={this.state.filter === 'increase' ? this.activeClass : this.inactiveClass}
                type="button"
                data-filter="increase"
                onClick={this.filterEmployees}>
                На повышение
            </button>
            <button 
                className={this.state.filter === 'high-salary' ? this.activeClass : this.inactiveClass}
                type="button"
                data-filter="high-salary"
                onClick={this.filterEmployees}>
                З/П больше 1000$
            </button> */}
        </div>
    )
    //}
}

export default AppFilter;