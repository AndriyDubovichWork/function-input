export default function generateAutocomplete(
  searchTerm: string,
  autocomplete: Autocomplete[]
) {
  return autocomplete.filter((autocomplete) =>
    autocomplete.name
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(searchTerm.toLowerCase().replaceAll(' ', ''))
  );
}
