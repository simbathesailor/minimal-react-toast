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
  position: fixed;
  top: 80px;
  left: 50%;
  color: #0697a2;
  font-size: 0.75rem;
  z-index: 12;
  transform: translateX(-50%);
`;
function SuccessToastComponent() {
  return (
    <LinkCopiedToastComponent>
      Button Clicked successfully !!
    </LinkCopiedToastComponent>
  );
}

function App() {
  const [triggerToast, toastRender] = useToast();
  const [counter, setCounter] = React.useState(0);
  const finalToast = toastRender();

  // uwc-debug
  React.useEffect(() => {
    console.log('wow');
  }, [counter, triggerToast]);
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
          setCounter(c => c + 1);
          triggerToast();
        }}
      >
        Click me
      </button>
      {/* @ts-ignore */}
      {finalToast(<SuccessToastComponent />)}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
