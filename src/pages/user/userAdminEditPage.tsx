import React from 'react'
import { updateUserData } from '../../features/user/user';
import FormTemplate2 from '../../components/Form/formTemplate2';
import { useParams } from 'react-router-dom';
const userAdminEditPage = () => {
    const {uuid} = useParams();
    const updateUser = updateUserData(uuid);

  return (
    <div>
        <FormTemplate2
            name={updateUser.name}
            setName={updateUser.setName}
            userName={updateUser.username}
            setUserName={updateUser.setUsername}
            email={updateUser.email}
            setEmail={updateUser.setEmail}
            password={updateUser.password}
            setPassword={updateUser.setPassword}
            is_active={updateUser.is_active}
            setIsActive={updateUser.setIsActive}
            handleSubmit={updateUser.handleSubmit}
            handleCancel={updateUser.handleCancel}
            isLoading={updateUser.isLoading}
        />
    </div>
  )
}

export default userAdminEditPage