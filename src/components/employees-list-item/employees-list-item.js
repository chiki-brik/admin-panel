// import {Component} from 'react';

import './employees-list-item.css';

const EmployeesListItem = (props) => {


    // updateSalary = (e) => {
    //     const salary = e.target.value;
    //     this.setState({salary});
    //     this.props.onUpdateSalary(salary);
    //     // console.log('new slaaru');
    //     // console.log(salary);
    // }

    //render() {
    const {name, salary, onDelete, onToggleProp, increase, rise, onUpdateSalary} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        // отдельные элементы списка
        <li className={classNames}>
            <span 
                onClick={onToggleProp} 
                className="list-group-item-label" 
                data-toggle="rise"
                style={{fontSize: 40, color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all'}} // принимает в себя объект со стилями. Прописываются в формате camelCase!!! Ед.изм. не прописываются, только если это пиксели!!! - иначе пишем с ед.изм. в формате строки, например '40%'. Этот объект, конечно же, можно вынести в переменную и передавать потом сюда
                >{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={onUpdateSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
    // }
}

export default EmployeesListItem;