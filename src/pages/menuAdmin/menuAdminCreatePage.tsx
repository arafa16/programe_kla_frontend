import React from 'react'
import FormTemplate1 from '../../components/Form/formTemplate1'
import { createMenuData } from '../../features/menu/menu'
import { create } from 'lodash';

const menuAdminCreatePage = () => {
    const createMenu = createMenuData();

    return (
        <div>
            <FormTemplate1
                name={createMenu.name}
                setName={createMenu.setName}
                description={createMenu.description}
                setDescription={createMenu.setDescription}
                logo={createMenu.logo}
                setLogo={createMenu.setLogo}
                logoPreview={createMenu.logoPreview}
                setLogoPreview={createMenu.setLogoPreview}
                link={createMenu.link}
                setLink={createMenu.setLink}
                isActive={createMenu.isActive}
                setIsActive={createMenu.setIsActive}
                handleLogoChange={createMenu.handleLogoChange}
                handleCancel={createMenu.handleCancel}
                isLoading={createMenu.isLoading}
                handleSubmit={createMenu.handleSubmit}
            />
        </div>
    )
}

export default menuAdminCreatePage