export type linkCard = {
    avatar: string
    linkToProfile: string
    name: string
    nickname: string
};

export type initialStateLinksType = Array<linkCard>;

export default (state:initialStateLinksType = [], action:any) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return action.payload;
        case "DELETE_POSTS":
            return [];
        default:
            return state;
    }
}
