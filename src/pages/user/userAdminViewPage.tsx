import React from 'react'
import Table2 from '../../components/Tables/table2'
import { getUserDataTable } from '../../features/user/user'
import { useNavigate } from 'react-router-dom'
const userAdminViewPage = () => {
  const userData = getUserDataTable()
  const navigate = useNavigate()

  const handleClickData = (data : any) => {
    navigate(`/admin/user/view/${data.uuid}`)
  }

  const handleCreateData = () => {
    navigate('/admin/user/create')
  }

  return (
    <div>
      <Table2
        title="User"
        datas={userData.userTableData}
        limit={userData.limit}
        page={userData.page}
        allPage={userData.allPage}
        setPage={userData.setPage}
        setLimit={userData.setLimit}
        setSearch={userData.setSearch}
        handleClickData={handleClickData}
        handleCreateData={handleCreateData}
        handleNextPage={userData.handleNextPage}
        handlePrevPage={userData.handlePrevPage}
        isLoading={userData.isLoading}  
        />
    </div>
  )
}

export default userAdminViewPage