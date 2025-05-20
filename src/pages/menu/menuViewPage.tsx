import React from 'react'
import Button from '../../base-components/Button'
import { getMenuData } from '../../features/menu/menu'
import logo from '../../assets/images/logo/logo_kopkarla_color.png'


const menuViewPage = () => {

  const {menuData, isLoading} = getMenuData();

  return (
    <>
        <div className="px-5 py-5 h-screen overflow-auto">
        <div className="box relative border-transparent bg-blue-400 bg-opacity-20 dark:bg-darkmode-600 intro-y md:w-full min-h-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-16 px-12 pt-24 md:pt-12 pb-48 md:pb-12 justify-items-center">
            {/* BEGIN: Menu Content */}
            {menuData && menuData.map((item:any) => (
              <div key={item.id} className="bg-white p-5 rounded-md shadow-lg grid grid-cols-1 min-h-[200px] w-[250px]">
                <div className="text-lg text-center mb-4 w-full">
                  <img src={import.meta.env.VITE_REACT_APP_API_URL+item.logo_file_link} alt={item.logo_file_link} className="w-16 h-16 mx-auto mb-2" />
                </div>
                <div className="text-[11pt] text-center mb-4">{item.name}</div>
                <div className="text-[9pt] justify-center text-center mb-8">
                  {item.description}
                </div>
                <div className="grid items-end">
                  <Button 
                    className="w-full"
                    type="button"
                    variant="soft-secondary"
                    rounded="rounded"
                    size="sm"
                    onClick={()=>window.open(`${item.link}`,'_blank')}
                    >Visit Aplikasi
                  </Button>
                </div>
              </div>
            ))}
            {/* END: Menu Content */}
          </div>
          {/* BEGIN: Footer Content */}
          <div className="absolute bottom-0  dark:bg-darkmode-600 w-full">
            <div className="box bg-white bg-opacity-80 border-transparent grid grid-cols-12 mt-5 p-5 my-5 mx-5">
              <div className="grid items-end justify-center md:justify-end mx-4 col-span-12 sm:col-span-1 sm:col-start-10">
                <div className="flex justify-center md:justify-end">
                  <img src={logo} alt="Logo" className="w-8 h-8 mb-1" />
                </div>
              </div>
              <div className="grid items-center justify-center md:justify-start col-span-12 intro-y sm:col-span-2 sm:col-start-11">
                <div className="text-[9pt] text-center md:text-start">2025.v1.0.0</div>
                <div className="text-[9pt] text-center md:text-start">Created by Ara Fa Adri</div>
              </div>
              
            </div>
          </div>
          {/* END: Footer Content */}
        </div>
      </div>
    </>
  )
}

export default menuViewPage