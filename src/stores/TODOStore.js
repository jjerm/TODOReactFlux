import {ReduceStore} from 'flux/utils';
import Dispatcher from '../dispatcher/dispatcher'

import {addAction,removeAction,deleteAction} from '../actions/TODO-actions'

class TODOStore extends ReduceStore{
    constructor(){
        super(Dispatcher)
    }

    getInitialState(){
        return [
            {id: 1, what: 'Купить сыр', flag:false}
        ]
    }

    reduce(state, action){

        switch (action.type) {
            case 'ADD_ACTION':
                return[
                    ...state,
                    {
                        id:state.length+1,
                        what:action.data.what,
                        flag:false
                    }
                ];
            case 'REMOVE_ACTION':
                return [
                    ...state.map(act => {
                        if(act.id===action.data.id)
                        {
                            return {
                                id: act.id,
                                what: act.what,
                                flag: !act.flag,
                            };
                        }
                        return act
                    }),
                ];
            case 'DELETE_ACTION':
                return [
                    ...state.filter(act => act.id!==action.data.id)
                ];
            default: return state;
        }
    }
}

export default new TODOStore();