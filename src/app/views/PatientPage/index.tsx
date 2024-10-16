import { Avatar } from "@/app/components/Avatar/index";
import { ButtonComponent } from "@/app/components/Button";
import { Cards } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";
import { CustomText } from "@/app/components/Text";

interface Props {
    onClick?: () => void
}

export const PatientPage = (props: Props) => {
    return (
        <>
            <div className="header-container flex justify-between">
                <div className=""><CustomText text={"Welcome, John"} bold size={2} /></div>
                <Avatar firstName="John" lastName="Deo" />
            </div>
            <Spacer height={40} />
            <section className="main-container">
                <Cards header={<CustomText text={"Upcoming Appointments"} bold size={1.5} />}>
                    <CustomText text={"Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM"} />
                    <CustomText text={"Following: Dr. Johnson on June 22, 2023 at 2:00 PMNext appointment: Dr. Smith on June 15, 2023 at 10:00 AM"} />
                </Cards>
                <Spacer height={26} />
                <Cards header={<CustomText text={"Health Reminders"} bold size={1.5} />}>
                    <CustomText
                        text={
                            <ul style={{ listStyle: 'square', marginLeft: "26px" }}>
                                <li>Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM</li>
                                <li>Following: Dr. Johnson on June 22, 2023 at 2:00 PMNext appointment: Dr. Smith on June 15, 2023 at 10:00 AM</li>
                            </ul>
                        }
                    />
                </Cards>
                <Spacer height={26} />
                <Cards header={<CustomText text={"Health Tip of the Day"} bold size={1.5} />}>
                    <CustomText text={"Stay hydrated! Aim to drink at least 8 glasses of water per day."} />
                </Cards>
            </section>
            <Spacer height={26} />
            <div className="buttons-container flex justify-between">
                <ButtonComponent label="Book Appointment" onClick={props.onClick} />
                <ButtonComponent label="View Health Records" />
                <ButtonComponent label="Message Provider " />
            </div>
        </>
    );
}