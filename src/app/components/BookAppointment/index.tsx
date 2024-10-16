"use client"

import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import { ButtonComponent } from '../Button';
import { CustomText } from "../Text";
import { useState } from "react";
interface Props {
  onClose?: () => void
  isVisible: boolean
}
const BookAppointment = (props: Props) => {
  const { onClose, isVisible } = props
  if (!isVisible) return null;
  return (
    <>

      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <CustomText text={'Book an appointment'} color="#0099d7" bold={true} size={2} />
          {/* Form */}
          <form>
            <div className="flex flex-row w-full gap-2">
              <div className='flex flex-col w-1/2 gap-2'>
                {/* Select Doctor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Doctor
                  </label>
                  <select className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Choose a doctor</option>
                    <option>Dr. Smith</option>
                    <option>Dr. Jane Doe</option>
                  </select>
                </div>
                {/* Select Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {/* <CalendarIcon className="h-5 w-5 text-gray-400" /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-1/2">
                {/* Available Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button type="button" className="px-4 py-1 bg-gray-200 rounded text-sm">
                      9:00 AM
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded text-sm">
                      10:00 AM
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded text-sm">
                      11:00 AM
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded text-sm">
                      1:00 PM
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded text-sm">
                      2:00 PM
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded text-sm">
                      3:00 PM
                    </button>
                  </div>
                </div>
                {/* Reason for Visit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Visit
                  </label>
                  <textarea
                    rows={3}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>


            </div>

            {/* Confirm Booking Button */}
            <div className="mt-6 text-center flex justify-end gap-2">
              <ButtonComponent label='Confirm Booking' />
              <ButtonComponent label="Cancel" bg="#a6a6a6" onClick={onClose} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;