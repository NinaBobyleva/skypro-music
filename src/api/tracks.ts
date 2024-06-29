const TRACK_URL = "https://skypro-music-api.skyeng.tech/catalog/track/";

export async function getTracks() {
    const res = await fetch(`${TRACK_URL}all/`);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
}
