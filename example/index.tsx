import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useToast } from '../.';

export const LinkCopiedToastComponent = styled.div`
  border: 1px solid #0697a2;
  background-color: white;
  padding: 10px;
  border-radius: 4px;

  color: #0697a2;
  font-size: 0.75rem;
`;
function SuccessToastComponent() {
  return (
    <LinkCopiedToastComponent>
      Button Clicked successfully !!
    </LinkCopiedToastComponent>
  );
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
  const [triggerToast2, toastRender2] = useToast();
  // const [counter, setCounter] = React.useState(0);
  const finalToast = toastRender();
  const finalToast2 = toastRender2();

  // uwc-debug
  React.useEffect(() => {
    console.log('wow');
  }, [triggerToast]);
  // React.useEffect(() => {
  // 	if (hasCopied) {
  // 		triggerToast();
  // 	}
  // 	return () => {};
  // }, [triggerToast]);

  // React.useEffect(() => {
  //   // @ts-ignore
  //   finalToast(<SuccessToastComponent />);
  // }, [counter]);

  return (
    <>
      <button
        onClick={() => {
          // setCounter(c => c + 1);
          triggerToast();
        }}
      >
        Click me
      </button>

      <button
        onClick={() => {
          // setCounter(c => c + 1);
          triggerToast2();
        }}
      >
        Click me 2
      </button>
      {/* @ts-ignore */}
      {finalToast(<SuccessToastComponent />)}
      {finalToast2(<SuccessToastComponent />)}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
