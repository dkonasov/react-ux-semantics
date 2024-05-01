---
sidebar_position: 3
title: Click to copy
---

## General description

Hook that allows you to implement copy-by-click semantic – when user clicks on the interface element and gets some predefined text copied to clipboard.

## Usage example

```jsx
export const ComponentWithCopyableText = () => {
    const text = 'This text will be copied!';
    const [ clickHandler, copyPromise ] = useClickToCopy(text);

    return (
        <>
            <div>{text}</div>
            <button onClick={clickHandler}>Copy text</button>
        </>
    )
};
```

## API

### useClickToCopy

```ts
declare function useClickToCopy(text: string): [() => void, Promise<void>];
```

#### Arguments

|arg|type|description|
|:--|:---|:----------|
|`text`|`string`|Text to copy|


Returns a tuple with handler for a trigger and promise, which will be resolve when the text will be copied.