import { FormEvent } from "react";

export interface StoreFormValues {
  name: string;
  min: number;
  max: number;
  avg: number;
}

export const Form = ({
  onAddStore,
}: {
  onAddStore: (values: StoreFormValues) => void;
}) => {
  function addStore(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const name = (target[0] as HTMLInputElement).value;
    const min = Number((target[1] as HTMLInputElement).value);
    const max = Number((target[2] as HTMLInputElement).value);
    const avg = Number((target[3] as HTMLInputElement).value);

    onAddStore({ name, min, max, avg });
  }

  return (
    <form onSubmit={addStore}>
      <label>
        Store name <input name="store" />
      </label>
      <br />
      <label>
        Min Customers per hour <input name="min" />
      </label>
      <br />
      <label>
        Max customers per hour <input name="max" />
      </label>
      <br />
      <label>
        Average cookies per sale <input name="avg" />
      </label>
      <br />
      <button type="submit">Add store</button>
    </form>
  );
};
