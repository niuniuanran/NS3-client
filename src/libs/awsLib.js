import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    const filename = `${Date.now()}-${file.name}`;

    // Storage.vault.put is the shortcut for a Storage instance with private level set

    /*
    * Storage.configure({ level: 'private' });
    * Storage.put(filename, file, {
        contentType: file.type,
    });
    * */

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type,
    });

    return stored.key;
}