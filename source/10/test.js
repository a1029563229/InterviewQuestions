function _toString(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function useState(defaultState) {
  console.log(_toString(this));
  const state = defaultState;

  return [defaultState, () => {}];
}

function useEffect() {

}


const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log({ num });
  }, [num]);

  setNum(() => num * 2);
}

const Component = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log({ num });
  }, [num]);

  setNum(() => num + 1);
}

const react = {
  App,
  Component
}

App();
App();
App();
App();
App();

Component();
Component();
Component();
Component();
Component();