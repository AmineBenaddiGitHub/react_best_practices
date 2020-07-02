import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {rootReducerI} from '../../reducers'

import {selectFirstname, selectLastname, selectLoader} from '../../reducers/name/nameReducer'
import {updateFirstname, updateLastname} from '../../reducers/name/nameReducer'
import {updateLastnameThunk} from '../../reducers/name/thunk/lastnameThunk';

interface uiComponentsProps {
    firstname: String,
    lastname: String,
    counter: number,
    handleClick: () => void,
    handleSync: () => void,
    handleAsync: () => void,
    handleState: (i: number) => void,
    handleChange: (e: any) => void,
}

const UiPresentation = ({
                            firstname,
                            lastname,
                            counter,
                            handleClick,
                            handleSync,
                            handleAsync,
                            handleState,
                            handleChange,
                        }: uiComponentsProps) => (
    <>
        <div id="render"> I am a functional component, my name is : {firstname} {lastname}.</div>
        <div id="apiController">
            <input type="number" value={counter} onChange={handleChange}/>
            &nbsp;
            <button onClick={() => handleState(1)}> +</button>
            &nbsp;
            <button onClick={() => handleState(-1)}> -</button>
        </div>
        <div id="updater">
            <button onClick={handleClick}> Update first name</button>
            &nbsp;
            <button onClick={handleSync}> Update last name</button>
            &nbsp;
            <button onClick={handleAsync}> I'm feeling lucky</button>
        </div>
    </>
);

export default () => {

    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();
    const firstname = useSelector<rootReducerI, string>(state => selectFirstname(state.nameEntry));
    const lastname = useSelector<rootReducerI, string>(state => selectLastname(state.nameEntry));
    const loader = useSelector<rootReducerI, boolean>(state => selectLoader(state.nameEntry));

    const handleClick = () => dispatch(updateFirstname('Johnny'));
    const handleSync = () => dispatch(updateLastname('McDoe'));
    const handleChange = (event: any) => setCounter(parseInt(event.target.value));
    const handleAsyncT = () => dispatch(updateLastnameThunk(counter));
    const handleState = async (i: number) => setCounter(counter.valueOf() + i);

    return loader
        ? <div>Loading ...</div>
        : <UiPresentation
            firstname={firstname}
            lastname={lastname}
            counter={counter}
            handleClick={handleClick}
            handleSync={handleSync}
            handleAsync={handleAsyncT}
            handleState={handleState}
            handleChange={handleChange}
        />
}


