# Interview 2: Circus Tower

A circus is designing a tower routing consisting of performers standing on eachother's shoulders.
No performer can be heavier than a performer below them, and for aesthetic reasons, no performer can be taller than a performer below them, either.
Given the heights and weights of each performer, find the largest tower possible.

## Examples

| Height | Weight |
| ------ | ------ |
| 65     | 100    |
| 70     | 150    |
| 56     | 90     |
| 75     | 190    |
| 60     | 95     |
| 68     | 110    |
| 68     | 120    |

Tallest tower:

| H   |
| --- |
| 56  |
| 60  |
| 65  |
| 68  |
| 70  |
| 75  |

## Tests

```
expect(circusTowerCount([
  [
    {height: 65, weight: 100},
    {height: 70, weight: 150},
    {height: 56, weight: 90},
    {height: 75, weight: 190},
    {height: 60, weight: 95},
    {height: 68, weight: 110},
    {height: 68, weight: 120}
  ]
])).toBe(6);
```
