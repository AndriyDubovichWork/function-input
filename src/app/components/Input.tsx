import React from 'react';
import useStore from '../store';
import { getAutocomplete } from '../requests';
import { useQuery } from '@tanstack/react-query';
import calculate from '../lib/calculate';
import { getTags, removeTag } from '../lib/tagOperations';

export default function Input() {
  const { input, setInput, tagsCount, setTagsCount } = useStore(
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

  return (
    <>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setTagsCount(getTags(e.target.value).length);
          if (tagsCount < getTags(e.target.value).length) {
            setInput(removeTag(input));
          }
        }}
        onKeyDown={(e) => {
          // console.log(e.currentTarget.value);
          // console.log(input);
        }}
      />
    </>
  );
}
