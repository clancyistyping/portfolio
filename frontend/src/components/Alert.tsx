import type { ReactNode } from "react";

interface Props {
  children: ReactNode; // Can pass children of an element to
  onClose: () => void;

}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose} />
    </div>
  )
}

export default Alert;