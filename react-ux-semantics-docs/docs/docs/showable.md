---
sidebar_position: 1
title: Showable
---

## General description

Basic hook, that allows you to manage visiblity state of smth, e.g. dialog, modal or popup. It provides you current state, and two function for showing or hiding your stuff.

## Usage example

```jsx
export const ComponentWithVisiblityManagement = () => {
    const [ isDialogVisible, showDialog, hideDialog ] = useShowable();

    return (
        <>
            <button type="button" onClick={showDialog}>Click me!</button>
            <Dialog visible={isDialogVisible} onClose={hideDialog} />
        </>
    )
};
```

## API

### useShowable

```ts
declare function useShowable(): [boolean, () => void, () => void];
```

Returns a tuple with current visibility status, show function and hide function.