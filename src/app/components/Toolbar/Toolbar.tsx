'use client';
// import PencilLineIcon from '@/components/icons/components/PencilLine';
// import { usePersonalizeModalStore } from '../store/usePersonalizeModalStore';

const Toolbar = () => {
  // const { show: showPersonalizeModal } = usePersonalizeModalStore();

  return (
    <div className="btm-nav text-[0.65rem] lg:text-sm lg:absolute bottom-0">
      <button className="lg:flex-row lg:gap-4">
        {/* <PencilLineIcon /> */}X
        <span className="btm-nav-label">Personalizar</span>
      </button>
      <button className="lg:flex-row lg:gap-4">
        {/* <PencilLineIcon /> */}X
        <span className="btm-nav-label">Other Menu</span>
      </button>
    </div>
  );
};

export default Toolbar;
