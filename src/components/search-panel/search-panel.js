import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '' // это состояние необходимо поднимать до компонента app
        }
    }

    onUpdateSearch = (e) => { // чтобы правильно все обновлялось. Не то же самое, что функция в app.js. Для того, чтобы менять состояние тут(локальное) и потом менять value в input
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term); // вызываем функцию из app.js!!! пробрасывает локальное состояние наверх
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input" // эти классы идут из библы bootstrap
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;