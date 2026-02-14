import { Home  } from "../pages/Home/Home"
import  { Results } from "../pages/Results/Result";

const routes = {
    '/home': Home,
    '/result': Results
}


export function router() {
    const path = window.location.pathname
    const page = routes[path] || Home

    const app = document.getElementById('app')

    app.innerHTML = page();

    window.scrollTo(0,0)
}

export function navigate(path){
    window.history.pushState({}, '', path)
    router();
}

window.addEventListener('popstate', router)