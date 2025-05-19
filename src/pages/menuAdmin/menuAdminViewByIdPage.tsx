import React from 'react'
import { getMenuByIdData, deleteMenuData } from '../../features/menu/menu'
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';

const menuAdminViewByIdPage = () => {
    const {uuid} = useParams()
    const menu : any = getMenuByIdData(uuid);
    const deleteMenu :any = deleteMenuData(uuid);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/admin/menu/edit/'+uuid)
    }

    const handleBack = () => {
        navigate('/admin/menu')
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this menu?')) {
            deleteMenu.handleDelete(uuid);
            if (deleteMenu.isLoading) {
                alert('Deleting menu...');
            }
            alert('Menu deleted successfully');
            navigate('/admin/menu')
        }
    }

    console.log(menu, 'menuAdminViewByIdPage')

    return (
        <div>
            <div className='box border-transparent bg-white dark:bg-darkmode-600 intro-y md:w-full min-h-full p-5 my-5'>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div className="col-span-12 intro-y sm:col-span-12">
                        <div className='flex items-center justify-start'>
                            <img src={menu.menuByIdData && import.meta.env.VITE_REACT_APP_API_URL+menu.menuByIdData.logo_file_link} alt={menu.menuByIdData && menu.menuByIdData.logo_file_link} className="w-16 h-16 mb-2" />
                        </div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Name</div>
                        <div className="text-[9pt]">{menu.menuByIdData && menu.menuByIdData.name}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Description</div>
                        <div className="text-[9pt]">{menu.menuByIdData && menu.menuByIdData.description}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Link</div>
                        <div className="text-[9pt]">{menu.menuByIdData && menu.menuByIdData.link}</div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Is Active</div>
                        <div className="text-[9pt]">{menu.menuByIdData && menu.menuByIdData.is_active ? 'Active' : 'Not Active'}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Created At</div>
                        <div className="text-[9pt]">{dayjs(menu.menuByIdData && menu.menuByIdData.created_at).format("YYYY-MM-DD HH:mm:ss")}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-4">
                        <div className="text-[9pt] font-medium">Updated At</div>
                        <div className="text-[9pt]">{dayjs(menu.menuByIdData && menu.menuByIdData.updated_at).format("YYYY-MM-DD HH:mm:ss")}</div>
                    </div>
                </div>
                <div className="flex items-center justify-end mt-5">
                    <Button
                        className="mt-5 px-4 ml-2"
                        type="button"
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete()}
                    >Delete
                    </Button>
                    <Button
                        className="mt-5 px-4 ml-2"
                        type="button"
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleEdit()}
                    >Edit
                    </Button>
                    <Button
                        className="mt-5 px-4 ml-2"
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => handleBack()}
                    >Back
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default menuAdminViewByIdPage