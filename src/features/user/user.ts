import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserTable,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    resetUser,
} from "../../stores/features/userSlice";
import { useNavigate } from "react-router-dom";

export const getUserDataTable = () => {
    const dispatch = useDispatch();
    const [userTableData, setUserTableData] = useState<any>([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [allPage, setAllPage] = useState(0);

    const {data, isLoading, isError, isGetSuccess, message} = useSelector((state:any) => state.user);

    useEffect(() => {
        dispatch(getUserTable({limit, page, search}));
    },[limit, page, search]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isGetSuccess && !isLoading) {
            setUserTableData(data && data.datas && data.datas.data);
            handleCount(data && data.datas && data.datas.data && data.datas.data.count);
        }
        dispatch(resetUser());
        
    }, [data, isError, isGetSuccess, message]);

    const handleCount = (allData:any) => {
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const handleNextPage = () => {
        if (page < allPage) {
            setPage(page + 1);
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return {handleNextPage, handlePrevPage, userTableData, limit, page, allPage, setPage, setLimit, setSearch, isLoading};
}

export const createUserData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [is_active, setIsActive] = useState(1);
    const {isLoading, isError, isCreateSuccess, message} = useSelector((state:any) => state.user);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(createUser({name, userName, email, password, is_active}));
    }

    const handleCancel = () => {
        navigate("/admin/user");
    }

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isCreateSuccess && !isLoading) {
            navigate("/admin/user");
        }
        dispatch(resetUser());
    }, [isError, isCreateSuccess, message]);

    return {
        name, setName,
        userName, setUserName,
        email, setEmail,
        password, setPassword,
        is_active, setIsActive,
        isLoading,
        handleSubmit,
        handleCancel
    }
}

export const getUserByIdData = (uuid:any) => {
    const dispatch = useDispatch();
    const [userByIdData, setUserByIdData] = useState<any>([]);
    const {data, isLoading, isError, isGetSuccess, message} = useSelector((state:any) => state.user);

    useEffect(() => {
        dispatch(getUserById(uuid));
    },[uuid]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isGetSuccess && !isLoading) {
            setUserByIdData(data && data.datas && data.datas.data);
        }
        dispatch(resetUser());
        
    }, [data, isError, isGetSuccess, message]);

    return {userByIdData, isLoading}
}

export const deleteUserData = (uuid:any) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const {isLoading, isError, isDeleteSuccess, message:messageUser} = useSelector((state:any) => state.user);
    const navigate = useNavigate();
    const handleDelete = () => {
        dispatch(deleteUser(uuid));
    }

    useEffect(() => {
        if (isError && !isLoading) {
            if (messageUser) {
                setMessage(messageUser);
            }
        }
        if (isDeleteSuccess && !isLoading) {
            if (messageUser) {
                setMessage(messageUser);
            }
            navigate("/admin/user");
        }
        dispatch(resetUser());
    }, [isError, isDeleteSuccess, messageUser]);

    return {handleDelete, message, isLoading};
}

export const updateUserData = (uuid:any) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [is_active, setIsActive] = useState(1);
    const {data, isLoading, isGetSuccess, isError, isUpdateSuccess, message} = useSelector((state:any) => state.user);
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(updateUser({uuid, name, username, email, password, is_active}));
    }

    const handleCancel = () => {
        navigate("/admin/user");
    }

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isUpdateSuccess && !isLoading) {
            navigate("/admin/user");
        }
        dispatch(resetUser());
    }, [isError, isUpdateSuccess, message]);

    useEffect(() => {
        dispatch(getUserById(uuid));
    },[uuid]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isGetSuccess && !isLoading) {
            setName(data && data.datas && data.datas.data.name);
            setUsername(data && data.datas && data.datas.data.username);
            setEmail(data && data.datas && data.datas.data.email);
            setPassword(data && data.datas && data.datas.data.password);
            setIsActive(data && data.datas && data.datas.data.is_active ? 1 : 0);
        }
        dispatch(resetUser());
    }, [data, isError, isGetSuccess, message]);


    return {
        name, setName,
        username, setUsername,
        email, setEmail,
        password, setPassword,
        is_active, setIsActive,
        isLoading,
        handleSubmit,
        handleCancel
    }
}