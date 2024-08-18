import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {name: "Yurich", salary: 800, increase: false, rise:true, id: 1},
                {name: "Anatolich", salary: 1400, increase: true, rise:false, id: 2},
                {name: "Popich", salary: 1500, increase: false, rise:false, id: 3}
            ],
            term: '', // строка поиска
            filter: 'all'
        }
        this.maxId = 4; // это не пропс а просто свойство обхекта класса!!!
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id); 
            
            // соблюдение принципа иммутабельности - сохранить старый объект невредимым
            // 1 варант
            // const before = data.slice(0, index); // slice - возвращает нвоый массив!!!!!
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // 2 варант
            return {
                data: data.filter(item => item.id !== id) // filter - возвращает новый массив!!
            }
        });
    }

    addItem = (name, salary) => {
        if (name.length >= 3 && salary.lenght !== 0) {
            this.setState(({data}) => {
                return {
                    data: [...data.slice(), {
                        name: name,
                        salary: salary,
                        increase: false,
                        rise: false,
                        id: this.maxId++
                    }]
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]} // квадратные скобки - возможность в ключ обхекта динамически помещать другие сущности ES6. Это так называемый синтаксис вычисляемого, динамического свойства.
                }
                return item;
            })
        }));
    }

    onUpdateSalary = (id, newSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: newSalary.slice(0, -1)};
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) { // условие, если ничего не введено, либо пользователь стер все
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1; // indexOf - метод строки, который позволяет искать подстроки
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term}); // term: term - сокращенная запись этого варианта
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                    />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    {/* // onFilter={this.onFilter} */}
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/> 
                </div>
    
                <EmployeesList 
                    data={visibleData} // data заменили на visibleData
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}/>
    
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;