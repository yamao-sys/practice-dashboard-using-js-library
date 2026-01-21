import { JSX, memo } from 'react';
import BaseErrorMessage from '../BaseErrorMessage';

type Props = {
  label: string;
  id: string;
  validationErrorMessages: string[];
} & JSX.IntrinsicElements['input'];

const BaseFormInput = memo(function BaseFormInput({
  label,
  id,
  validationErrorMessages,
  ...props
}: Props) {
  return (
    <>
      <label
        htmlFor={id}
        className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'
      >
        <span className='font-bold'>{label}</span>
      </label>
      <input
        id={id}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        {...props}
      />
      {validationErrorMessages.length > 0 && (
        <div className='w-full pt-5 text-left'>
          {validationErrorMessages.map((message, i) => (
            <BaseErrorMessage key={i} message={message} />
          ))}
        </div>
      )}
    </>
  );
});

export default BaseFormInput;
