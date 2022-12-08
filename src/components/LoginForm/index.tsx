import React, {FC} from "react";
import "./style.css"

const LoginForm: FC = () => {
    const auth = (type: String) => {
        const baseURL = process.env.REACT_APP_BACKEND_IP;
        window.location.href = `${baseURL}/oauth2/authorization/${type}`
    }
    return (
        <div className="modal modal-form" tabIndex={-1}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-4 text-center">
                        <h2 className="text-info">Авторизоваться с помощью</h2>
                        <button type="button" className="btn btn-info px-5" onClick={() => auth("google")}>
                            <i className="bi bi-google"/>&nbsp;Google
                        </button>
                        <button type="button" className="btn btn-info px-5" onClick={() => auth("auth0")}>
                            <i className="bi bi-shield-fill-check"/>&nbsp;Auth0
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;