"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface PopoverProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}

export default function Popover(props: PopoverProps) {
  const { triggerElement, children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={triggerRef}
        className="cursor-pointer"
      >
        {triggerElement}
      </button>
      {isOpen && (
        <div
          className="absolute cursor-auto border-[#2c2f4f] border rounded-xl bg-[#1d293d] top-full left-1/2 z-20 -translate-x-1/2 p-3 w-[20rem]"
          ref={popoverRef}
        >
          {children}
        </div>
      )}
    </div>
  );
}
