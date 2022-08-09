# Interview 02

Validate whether or not a Linked List is palindrome.

## Specifications

- Read all of the following instructions carefully.
- Act as an interviewer, giving a candidate a code challenge
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate

## Feature Tasks

- Ask the candidate to write a function to validate whether or not a Linked list is palindrome
- Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
  - A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
- Avoid utilizing any of the built-in methods available in your language.
- This problem can be solved using different approaches:
  - Using a helper data structure (Array or Linked List) to keep track of the nodes.
    - This method takes O(n) and uses O(n) extra space.
  - Reversing the Linked List, and checking for equality of the reversed part.

## Structure

Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

## Example

| Input | Output |
|-----|----|
| `head->{t}->{a}->{c}->{o}->{c}->{a}->{t}` | `TRUE` |
| `head->{m}->{o}->{o}->{m}` | `TRUE` |
| `head->{h}->{o}->{u}->{s}->{e}` | `FALSE` |

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete.
