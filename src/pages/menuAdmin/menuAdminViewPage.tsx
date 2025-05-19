import React from 'react'
import { getMenuTableData } from '../../features/menu/menu'
import Table1 from '../../components/Tables/table1'

const menuAdminViewPage = () => {
    const menu = getMenuTableData();

    return (
        <div>
            <Table1
                datas={menu.menuTableData}
                limit={menu.limit}
                page={menu.page}
                allPage={menu.allPage}
                setPage={menu.setPage}
                setLimit={menu.setLimit}
                setSearch={menu.setSearch}
                isLoading={menu.isLoading}
                linkCreate="/admin/menu/create"
                linkEdit="/admin/menu/edit/"
                linkView="/admin/menu/view/"
            />
        </div>
    )
}

export default menuAdminViewPage