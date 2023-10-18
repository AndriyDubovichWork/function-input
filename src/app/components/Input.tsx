import React from 'react';
import useStore from '../store';
import { getAutocomplete } from '../requests';
import { useQuery } from '@tanstack/react-query';
import calculate from '../lib/calculate';
import { getTags, isOperatorWithCaret, removeTag } from '../lib/tagOperations';
import generateAutocomplete from '../lib/generateAutocomplete';

export default function Input() {
  const { input, setInput, inputArray, setInputArray } = useStore(
    (state) => state
  );
  const { data: autocomplete }: { data: undefined | Autocomplete[] } = useQuery(
    {
      queryKey: ['autocomplete'],
      queryFn: getAutocomplete,
    }
  );

  if (!autocomplete) return 'loading';
  // if (autocomplete) console.log(calculate(input, autocomplete));
  // console.log(inputArray);

  return (
    <>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);

          if (isOperatorWithCaret(e.target.value))
            setInputArray([...inputArray, e.target.value]);
        }}
        onKeyDown={(e) => {
          // console.log(e.currentTarget.value);
          // console.log(input);
        }}
      />
      {input &&
        generateAutocomplete(input, autocomplete).map(({ name, id }) => (
          <p
            className='cursor-pointer'
            key={id}
            onClick={() => {
              setInput(input.replace(input, `"${name}"`));
              setInputArray([...inputArray, input]);
            }}
          >
            {name}
          </p>
        ))}
    </>
  );
}
