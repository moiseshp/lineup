import SettingsPanel from './components/SettingsPanel';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';

export default function Home() {
  return (
    <div className="flex gap-6 justify-center">
      <div className="w-80 border rounded-md p-6">
        <SettingsPanel />
      </div>
      <div className="w-[30rem] relative flex flex-col gap-6">
        <div className="border h-[30rem] rounded-md">Board</div>
        <div className="flex gap-4 justify-center">
          <button className="btn px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Save
          </button>

          <button className="btn  btn-primary flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Download
          </button>
        </div>
        {/* <Toolbar /> */}
      </div>
      {/* <div className="w-[14rem] bg-fuchsia-700">03</div> */}
      {/* <div className="flex">
        
        <div>
          <h1>CANCHA</h1>
          <div>-------</div>
        </div>
        <div>
          <h1>Acciones</h1>
          <ul>
            <li>Guardar</li>
            <li>Descargar</li>
            <li>Compartir</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
