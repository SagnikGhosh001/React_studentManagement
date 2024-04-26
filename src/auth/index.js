//isloggedin
export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) {
        return true;
    }
    else {
        return false;
    }
}

//doLogin=>data=>set to loacalstorage
export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next()
}

//dataLogout=>remove from locastorage
export const doLogout = (next) => {
    localStorage.removeItem("data")
    next()
}

//get currentuser
export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem("data")).user;
    } else {
        return undefined;
    }
};

//get token for private axios
export const getToken=()=>{
    if(isLoggedIn()){
      return JSON.parse(localStorage.getItem("data")).token;
    }else{
      return null;
    }
  }
