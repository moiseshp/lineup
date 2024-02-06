'use server';
import { readFile } from 'fs/promises';
import path from 'path';
import satori from 'satori';
import { SocialMediaImage } from '../utils/types';

export async function createSocialMediaImage({
  currentImageUrl,
  jerseyName,
  jerseyNumber,
}: SocialMediaImage) {
  const imageData: ArrayBuffer | any = await readFile(
    path.resolve(process.cwd(), `./src/app/(home)/assets/${currentImageUrl}`),
  );

  return await satori(
    <div
      style={{
        display: 'flex',
        background: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        position: 'relative',
        width: 600,
        height: 600,
        zIndex: 0,
      }}
    >
      <img
        style={{
          position: 'absolute',
          zIndex: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        src={imageData.buffer}
        alt="image"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: 100 }}>{jerseyName}</h1>
        <h1 style={{ fontSize: 300 }}>{jerseyNumber}</h1>
      </div>
    </div>,
    {
      width: 600,
      height: 600,
      fonts: [
        {
          name: 'croatia',
          data: await readFile(
            path.resolve(
              process.cwd(),
              '././src/app/(home)/assets/tshirt-2024.otf',
            ),
          ),
          style: 'normal',
        },
      ],
    },
  );
}
