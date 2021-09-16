const URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeople = (): Promise<Person[]> => {
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
}