import Dispatcher from '../dispatcher/dispatcher';

export const addAction = (what) => Dispatcher.dispatch (
    {
        type:'ADD_ACTION',
        data:{
            what
        }
    }
);

export const removeAction = (id) => Dispatcher.dispatch(
    {
        type:'REMOVE_ACTION',
        data:{
           id
        }
    }
);

export const deleteAction = (id) => Dispatcher.dispatch(
    {
        type:'DELETE_ACTION',
        data:{
            id
        }
    }
);