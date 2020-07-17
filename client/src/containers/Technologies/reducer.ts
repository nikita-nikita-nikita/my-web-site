type card = {
    link: string,
    title: string
}

export type initialStateTechnologiesType = Array<card>;

const initialState: Array<card> = [
    {
        link: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png",
        title: "React"
    },
    {
        link: "https://cdn.worldvectorlogo.com/logos/css3.svg",
        title: "CSS"
    },
    {
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        title: "HTML"
    },
    {
        link: "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
        title: "Redux"
    },
    {
        link: "https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg",
        title: "Apollo"
    },
    {
        link: "https://user-images.githubusercontent.com/4254571/67077774-a4533c80-f1af-11e9-9433-d836ef6f137d.png",
        title: "React saga"
    },
    {
        link: "https://polyakovdmitriy.ru/wp-content/uploads/2019/05/nodejs.png.pagespeed.ce_.9zN9M5IW0F.png",
        title: "Node js"
    },
    {
        link: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        title: "Express js"
    },
    {
        link: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
        title: "Socket.io"
    },
    {
        link: "https://www.ict360.cloud/wp-content/uploads/2017/10/mongo.png",
        title: "Mongo db"
    }
]


export default (state: Array<card> = initialState, action: any) => {
    return state;
}


