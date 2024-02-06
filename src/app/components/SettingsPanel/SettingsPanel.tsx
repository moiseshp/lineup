'use client';

const SettingsPanel = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="label font-bold">
          <span className="label-text">Player count</span>
        </div>
        <div className="flex justify-between gap-1">
          {[6, 7, 8, 9, 10, 11].map((option) => (
            <button
              key={option}
              className="border flex items-center justify-center w-full h-10 border-gray-300 text-sm"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="label font-bold">
          <span className="label-text">Formation</span>
        </div>
        <select className="select select-bordered w-full rounded-none">
          <option disabled selected>
            Who shot first?
          </option>
          <option>4-3-2-1</option>
          <option>3-5-2</option>
        </select>
      </div>

      <div>
        <div className="label font-bold">
          <span className="label-text">Jersey colors</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="pl-1 text-sm">First color</div>
            <div className="w-8 h-8 rounded border border-gray-300 bg-white" />
          </div>
          <div className="flex items-center gap-4">
            <div className="pl-1 text-sm">Second color</div>
            <div className="w-8 h-8 rounded border border-gray-300 bg-yellow-600" />
          </div>
        </div>
      </div>

      <div>
        <div className="label font-bold">
          <span className="label-text">Kit type</span>
        </div>
        <div className="flex justify-between gap-1">
          {[1, 2, 3, 4, 5].map((option) => (
            <button
              key={option}
              className="border flex items-center justify-center w-full h-12 border-gray-300 text-sm"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="label font-bold">
          <span className="label-text">Soccer Board</span>
        </div>
        <div className="flex justify-between gap-1">
          {[1, 2, 3, 4].map((option) => (
            <button
              key={option}
              className="border flex items-center justify-center w-full h-12 border-gray-300 text-sm"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-4">
            <div className="pl-1 text-sm">3D Board</div>
            <input type="radio" name="design-board" className="radio" checked />
          </div>
          <div className="flex items-center gap-4">
            <div className="pl-1 text-sm">Flat board</div>
            <input type="radio" name="design-board" className="radio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
