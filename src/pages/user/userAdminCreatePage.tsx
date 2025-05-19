import React from 'react'
import { createUserData } from '../../features/user/user'
import FormTemplate2 from '../../components/Form/formTemplate2'
const userAdminCreatePage = () => {
    const createUser = createUserData()

  return (
    <div>
        <FormTemplate2
            name={createUser.name}
            setName={createUser.setName}
            userName={createUser.userName}
            setUserName={createUser.setUserName}
            email={createUser.email}
            setEmail={createUser.setEmail}
            password={createUser.password}
            setPassword={createUser.setPassword}
            is_active={createUser.is_active}
            setIsActive={createUser.setIsActive}
            handleSubmit={createUser.handleSubmit}
            handleCancel={createUser.handleCancel}
            isLoading={createUser.isLoading}
        />
    </div>
  )
}

export default userAdminCreatePage