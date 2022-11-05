import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { beastsSlice } from "./beastsSlice";

export const Horns = () => {
  const selectedHorns = useAppSelector((state) => state.beasts.selectedHorns);
  const dispatch = useAppDispatch();

  return (
    <select
      onChange={(e) => {
        let horns = e.target.value === "" ? undefined : Number(e.target.value);
        dispatch(beastsSlice.actions.selectHorns(horns));
      }}
    >
      <option value="" selected={selectedHorns === undefined}>
        All
      </option>
      <option value="1" selected={selectedHorns === 1}>
        1
      </option>
      <option value="2" selected={selectedHorns === 2}>
        2
      </option>
      <option value="100" selected={selectedHorns === 100}>
        100
      </option>
    </select>
  );
};
