import { ButtonComponent } from "@/app/components/Button";
import { Cards } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";
import { CustomTable1, CustomTable2 } from "@/app/components/Table/index";
import { CustomText } from "@/app/components/Text";

export const DoctorPage = () => {
    return (
        <>
            <div className="header-container flex justify-between">
                <div className=""><CustomText text={"Welcome, Dr. Smith"} bold size={2} /></div>
            </div>
            <Spacer height={40} />
            <section className="main-container">
                <Cards header={<CustomText text={"Today's Appointments"} bold size={1.5} />}>
                    <CustomTable1/>
                </Cards>
                <Spacer height={26} />
                <Cards header={<CustomText text={"Recent Patients"} bold size={1.5} />}>
                   <CustomTable2 />
                </Cards>
            </section>
            <Spacer height={26} />
        </>
    );
}