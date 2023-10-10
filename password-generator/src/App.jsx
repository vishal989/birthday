function App() {
  return (
    <div className="w-full max-w-md mx-auto h-32 shadow-md rounded-lg px-4 my-24 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          // value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
            min={6}
            max={100}
            // value={length}
            className="cursor-pointer"
            onChange={(e) => {}}
          />
          <label className="">Length: </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            // defaultChecked={}
            // id=""
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
