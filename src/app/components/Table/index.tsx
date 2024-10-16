import { CustomText } from "../Text"

export const CustomTable = () => {
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