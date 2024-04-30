---
sidebar_position: 2
title: Autohide
---

## General description

Basic hook, that allows you to manage visiblity state of smth, e.g. dialog, modal or popup. Additionaly, it automatically hides after specified amount of time (default is 5000 ms.)

## Usage example

```jsx
export const ComponentWithVisiblityManagement = () => {
    const [ isToastVisible, showToast, hideToast ] = useAutohide(200);

    return (
        <>
            <button type="button" onClick={showToast}>Click me!</button>
            <Toast visible={isToastVisible} onClose={hideToast} />
        </>
    )
};
```

## API

### useAutohide

```ts
declare function useShowable(time: number): [boolean, () => void, () => void];
```

#### Arguments

|arg|type|description|
|:--|:---|:----------|
|`time`|`number`|An interval, after which visibility will be changed to false|


Returns a tuple with current visibility status, show function and hide function.