import Image from 'next/image';
import upArrow from '../../public/up-arrow.svg';
import React from 'react';

interface FormInputProps {
  onNext: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  type: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  labelText: string;
}

export default function FormInput({ onNext, inputRef, placeholder, type, onKeyDown, labelText }: FormInputProps) {
  return (
    <>
      <div className="text-input-section">
        <p className="bagoss-text">{labelText}</p>
      </div>
      <div className="input-field-section relative">
        <input
          type={type}
          placeholder={placeholder}
          className="border border-white rounded-md w-full p-4 pr-12"
          ref={inputRef}
          onKeyDown={onKeyDown} />
        <button
          type="button"
          onClick={onNext}
          className="button-next absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer">
          <Image src={upArrow} alt="Up Arrow Icon" width={20} height={20} />
        </button>
      </div>
    </>
  );
}