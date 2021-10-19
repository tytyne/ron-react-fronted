import authenticationService from "../services/auth.service"
export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log("check response",response)
        console.log("check data",data)
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                // authenticationService.logout();
                authenticationService.logout();
                // location.reload(true);
                // localStorage.removeItem("user")
                // window.location.href="/unauthorised"
                window.location.reload();
               

            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}