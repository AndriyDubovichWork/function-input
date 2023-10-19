import { evaluate } from 'mathjs';

function calculate(input: string, autocomplete: Autocomplete[]) {
  autocomplete.map(({ name, value }) => {
    input = input.replace(name, String(value));
  });
  try {
    return evaluate(input);
  } catch (e) {
    return 'incorrect';
  }
  //   return input;
}

export default calculate;
