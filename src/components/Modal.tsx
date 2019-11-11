import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import { useClickOutside } from "../hooks/useClickOutside";
import { isKey, Keys } from "../utils/keys";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal = ({ open, onClose, title, children, footer }: ModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  useClickOutside(panelRef, onClose, open);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (isKey(event, Keys.Escape)) {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className="fui-modal-overlay">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className="fui-modal"
      >
        <div className="fui-modal__header">
          <h2 className="fui-modal__title">{title}</h2>
          <button type="button" aria-label="Close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={cn("fui-modal__body")}>{children}</div>
        {footer ? <div className="fui-modal__footer">{footer}</div> : null}
      </div>
    </div>,
    document.body,
  );
};

Modal.displayName = "Modal";
