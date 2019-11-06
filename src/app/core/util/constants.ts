export class Constants {

    public static get URL_TEMPLATE(): string {
        return "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png";
    }

    public static get OPTIONS(): Object {
        return {
            attribution: `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>`
        }
    }
}
