import * as React from 'react';
import * as ReactDOM from 'react-dom';

const defaultOptions = {
  timeout: 3000,
};

interface IUseToast {
  timeout?: number;
}

function useToast({ timeout }: IUseToast = defaultOptions) {
  const [show, setShow] = React.useState(false);
  const [mountNode, setMountNode] = React.useState<null | HTMLElement>(null);

  const timeoutIdRef = React.useRef<any>(null);

  const triggerToast = React.useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
      setShow(false);
    }

    const timeoutId = setTimeout(() => {
      setShow(false);
      // if (!timeoutIdRef.current) {
      if (mountNode) {
        setMountNode(null);
        timeoutIdRef.current = null;
        mountNode.remove();
      }

      // }
    }, timeout);

    setShow(true);
    // setMessage(message);
    timeoutIdRef.current = timeoutId;
  }, [timeoutIdRef, timeout, mountNode]);

  // uwc-debug
  React.useEffect(() => {
    if (show) {
      const div = document.createElement('div');
      const divId = new Date().getTime();
      div.id = `${divId}`;
      document.body.appendChild(div);
      setMountNode(div);
    } else {
      if (mountNode) {
        setMountNode(null);
        timeoutIdRef.current = null;
        mountNode.remove();
      }
    }
  }, [show]);

  function toastRender(): Function {
    const elem = mountNode;
    return (Component: React.ReactElement) => {
      if (mountNode && elem && Component) {
        return ReactDOM.createPortal(Component, elem);
      }
      return null;
    };
  }

  return [triggerToast, toastRender];
}

export { useToast };

// function CopyLink({ onCopy, hasCopied, ToastComponent, copyLinkText, testId }) {
// 	const [triggerToast, toastRender] = useToast();

// 	const finalToast = toastRender();

// 	React.useEffect(() => {
// 		if (hasCopied) {
// 			triggerToast();
// 		}
// 		return () => {};
// 	}, [hasCopied, triggerToast]);

// 	return (
// 		<>
// 			<ShareActionLink
// 				onClick={() => {
// 					onCopy();
// 				}}
// 				data-testid={testId}
// 			>
// 				<ShareIcon className="seq-chain" />
// 				<ShareText>{copyLinkText || 'Copy Link'}</ShareText>
// 			</ShareActionLink>
// 			{finalToast(ToastComponent || <SuccessToastComponent />)}
// 		</>
// 	);
// }
