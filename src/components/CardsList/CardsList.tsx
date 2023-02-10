import Card from 'components/Card/Card';

const CardsList = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 mt-4">Choose your army</h3>
      <div className="grid grid-cols-3 gap-6">
        <Card type="archers" />
        <Card type="cavalry" />
        <Card type="pikemen" />
      </div>
    </div>
  );
};

export default CardsList;
