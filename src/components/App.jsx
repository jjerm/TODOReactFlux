import React, {Component} from 'react';

import {Container} from 'flux/utils';
import {addAction,removeAction,deleteAction} from '../actions/TODO-actions'

import TODOStore from '../stores/TODOStore';
import './styles/style.css'


class App extends Component {

    static getStores(){
        return [TODOStore]
    }

    static calculateState(prevState){
        return{
            actions:TODOStore.getState(),
            what:'',
            flag:false
        }
    }

    constructor(){
        super();

        this.handleChangeName = this.handleChangeName.bind(this);
        this.addNewAction = this.addNewAction.bind(this);
        this.removeAction = this.removeAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);

    }

    handleChangeName(e){
        this.setState({what: e.target.value})
    }

    addNewAction(e){
        e.preventDefault();
        addAction(this.state.what);
        this.setState(
            {
                what:''
            }
        )
    }

    removeAction(id){
        removeAction(id);
    }

    deleteAction(id){
        deleteAction(id);
    }

    render() {
        return (
            <div id="app">
                <h1>Список покупок</h1>
                <h3>(Двойнок клик - удаление)</h3>
                <form onSubmit={this.addNewAction}>
                    <label>Добавить в список</label>
                    <input type='text' onChange={this.handleChangeName} value={this.state.what}/>
                    <button type='submit'> Добавить</button>
                </form>


                <div className='action-list'>
                    {
                        this.state.actions.map(
                            el =>
                                <div className={`${el.flag}`} onClick={(e) => this.removeAction(el.id)} onDoubleClick={(e) => this.deleteAction(el.id)}>
                                    {
                                        `${el.what}`
                                    }
                                </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Container.create(App);
