import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onUpdateSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemPrors} = item; // частичная деструктуризация
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/> 
            <EmployeesListItem 
            key={id} 
                {...itemPrors}
            onDelete={() => onDelete(id)}
            onUpdateSalary={(e) => onUpdateSalary(id, e.target.value)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
            {/* <EmployeesListItem name="Yurich" salary={800}/>
            <EmployeesListItem name="Anatolich" salary={400}/>
            <EmployeesListItem name="Popich" salary={1500}/> */}
        </ul>
    );
}

export default EmployeesList;