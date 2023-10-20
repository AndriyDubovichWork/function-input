import React from 'react';
import useStore from '../store';
import { getAutocomplete } from '../requests';
import { useQuery } from '@tanstack/react-query';
import calculate from '../lib/calculate';
import { getTags, isOperatorWithCaret, removeTag } from '../lib/tagOperations';
import generateAutocomplete from '../lib/generateAutocomplete';
import isOnEdge from '../lib/isOnEdge';

export default function Input() {
  const { input, setInput, inputArray, setInputArray, inputStr, setInputStr } =
    useStore((state) => state);
  const { data: autocomplete }: { data: undefined | Autocomplete[] } = useQuery(
    {
      queryKey: ['autocomplete'],
      queryFn: getAutocomplete,
    }
  );

  if (!autocomplete) return 'loading';

  return (
    <>
      {inputArray.map((str) => str)}
      <p>{calculate(inputStr, autocomplete)}</p>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        value={inputStr + input}
        onChange={(e) => {
          let mathSymbol = e.target.value.replaceAll(' ', '');
          mathSymbol = mathSymbol[mathSymbol.length - 1];
          if (/[+\-*^/]/.test(mathSymbol)) {
            setInputArray([...inputArray, mathSymbol]);
          } else {
            setInput(e.target.value.replace(inputStr, ''));
          }
        }}
        onKeyDown={(e) => {
          // console.log(e.key);

          switch (e.key) {
            case 'Enter':
              setInputArray([...inputArray, input]);
              break;
            case 'Backspace':
              if (!input) {
                setInputArray(inputArray.slice(0, -1), ' ');
              }
              break;
            case 'ArrowLeft':
              if (!input) {
                e.currentTarget.setSelectionRange(0, 0);
              }
              break;
          }
          const isCursorOnEdge = isOnEdge(
            inputArray,
            e.currentTarget.selectionStart
          );
        }}
        onClick={(e) => {
          const isCursorOnEdge = isOnEdge(
            inputArray,
            e.currentTarget.selectionStart,
            (closest) => {
              e.currentTarget.setSelectionRange(closest, closest);
            }
          );
        }}
      />
      {input &&
        generateAutocomplete(input, autocomplete).map(({ name, id }) => (
          <p
            className='cursor-pointer'
            key={id}
            onClick={() => {
              setInputArray([...inputArray, name]);
            }}
          >
            {name}
          </p>
        ))}
    </>
  );
}
