import { ButtonComponent } from "../components/Button";
import { Cards } from "../components/Grid";
import { CustomText } from "../components/Text";

export default function Views(){
    return <div>
        <ButtonComponent label="Heloo" bg="blue" />
        <Cards header={<div>Hello</div>}>
            <div>Hello</div>
        </Cards>
        <CustomText
            text={"Hello Text"}
            bold
            size={2}
        />
    </div>
}