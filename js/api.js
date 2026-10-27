const DELAY_MS = 150;
const cache = {};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Each JSON file is fetched once; later calls return the same in-memory objects.
const load = (name) =>
  (cache[name] ??= wait(DELAY_MS)
    .then(() => fetch(`data/${name}.json`))
    .then((response) => response.json()));

export const getBooks = () => load('books');
export const getLoans = () => load('loans');
export const getMembers = () => load('members');

export async function returnLoan(loanId) {
  const loans = await getLoans();
  await wait(DELAY_MS);
  loans.find((loan) => loan.id === loanId).returned = true;
}
