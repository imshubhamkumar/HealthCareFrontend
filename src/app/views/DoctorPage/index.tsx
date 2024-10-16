import { ButtonComponent } from "@/app/components/Button";
import { Cards } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";
import { CustomTable } from "@/app/components/Table/index";
import { CustomText } from "@/app/components/Text";

export const DoctorPage = () => {
    return (
        <>
            <div className="header-container flex justify-between">
                <div className=""><CustomText text={"Welcome, Dr. Smith"} bold size={2} /></div>
                <div className="">avatar</div>
            </div>
            <Spacer height={40} />
            <section className="main-container">
                <Cards header={<CustomText text={"Today's Appointments"} bold size={1.5} />}>

                    <CustomTable/>
                </Cards>
                <Spacer height={26} />
                <Cards header={<CustomText text={"Recent Patients"} bold size={1.5} />}>
                    <CustomText
                        text={
                            <ul style={{ listStyle: 'square', marginLeft: "26px" }}>
                                <li>Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM</li>
                                <li>Following: Dr. Johnson on June 22, 2023 at 2:00 PMNext appointment: Dr. Smith on June 15, 2023 at 10:00 AM</li>
                            </ul>
                        }
                    />
                </Cards>
            </section>
            <Spacer height={26} />
            <div className="buttons-container flex justify-between">
                <ButtonComponent label="Book Appointment" />
                <ButtonComponent label="View Health Records" />
                <ButtonComponent label="Message Provider " />
            </div>
        </>
    );
}