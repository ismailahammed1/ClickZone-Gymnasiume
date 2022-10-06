import React from 'react';

const QustionComponent = () => {
    return (
<div className=" bg-gray-300 justify-center items-center p-2 ">
<div className='m-5 text-left'>
<h1 className='underline m-4 font-bold'>
How does React work ?
</h1>
        <li className="ml-9">React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</li>
        <h1 className='underline m-4 font-bold'>
        Difference between props and state:
</h1>
        <li className="ml-9"><span className='underline font-bold' >props:</span>The Data is passed from one component to another.
        It is Immutable (cannot be modified).
        Props can be used with state and functional components.
        Props are read-only.
<br></br>
        <span className='underline m-5 font-bold'>state</span> The Data is passed within the component only.
        It is Mutable ( can be modified).
        State can be used only with the state components/class component (Before 16.0).
        State is both read and write.
        </li>
        <h1 className='underline m-4 font-bold'>
How does React work ?
</h1>
        <li className="ml-9">The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope.There is a dependency array to control when the effect should run. It runs when the component is mounted and when it is re-rendered while a dependency of the useEffect has changed.</li>
     
</div>
    </div>

    );
};

export default QustionComponent;