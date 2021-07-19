import Card from '../card';

function Chart() {
  return (
    <div className="container">
      <Card Food="Pizza 🍕" Cal="56" />
      <Card Food="Soup 🍲" Cal="45" />
      <Card Food="Coke 🥤" Cal="65" />
      <Card Food="Burger 🍔" Cal="78" />
      <Card Food="Cheese 🧀" Cal="89" />
      <Card Food="Butter 🧈" Cal="23" />
      <Card Food="Rice 🍚" Cal="54" />
      <Card Food="Bread 🍞" Cal="21" />
    </div>
  );
}

export default Chart;
