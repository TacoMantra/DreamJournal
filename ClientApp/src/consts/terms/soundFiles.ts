import ISoundFile from '../../models/sound-file';

const soundFiles: Record<string, ISoundFile> = {
    windchimes: {
        name: 'Wind Chimes',
        file: 'WindChimes',
    },
    orchestra: {
        name: 'Orchestra',
        file: 'Orchestra',
    },
    bell: {
        name: 'Bell',
        file: 'Bell',
    },
};

export default soundFiles;
