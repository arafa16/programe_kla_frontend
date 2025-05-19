import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getMenu,
    getMenuTable,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu,
    resetMenu,
} from "../../stores/features/menuSlice";
import { useNavigate } from "react-router-dom";

export const getMenuData = () => {
    const dispatch = useDispatch();
    const [menuData, setMenuData] = useState<any>([]);

    const {data, isLoading, isError, isGetSuccess, message} = useSelector((state:any) => state.menu);

    useEffect(() => {
        dispatch(getMenu());
    },[]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isGetSuccess && !isLoading) {
            setMenuData(data && data.datas && data.datas.data);
        }
        dispatch(resetMenu());
        
    }, [data, isError, isGetSuccess, message]);

    return {menuData, isLoading};
}

export const getMenuTableData = () => {
    const dispatch = useDispatch();
    const [menuTableData, setMenuTableData] = useState<any>([]);
    const [limit, setLimit] = useState(10); 
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [allPage, setAllPage] = useState(0);

    const {data, isLoading, isError, isGetSuccess, message} = useSelector((state:any) => state.menu);

    useEffect(() => {
        dispatch(getMenuTable({limit, page, search}));
    },[limit, page, search]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(message);
        }
        if (isGetSuccess && !isLoading) {
            setMenuTableData(data && data.datas && data.datas.data);
            handleCount(data && data.datas && data.datas.data && data.datas.data.count);
        }
        dispatch(resetMenu());
        
    }, [data, isError, isGetSuccess, message]);

    const handleCount = (allData:any) => {
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const handleNext = () => {
        if (page < allPage) {
            setPage(page + 1);
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return {menuTableData, limit, page, allPage, isLoading, setPage, handleCount, handleNext, handlePrev, setLimit, setSearch};
}

export const createMenuData = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [logoPreview, setLogoPreview] = useState("");
    const [link, setLink] = useState("");
    const [isActive, setIsActive] = useState("1");
    const [message, setMessage] = useState("");
    const {data: menuData, isLoading, isError, isCreateSuccess, message:messageMenu} = useSelector((state:any) => state.menu);

    const navigate = useNavigate();

    const handleCancel = () => {
        setName("");
        setDescription("");
        setLogo("");
        setLogoPreview("");
        setLink("");
        setIsActive("1");
        navigate("/admin/menu");
    }
    const handleLogoChange = (e:any) => {
        const file = e.target.files[0];
        setLogo(file);
        setLogoPreview(URL.createObjectURL(file));
    }
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("logo", logo);
        formData.append("link", link);
        formData.append("is_active", isActive);
        dispatch(createMenu({formData}));
    }

    useEffect(() => {
        if (isError && !isLoading) {
            if (messageMenu) {
            setMessage(messageMenu);
            }
            dispatch(resetMenu());
        }
        if (isCreateSuccess && !isLoading) {
            if (messageMenu) {
                setMessage(messageMenu);
            }
            dispatch(resetMenu());
            navigate("/admin/menu");
        }
    }, [menuData, isError, isCreateSuccess, messageMenu]);

    return {handleSubmit, handleLogoChange, handleCancel, name, logoPreview, setLogoPreview, setName, description, setDescription, logo, setLogo, link, setLink, isActive, setIsActive, isLoading};
}

export const getMenuByIdData = (uuid:any) => {
    const dispatch = useDispatch();
    const [menuByIdData, setMenuByIdData] = useState<any>([]);
    const [message, setMessage] = useState("");
    const {data, isLoading, isError, isGetSuccess, message:messageMenu} = useSelector((state:any) => state.menu);

    useEffect(() => {
        dispatch(getMenuById(uuid));
    },[]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(messageMenu);
        }
        if (isGetSuccess && !isLoading) {
            setMenuByIdData(data && data.datas && data.datas.data);
        }

        dispatch(resetMenu());
        
    }, [data, isError, isGetSuccess, messageMenu]);

    return {menuByIdData, isLoading, message};
}

export const deleteMenuData = (uuid:any) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const {data, isLoading, isError, isDeleteSuccess, message:messageMenu} = useSelector((state:any) => state.menu);

    const handleDelete = (uuid:any) => {
        dispatch(deleteMenu(uuid));
    }

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(messageMenu);
        }
        if (isDeleteSuccess && !isLoading) {
            setMessage(messageMenu);
        }
        dispatch(resetMenu());
        
    }, [data, isError, isDeleteSuccess, messageMenu]);

    return {message, handleDelete, isLoading};
}

export const updateMenuData = (uuid:any) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [logoPreview, setLogoPreview] = useState("");
    const [link, setLink] = useState("");
    const [isActive, setIsActive] = useState("1");
    const [message, setMessage] = useState("");
    const {data: menuData, isLoading, isError, isGetSuccess, isUpdateSuccess, message:messageMenu} = useSelector((state:any) => state.menu);

    const navigate = useNavigate();

    const handleCancel = () => {
        setName("");
        setDescription("");
        setLogo("");
        setLogoPreview("");
        setLink("");
        setIsActive("1");
        navigate("/admin/menu");
    }
    const handleLogoChange = (e:any) => {
        const file = e.target.files[0];
        setLogo(file);
        setLogoPreview(URL.createObjectURL(file));
    }
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("logo", logo);
        formData.append("link", link);
        formData.append("is_active", isActive);
        dispatch(updateMenu({formData, uuid}));
    }

    useEffect(() => {
        if (isError && !isLoading) {
            if (messageMenu) {
            setMessage(messageMenu);
            }
        }
        if (isUpdateSuccess && !isLoading) {
            if (messageMenu) {
                setMessage(messageMenu);
            }
            navigate("/admin/menu");
        }
        dispatch(resetMenu());
    }, [menuData, isError, isUpdateSuccess, messageMenu]);

    useEffect(() => {
        dispatch(getMenuById(uuid));
    },[]);

    useEffect(() => {
        if (isError && !isLoading) {
            console.log(messageMenu);
        }
        if (isGetSuccess && !isLoading) {
            setName(menuData && menuData.datas && menuData.datas.data.name);
            setDescription(menuData && menuData.datas && menuData.datas.data.description);
            setLogoPreview(menuData && menuData.datas && menuData.datas.data.logo);
            setLink(menuData && menuData.datas && menuData.datas.data.link);
            setIsActive(menuData && menuData.datas && menuData.datas.data.is_active === true ? "1" : "0");
        }
        dispatch(resetMenu());
        
    }, [menuData, isError, isGetSuccess, messageMenu]);

    return {handleSubmit, handleLogoChange, handleCancel, name, logoPreview, setLogoPreview, setName, description, setDescription, logo, setLogo, link, setLink, isActive, setIsActive, isLoading};
}



    