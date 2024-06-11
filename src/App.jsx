import Header from './components/Header'
import Body from './components/Body';
const App = () => {
  return (

    <div className='flex flex-col rounded-lg py-2'>
      <Header />
      <Body />
      <p>Hello world</p>
    </div>
  );
};

export default App;
