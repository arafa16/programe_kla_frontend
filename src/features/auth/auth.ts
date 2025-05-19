import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    loginUser,
    logoutUser,
    getAuth,
    resetAuth
} from "../../stores/features/authSlice";
import { useNavigate } from "react-router-dom";

export const loginHandle = () => {
    const dispatch = useDispatch();
    const {data, isError, isLoginSuccess, isLoading, message} = useSelector((state:any) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        if(isError && !isLoading){
            console.log(message);
        }
        if(isLoginSuccess && !isLoading){
            navigate("/admin/menu");
        }
        dispatch(resetAuth());
    }, [data, isError, isLoginSuccess, message, dispatch]);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(loginUser({email, password}));
    }

    return {handleSubmit, email, setEmail, password, setPassword, isLoading};
}

export const handleLogoutAuth = () => {
    const dispatch = useDispatch();
    const {data, isError, isLogoutSuccess, isLoading, message} = useSelector((state:any) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(isError && !isLoading){
            console.log(message);
        }
        if(isLogoutSuccess && !isLoading){
            navigate("/login");
        }
        dispatch(resetAuth());
    }, [data, isLoading, isError, isLogoutSuccess, message]);

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return {handleLogout};
}

export const getMeData = () => {
    const dispatch = useDispatch();
    const {data, isError, isGetSuccess, isLoading, message} = useSelector((state:any) => state.auth);
    const [userData, setUserData] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAuth());
    },[]);

    useEffect(() => {
        if(isError && !isLoading){
            navigate("/login");
        }
        if(isGetSuccess && !isLoading){
            setUserData(data && data.datas && data.datas.data);
        }
        dispatch(resetAuth());
    }, [data, isError, isGetSuccess, message]);

    return {userData};
}
