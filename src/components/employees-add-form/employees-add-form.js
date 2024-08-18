import {Component} from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss'; // при импорте такого файла получим ошибку Module not found: Error: Can't resolve

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => { // в названии on - негласный стандарт, когда что-то связано с действиями пользователя
        this.setState({
            [e.target.name]: e.target.value // обращаемся к атрибуту name(там лежит то же название, что и в свойстве state). в ES6 используется такой синтаксис с []
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    static onLog = () => {
        console.log('hey')
    }

    static logged = 'on';

    render() {
        const {name, salary} = this.state;

        return (
            // Если мы хотим, чтобы React-компонент рендерил форму и контролировал ее поведение в ответ на пользовательский ввод, то мы должны добавлять атрибут value и в нег опомещать значение state
            // будет работать и без value, НО теперь наш компонент при работе с input будет проходить следующие этапы: - запускается событие onChange -> запускается метод onValueChange -> внутри setState изменяет состояние и перезаписывает его -> setState вызывает метод render -> и если тут в input есть атрибус value, то туда записывается актуальное значение компонента, т.е. значение value-формы input будет в этом случае контролироваться реактом. такой элемент(такой input) будет называться управляемым элементом
            // главное преимущество контролируемых элементов в том, что на все изменения интерфейс будет реагировать мгновенно, потому что state напрямую завязан с ui??? особенно это полезно при валидации данных. Мы введенное значение провалидировали и сразу же его отправили в value.
            // значение полей неуправляемых компонентов хранятся в DOM-дереве
            // т.е. если нет двойной привязки через state - то эти данные будут храниться только в UI
            // единственный ВСЕГДА неуправляемый inout в реакт - это input type = file. Когда пользователь должен в него загрузить какой-то файл
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name' // сделали, чтобы названия этого атрибуса совпадало с названиями свойств объекта
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary' // сделали, чтобы названия этого атрибуса совпадало с названиями свойств объекта
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;