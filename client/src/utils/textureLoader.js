import { TextureLoader } from 'three';

export function loadTexture( path ) {
    return new Promise( ( resolve, reject ) => {
        TextureLoader.load(
            path,
            resolve,
            () => null,
            reject
        );
    });
}
