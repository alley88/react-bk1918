import http from "utils/request";

export const week_choiceApi = (cityId=10,page=0)=>http.get({
    url:"/ajax/hub/home/v1/web/week_choice.json",
    data:{
        city_id:cityId
        ,page:page
    }
})