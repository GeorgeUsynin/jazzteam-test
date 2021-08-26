import React from 'react';
import cls from './Info.module.css'


export const Info = () => {
    return (
        <div className={cls.infoContainer}>
            <h1>Basic Hooks</h1>
            <h3>useState</h3>
            <p>Returns a stateful value, and a function to update it.
                During the initial render, the returned state (state) is the same as the value passed as the first
                argument (initialState).
                The setState function is used to update the state. It accepts a new state value and enqueues a re-render
                of the component.
                During subsequent re-renders, the first value returned by useState will always be the most recent state
                after applying updates.
            </p>
            <h3>useEffect</h3>
            <p>Accepts a function that contains imperative, possibly effectful code.
                Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body
                of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and
                inconsistencies in the UI.
                Instead, use useEffect. The function passed to useEffect will run after the render is committed to the
                screen. Think of effects as an escape hatch from React’s purely functional world into the imperative
                world.
                By default, effects run after every completed render, but you can choose to fire them only when certain
                values have changed.
            </p>
            <h3>useCallback</h3>
            <p>Returns a memoized callback.
                Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the
                callback that only changes if one of the dependencies has changed. This is useful when passing callbacks
                to optimized child components that rely on reference equality to prevent unnecessary renders (e.g.
                shouldComponentUpdate).
            </p>
        </div>
    )
}
