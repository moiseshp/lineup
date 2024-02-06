const Sidebar = () => {
  return (
    <div className="border">
      <h2 className="card-title">Card title!</h2>
      {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
      <ul>
        <li>Formacion</li>
        <li>
          <h3>Player Count</h3>
          <p>5, 6, 7, 8, 9, 10, 11</p>
        </li>
        <li>
          <h3>Jersey Style</h3>
          <p>Variants</p>
          <p>Colors</p>
        </li>
      </ul>
      <div>Soccer Board</div>

      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Sidebar;
