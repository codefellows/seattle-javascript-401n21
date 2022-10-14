# Interview 1: Sorted Anagrams

## Prompt

Anagrams are phrases where all the letters (ignoring spaces & capitalization) between the two are the same.
For example, "astronomer" and "moon starer", or "school master" and "the classroom".
Given a function that takes a list of strings, sort them so that

1. The list is alphabetical, except
2. Anagrams are adjacent
3. Adjacent anagrams are in alphabetical order

For this assigment, the input strings will already have their punctuation removed and be lower case.

### Example Anagrams

- "Astronomer", "moon starer"
- "School master", "the classroom"
- "Edward Gorey", "ogdred weary"
- "Hamlet", "Amleth"
- “O, Draconian devil!” = Leonardo Da Vinci

### Test

```
expect sortWithAnagrams([
  "astronomer",
  "schoolmaster",
  "edwardgorey",
  “odraconiandevil”,
  "ogdredweary",
  "hamlet",
  "moonstarer",
  "amleth",
  "theclassroom",
  "leonardodavinci",
]).toEqual([
  "amleth", "hamlet",
  "astronomer", "moonstarer",
  "edwardgorey", "ogdredweary",
  "leonardodavinci", “odraconiandevil”,
  "schoolmaster", "theclassroom",
])
```

## Solution

The solution requires first checking if two words are anagrams.

```
function anagram(a: string, b: string): boolean {
  a = a.split("").sort().join();
  b = b.split("").sort().join();

  return a === b;
}
```
