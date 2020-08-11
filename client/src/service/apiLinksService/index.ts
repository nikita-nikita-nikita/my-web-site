import axios from 'axios';

class apiLinksService {
    getInstagram = () => {
        return axios.get("https://www.instagram.com/nikita_good_guy/?__a=1")
            .then(({data:{graphql:{user:{profile_pic_url_hd:avatar, username: nickname}} }})=>
                ({avatar, nickname, name:'instagram', linkToProfile:`https://www.instagram.com/${nickname}/`}))
    }

    getGithub = () => {
       return axios.get("https://api.github.com/users/nikita-nikita-nikita")
           .then(({data:{avatar_url:avatar, login:nickname}})=>
               ({avatar, nickname, name:'github', linkToProfile:`https://github.com/${nickname}`}))
    }

    // telegram don't have api to take info about profile ¯\_(ツ)_/¯
    getTelegram = async () => ({nickname:"@STALINNASHPRESIDENT" /*rofl*/ , name:'telegram', linkToProfile:"tg://tele.gg/STALINNASHPRESIDENT"});

    getGmail = async () => ({nickname:"neymarenko123@gmail.com", name:'mail', linkToProfile:"mailto:neymarenko123@gmail.com?Body"});
}

export default new apiLinksService();
