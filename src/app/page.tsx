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
        <div className="border">
          <button>Button</button>
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
