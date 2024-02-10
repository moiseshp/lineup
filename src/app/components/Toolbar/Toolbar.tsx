'use client';

import DownloadIcon from '@/components/icons/components/Download';
import FolderOpenIcon from '@/components/icons/components/FolderOpen';
import SaveIcon from '@/components/icons/components/Save';
import ShareIcon from '@/components/icons/components/Share2';

// import PencilLineIcon from '@/components/icons/components/PencilLine';
// import { usePersonalizeModalStore } from '../store/usePersonalizeModalStore';

const Toolbar = () => {
  // const { show: showPersonalizeModal } = usePersonalizeModalStore();

  return (
    <div className="btm-nav lg:relative z-10 lg:justify-between lg:gap-2 shadow-2xl lg:shadow-transparent shadow-current">
      <button className="lg:btn lg:basis-auto lg:flex-row">
        <FolderOpenIcon />
        <span className="btm-nav-label text-xs lg:text-sm ">My LineUp</span>
      </button>
      <button className="lg:btn lg:basis-auto lg:flex-row">
        <SaveIcon />
        <span className="btm-nav-label text-xs lg:text-sm">Save</span>
      </button>
      <button className="lg:btn lg:btn-primary lg:flex-1 lg:flex-row">
        <DownloadIcon />
        <span className="btm-nav-label text-xs lg:text-sm">Descargar</span>
      </button>
      <button className="lg:hidden">
        <ShareIcon />
        <span className="btm-nav-label text-xs lg:text-sm">Share</span>
      </button>
    </div>
  );
};

export default Toolbar;
