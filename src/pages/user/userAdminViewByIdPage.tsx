import React from 'react'
import { getUserByIdData, deleteUserData } from '../../features/user/user'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../../base-components/Button'

const userAdminViewByIdPage = () => {
    const { uuid } = useParams()
    const userData = getUserByIdData(uuid)
    const deleteUser = deleteUserData(uuid)
    const navigate = useNavigate()

    const handleClickEdit = () => {
        navigate(`/admin/user/edit/${uuid}`)
    }

    const handleClickBack = () => {
        navigate('/admin/user')
    }

    const handleClickDelete = () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteUser.handleDelete()
        }
    }
    

  return (
    <div>
        <div className='box border-transparent bg-white dark:bg-darkmode-600 intro-y md:w-full min-h-full p-5 my-5'>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Name</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Email</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.email}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Username</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.username}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Is Active</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.is_active ? 'Active' : 'Inactive'}</div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Created At</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.created_at}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-3">
                    <div className="text-[9pt] font-medium">Updated At</div>
                    <div className="text-[9pt]">{userData.userByIdData && userData.userByIdData.updated_at}</div>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <Button 
                    size="sm"
                    variant="outline-primary"
                    type="button" 
                    className="mr-2" 
                    onClick={() => handleClickEdit()}
                >
                    Edit
                </Button>
                <Button 
                    size="sm"
                    type="button" 
                    className="mr-2" 
                    variant="outline-danger" 
                    onClick={() => handleClickDelete()}
                >
                    Delete
                </Button>
                <Button 
                    size="sm"
                    type="button" 
                    variant="outline-secondary" 
                    onClick={() => handleClickBack()}
                >
                    Back
                </Button>
            </div>
        </div>
        
    </div>
  )
}

export default userAdminViewByIdPage