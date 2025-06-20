export default function Filter({ setCategory, Categories }) {
  function changeCategory(category) {
    setCategory(category);
  }
  return (
    <div>
      <button onClick={() => changeCategory(Categories.DEFAULT)}>All</button>
      <button onClick={() => changeCategory(Categories.DEFAULT)}>Recent</button>
      <button onClick={() => changeCategory(Categories.CELEBRATION)}>
        Celebration
      </button>
      <button onClick={() => changeCategory(Categories.THANK_YOU)}>
        Thank you
      </button>
      <button onClick={() => changeCategory(Categories.INSPIRATION)}>
        Inspiration
      </button>
    </div>
  );
}
