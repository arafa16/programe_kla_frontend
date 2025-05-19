import { FormLabel, FormSelect, FormInput } from '../../base-components/Form';
import Button from '../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../base-components/LoadingIcon';

const formTemplate2 = (props : any) => {
    const {
        name, setName, 
        userName, setUserName,
        email, setEmail,
        password, setPassword,
        is_active, setIsActive,
        isLoading,
        handleSubmit,
        handleCancel,
        loadingSubmit,
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
                        <FormLabel htmlFor="userName">User Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="userName"
                            type="text"
                            name='userName'
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="email"
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="is_active">Is Active</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            id="is_active"
                            name='is_active'
                            value={is_active}
                            onChange={(e)=>setIsActive(e.target.value)}
                        >
                            <option value={1}>active</option>
                            <option value={0}>non active</option>
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

export default formTemplate2