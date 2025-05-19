import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplate1 = (props : any) => {
    const {
        name, setName, 
        description, setDescription,
        logo, setLogo,
        link, setLink,
        isActive, setIsActive, 
        logoPreview, setLogoPreview,
        isLoading,
        handleSubmit,
        handleLogoChange,
        handleCancel,
        loadingSubmit,
        deleteAction,
        isDeleteActive,
        loadingDelete
    } = props;
    
    const navigate = useNavigate();

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={handleSubmit}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="description"
                            type="text"
                            name='description'
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="logo">Logo</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="logo"
                            type="file"
                            name='logo'
                            accept="image/*"
                            onChange={(e)=>handleLogoChange(e)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="logoPreview">Logo Preview</FormLabel>
                        {logoPreview && <img src={logoPreview} alt="Logo Preview" className="w-20 h-20" />}
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="link">Link</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="link"
                            type="text"
                            name='link'
                            value={link}
                            onChange={(e)=>setLink(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="isActive">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isActive'
                            value={isActive}
                            onChange={(e)=>setIsActive(e.target.value)}
                            >
                            <option></option>
                            <option value={0}>Non Active</option>
                            <option value={1}>Active</option>
                        </FormSelect>
                    </div>
                </div>
                <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>handleCancel()}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="primary" 
                        className={`w-36 ml-2`}
                        size='sm'
                        type='submit'
                        >
                        {isLoading ?   
                        <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                        : 
                        'Save'
                        }
                    </Button>
                    
                </div>
            </form>
        </div>
        
    )
}

export default formTemplate1