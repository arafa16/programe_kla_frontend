import React from 'react'
import { updateMenuData } from '../../features/menu/menu';
import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/Form/formTemplate1'

const menuAdminEditPage = () => {
    const {uuid} = useParams();
    const updateData = updateMenuData(uuid);

    return (
        <div>
            <FormTemplate1
                name={updateData.name}
                setName={updateData.setName}
                description={updateData.description}
                setDescription={updateData.setDescription}
                logo={updateData.logo}
                setLogo={updateData.setLogo}
                logoPreview={updateData.logoPreview}
                setLogoPreview={updateData.setLogoPreview}
                link={updateData.link}
                setLink={updateData.setLink}
                isActive={updateData.isActive}
                setIsActive={updateData.setIsActive}
                handleLogoChange={updateData.handleLogoChange}
                handleCancel={updateData.handleCancel}
                isLoading={updateData.isLoading}
                handleSubmit={updateData.handleSubmit}
            />
        </div>
    )
}

export default menuAdminEditPage