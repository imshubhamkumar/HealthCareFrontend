import { ButtonComponent } from "../Button"
import { CustomText } from "../Text"

export const CustomTable1 = () => {
    return(
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-dark dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr className="border-b border-gray-400">
                        <th scope="col" className="px-6 py-3">
                        <CustomText text="Time" size={1.2} bold/>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <CustomText text="Patient Name" size={1.2} bold/>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <CustomText text="Reason" size={1.2} bold/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b border-gray-400">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <CustomText text="9:00 AM" bold/>
                        </th>
                        <td className="px-6 py-4">
                            <CustomText text="9:00 AM" bold/>
                        </td>
                        <td className="px-6 py-4">
                            <CustomText text="9:00 AM" bold/>
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-400">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <CustomText text="9:00 AM" bold/>
                        </th>
                        <td className="px-6 py-4">
                            <CustomText text="9:00 AM" bold/>
                        </td>
                        <td className="px-6 py-4">
                            <CustomText text="9:00 AM" bold/>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
export const CustomTable2 = () => {
    return(
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-dark dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr className="border-b border-gray-400">
                        <th scope="col" className="px-6 py-3">
                        <CustomText text="Name" size={1.2} bold/>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <CustomText text="Last Visit" size={1.2} bold/>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <CustomText text="Action" size={1.2} bold/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b border-gray-400">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <CustomText text="Alice Johnson" bold/>
                        </th>
                        <td className="px-6 py-4">
                            <CustomText text="2023-06-01" bold/>
                        </td>
                        <td className="px-6 py-4">
                            <ButtonComponent label="View Profile"/>
                        </td>
                    </tr>
                    <tr className="bg-white border-b border-gray-400">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <CustomText text="Bob Williams" bold/>
                        </th>
                        <td className="px-6 py-4">
                            <CustomText text="2023-05-28" bold/>
                        </td>
                        <td className="px-6 py-4">
                            <ButtonComponent label="View Profile"/>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}