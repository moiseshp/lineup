// import CloseIcon from '@/components/icons/components/Close';

interface ModalProps {
  title?: string;
  onClose: () => void;
  onAccept?: () => void;
  acceptButtonText?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  onAccept,
  acceptButtonText,
  children,
}) => {
  return (
    <dialog className="modal modal-bottom modal-open">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          {/* <CloseIcon /> */}
        </button>
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <div className="py-4">{children}</div>
        {Boolean(acceptButtonText) && (
          <div className="modal-action flex justify-center">
            <button
              className="btn btn-block btn-neutral rounded-full font-extrabold text-white"
              onClick={onAccept}
            >
              {acceptButtonText}
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default Modal;
