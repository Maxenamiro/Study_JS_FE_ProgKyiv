import "./styles.css";

const months = {
  title: "Months:",
  values: ["September", "October", "November", "December", "Other months..."]
};

const weekDays = {
  title: "Week Days:",
  values: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
};

const zodiacSigns = {
  title: "Zodiac Signs:",
  values: ["Pisces", "Cancer", "Other signs..."]
};

const List = ({ list }) => {
  return (
    <div>
      <h2>{list.title}</h2>
      <ul>
        {list.values.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <List list={months} />
      <List list={weekDays} />
      <List list={zodiacSigns} />
    </div>
  );
}
