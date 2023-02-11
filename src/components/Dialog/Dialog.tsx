import { FC, useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type DialogProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose(): void;
};

const Dialog: FC<DialogProps> = ({ open, children, title, onClose }) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current!;
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, []);

  const wrapper = (
    <div
      className="fixed flex items-center justify-center left-0 top-0 w-full h-full bg-black bg-opacity-70"
      onClick={onClose}>
      <div className="flex flex-col w-[500px] h-[600px] bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
        <h4 className="border-b border-solid font-medium text-xl p-4 mb-2">{title}</h4>
        <div className="overflow-y-scroll pb-2">{children}</div>
      </div>
    </div>
  );

  if (!open) return null;

  return createPortal(wrapper, elRef.current);
};

export default Dialog;
