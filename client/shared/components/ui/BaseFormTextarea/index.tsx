import { JSX, memo } from 'react';

type Props = {
  label: string;
  id: string;
  validationErrorMessages: string[];
} & JSX.IntrinsicElements['textarea'];

const BaseFormTextarea = memo(function BaseFormTextarea({
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
      <textarea
        id={id}
        rows={16}
        className='block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        {...props}
      />
      {validationErrorMessages.length > 0 && (
        <div className='w-full pt-5 text-left'>
          {validationErrorMessages.map((message, i) => (
            <p key={i} className='text-red-400'>
              {message}
            </p>
          ))}
        </div>
      )}
    </>
  );
});

export default BaseFormTextarea;
