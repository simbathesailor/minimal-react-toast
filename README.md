<h2  align="center">A minimal React Toast Library</h2>

## History

I have worked on many frontend projects which makes use of toasts. But everytime there is a need of toast, we end up using some big library out of which we are using minimal amount of feature. And also these libraries will need so many props. Damn !!. In most of the use cases, the developer needs the flexibility of design toast, which should be as straightforward as writing a React component.
Passing lots of props and trying to adjust them, looks like over kill always.

## Install

```sh
 yarn add @simbathesailor/minimal-react-toast
```

or

```sh
  npm i @simbathesailor/minimal-react-toast
```

## Usage

```jsx
import { useToast } from '@simbathesailor/minimal-react-toast';

function SuccessToastComponent() {
  return <div>Button Clicked successfully !!</div>;
}

function App() {
  const [triggerToast, toastRender] = useToast({
    styleToastContainer: {
      border: '1px solid red',
      position: 'fixed',
      top: '80px',
      left: ' 50%',
      transform: 'translateX(-50%)',
      zIndex: '12',
    },
  });

  const finalToast = toastRender();

  return (
    <>
      <button
        onClick={() => {
          triggerToast();
        }}
      >
        Click me
      </button>

      {finalToast(<SuccessToastComponent />)}
    </>
  );
}
```

## Options

```typescript
const defaultOptions = {
  timeout: 3000,
  idToastContainer: 'minimal-react-toast',
  styleToastContainer: undefined,
};

interface IStyleToastContainer {
  [key: string]: any;
}
interface IUseToast {
  timeout?: number;
  idToastContainer?: string;
  styleToastContainer?: IStyleToastContainer;
}
```

Built with [TSDX](https://github.com/jaredpalmer/tsdx)
