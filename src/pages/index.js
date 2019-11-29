import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})


export const Find = Loadable({
    loader:_=>import("./find"),
    loading:Loading
})



export const Order = Loadable({
    loader:_=>import("./order"),
    loading:Loading
})



export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})



export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})