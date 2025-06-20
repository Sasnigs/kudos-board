import "./Filter.css"

export default function Filter({ setCategory, Categories }) {
  function changeCategory(category) {
    setCategory(category);
  }
  return (
    <div className="category">
      <button onClick={() => changeCategory(Categories.DEFAULT)}>All</button>
      <button onClick={() => changeCategory(Categories.RECENT)}>Recent</button>
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
