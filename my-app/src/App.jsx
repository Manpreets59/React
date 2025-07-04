import './App.css';

const App = () => {
  return (
    <div className="content">
      <div><Header/></div>
      <div>body</div>
      <div>footer</div>
    </div>
  );
};

function Header() {
  return (
    <div className='head'>
      <div className='img'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap62vDxruBYp1XW7orivrXlSdk6_8ORseFA&s"
          alt="Best Street Food "
        />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
