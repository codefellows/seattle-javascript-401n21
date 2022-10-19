const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export class CookieStand {
  customersEachHour: number[];
  cookiesEachHour: number[];
  totalCookies: number;
  constructor(
    readonly locationName: string,
    readonly minCustomersPerHour: number,
    readonly maxCustomersPerHour: number,
    readonly avgCookiesPerSale: number
  ) {
    this.customersEachHour = hours.map(() =>
      rand(this.minCustomersPerHour, this.maxCustomersPerHour)
    );
    this.cookiesEachHour = this.customersEachHour.map((customers) =>
      Math.floor(customers * this.avgCookiesPerSale)
    );
    this.totalCookies = this.cookiesEachHour.reduce((a, b) => a + b, 0);
  }
}

export const Cookies = ({ stores }: { stores: CookieStand[] }) => (
  <table>
    <thead>
      <tr>
        <th key="a"></th>
        {hours.map((h) => (
          <th key={h}>{h}</th>
        ))}
        <th key="z">Total</th>
      </tr>
    </thead>
    <tbody>
      {stores.map((store) => (
        <tr key={store.locationName}>
          <td key="a">{store.locationName}</td>
          {store.cookiesEachHour.map((cookies, i) => (
            <td key={i}>{cookies}</td>
          ))}
          <td key="z">{store.totalCookies}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <th key="a"></th>
        {hours.map((_, i) => (
          <td key={i}>
            {stores.reduce((sum, store) => sum + store.cookiesEachHour[i], 0)}
          </td>
        ))}
        <td key="z">
          {stores.reduce((sum, store) => sum + store.totalCookies, 0)}
        </td>
      </tr>
    </tfoot>
  </table>
);
