import SettingsPanel from './components/SettingsPanel';
import Toolbar from './components/Toolbar';

export default function Home() {
  return (
    <div className="lg:flex gap-6 justify-center flex-row-reverse">
      <div className="lg:flex lg:flex-col gap-6">
        <div className="lg:border lg:w-[34rem] h-[22rem] lg:h-[34rem] lg:rounded-md bg-green-300">
          Board
        </div>
        <div className="fixed lg:relative bottom-0 left-0 flex gap-2">
          <Toolbar />
        </div>
      </div>
      <div className="lg:block lg:w-80 lg:border lg:rounded-md p-6">
        <SettingsPanel />
      </div>
    </div>
  );
}
